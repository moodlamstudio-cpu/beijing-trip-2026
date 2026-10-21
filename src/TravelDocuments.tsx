import { useEffect, useRef, useState } from 'react';
import { CrossCircledIcon, DownloadIcon, FileIcon, ImageIcon, LockClosedIcon, PlusIcon, ReaderIcon, TrashIcon } from '@radix-ui/react-icons';
import { WebSheet } from './web-ui';

type StoredDocument = { id: string; name: string; type: string; size: number; addedAt: number };
type DocumentRecord = StoredDocument & { file: Blob };
const databaseName = 'beijing-trip-private-documents-v1';
const storeName = 'documents';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName, { keyPath: 'id' });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('เปิดคลังเอกสารไม่ได้'));
  });
}

async function withStore<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const request = run(db.transaction(storeName, mode).objectStore(storeName));
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('จัดการไฟล์ไม่สำเร็จ'));
    });
  } finally { db.close(); }
}

export default function TravelDocuments() {
  const input = useRef<HTMLInputElement>(null);
  const [documents, setDocuments] = useState<StoredDocument[]>([]);
  const [opened, setOpened] = useState<{ name: string; type: string; url: string } | null>(null);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  async function refresh() {
    try {
      const records = await withStore<DocumentRecord[]>('readonly', store => store.getAll());
      setDocuments(records.sort((a, b) => b.addedAt - a.addedAt).map(({ id, name, type, size, addedAt }) => ({ id, name, type, size, addedAt })));
    } catch { setMessage('เบราว์เซอร์นี้ไม่รองรับคลังเอกสาร'); }
  }
  useEffect(() => { void refresh(); }, []);
  useEffect(() => () => { if (opened) URL.revokeObjectURL(opened.url); }, [opened]);

  async function saveFiles(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true); setMessage('');
    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/') && file.type !== 'application/pdf') continue;
        const record: DocumentRecord = { id: crypto.randomUUID(), name: file.name, type: file.type, size: file.size, addedAt: Date.now(), file };
        await withStore<IDBValidKey>('readwrite', store => store.put(record));
      }
      await refresh();
      setMessage('เพิ่มเอกสารไว้ในเบราว์เซอร์นี้แล้ว');
    } catch { setMessage('บันทึกไม่สำเร็จ ลองใช้ไฟล์ PDF หรือรูปภาพขนาดเล็กลง'); }
    finally { setBusy(false); if (input.current) input.current.value = ''; }
  }

  async function viewDocument(id: string) {
    try {
      const record = await withStore<DocumentRecord | undefined>('readonly', store => store.get(id));
      if (!record) return;
      if (opened) URL.revokeObjectURL(opened.url);
      setOpened({ name: record.name, type: record.type, url: URL.createObjectURL(record.file) });
    } catch { setMessage('เปิดเอกสารไม่สำเร็จ'); }
  }

  async function removeDocument(id: string) {
    try { await withStore<undefined>('readwrite', store => store.delete(id)); await refresh(); setMessage('ลบเอกสารออกจากเบราว์เซอร์นี้แล้ว'); }
    catch { setMessage('ลบเอกสารไม่สำเร็จ'); }
  }

  return <>
    <section className="card travel-documents">
      <div className="documents-heading"><div><small>PRIVATE ON THIS DEVICE</small><h3><ReaderIcon/>เอกสารทริป</h3><p>เพิ่มไฟล์ PDF หรือรูป แล้วแตะรายการเพื่อเปิดดูในแอป</p></div><LockClosedIcon aria-hidden="true"/></div>
      <label className="primary document-add"><PlusIcon/>{busy ? 'กำลังบันทึก…' : 'เพิ่มไฟล์เอกสาร'}<input ref={input} type="file" accept="application/pdf,image/*" multiple disabled={busy} onChange={event => void saveFiles(event.target.files)}/></label>
      {message && <p className="document-message" role="status">{message}</p>}
      {documents.length ? <div className="document-list">{documents.map(doc => <div className="document-row" key={doc.id}>
        <button className="document-open" type="button" onClick={() => void viewDocument(doc.id)}>{doc.type === 'application/pdf' ? <FileIcon/> : <ImageIcon/>}<span>{doc.name}<small>{doc.type === 'application/pdf' ? 'PDF' : 'รูปภาพ'} · {Math.max(1, Math.round(doc.size / 1024))} KB</small></span></button>
        <button className="document-delete" type="button" aria-label={`ลบ ${doc.name}`} title="ลบจากเบราว์เซอร์นี้" onClick={() => void removeDocument(doc.id)}><TrashIcon/></button>
      </div>)}</div> : <div className="document-empty"><FileIcon/><span>ยังไม่มีไฟล์ · เพิ่มตั๋วเครื่องบิน ใบจองโรงแรม หรือเอกสารเดินทางได้</span></div>}
      <p className="document-privacy">เก็บในเบราว์เซอร์เครื่องนี้ ไม่อัปโหลดขึ้นเว็บและไม่ซิงก์ข้ามมือถือ/คอมพิวเตอร์ · ผู้ที่ใช้เบราว์เซอร์นี้เปิดดูได้</p>
    </section>
    <WebSheet open={opened !== null} onOpenChange={open => !open && setOpened(null)} title={opened?.name ?? 'เอกสารทริป'} description="ไฟล์ส่วนตัวในเบราว์เซอร์นี้">
      {opened && <div className="sheet-content document-preview">
        <a className="outline" href={opened.url} download={opened.name}><DownloadIcon/>ดาวน์โหลดไฟล์</a>
        {opened.type === 'application/pdf' ? <iframe title={opened.name} src={opened.url} /> : <img src={opened.url} alt={opened.name}/>}
      </div>}
    </WebSheet>
  </>;
}
