import { useState } from 'react';
import { PaperPlaneIcon, ReaderIcon, ChevronRightIcon, ExternalLinkIcon, SewingPinFilledIcon, ClockIcon } from '@radix-ui/react-icons';
import { WebSheet } from './web-ui';
import { amap, siteAsset } from './trip';

type Flight = {
  id: string; label: string; airline: string; code: string;
  origin: string; originName: string; destination: string; destinationName: string;
  depart: string; departDate: string; departZone: string;
  arrive: string; arriveDate: string; arriveZone: string;
  departTerminal: string; arriveTerminal: string; airportBy: string;
  checkin: string; steps: string[]; source: string; airportCN?: string;
};

const flights: Flight[] = [
  {
    id:'outbound', label:'ขาไป · 21 ต.ค. 2026', airline:'Air China', code:'CA960',
    origin:'BKK', originName:'สุวรรณภูมิ · กรุงเทพฯ', destination:'PEK', destinationName:'สนามบินแคปิตอล · ปักกิ่ง',
    depart:'19:35', departDate:'21 ต.ค.', departZone:'เวลาไทย', arrive:'01:25', arriveDate:'22 ต.ค.', arriveZone:'เวลาจีน',
    departTerminal:'อาคารผู้โดยสารหลัก · ชั้น 4', arriveTerminal:'Terminal 3 (T3)', airportBy:'21 ต.ค. 16:35 น. · เวลาไทย',
    checkin:'ไปสุวรรณภูมิ BKK → อาคารผู้โดยสารหลัก ชั้น 4 → เคาน์เตอร์ Air China',
    steps:['เช็คอินและฝากกระเป๋าที่อาคารหลัก ชั้น 4','ผ่านจุดตรวจและตรวจหนังสือเดินทาง','ดูเกทบน Boarding Pass; ถ้าเป็น S101–S128 ให้ตามป้ายไปขึ้นรถไฟ APM ไป SAT-1'],
    source:'https://suvarnabhumi.airportthai.co.th/service/airport-guide/detail/Departure_Procedure_MTB',
  },
  {
    id:'return', label:'ขากลับ · 25 ต.ค. 2026', airline:'China Eastern Airlines', code:'MU2071',
    origin:'PKX', originName:'สนามบินดาซิง · ปักกิ่ง', destination:'BKK', destinationName:'สุวรรณภูมิ · กรุงเทพฯ',
    depart:'19:55', departDate:'25 ต.ค.', departZone:'เวลาจีน', arrive:'00:05', arriveDate:'26 ต.ค.', arriveZone:'เวลาไทย',
    departTerminal:'อาคารผู้โดยสารดาซิง · ชั้น 4', arriveTerminal:'อาคารผู้โดยสารหลัก · ขาเข้า', airportBy:'25 ต.ค. 16:55 น. · เวลาจีน',
    checkin:'ไปดาซิง PKX → อาคารผู้โดยสาร ชั้น 4 → โซน G / China Eastern (ระหว่างประเทศ)',
    steps:['ไปสนามบินดาซิง PKX / 北京大兴国际机场','ขึ้นชั้น 4 โถงขาออก และมองหาโซน G / China Eastern','ดูจอ MU2071 เพื่อยืนยันเคาน์เตอร์ แล้วผ่าน ตม./จุดตรวจไปยังเกทบน Boarding Pass'],
    source:'https://global.ceair.com/global/static/Announcement/TravelTips/AirportInformations/airportinfo/B_Ariport/',
    airportCN:'北京大兴国际机场航站楼',
  },
];

function RouteSummary({flight:f}:{flight:Flight}) {
  return <div className="flight-route">
    <div><strong className="airport-code">{f.origin}</strong><span>{f.originName}</span><b>{f.depart}</b><small>{f.departDate} · {f.departZone}</small></div>
    <div className="flight-route-arrow"><PaperPlaneIcon/><span>บินตรง</span></div>
    <div><strong className="airport-code">{f.destination}</strong><span>{f.destinationName}</span><b>{f.arrive}</b><small>{f.arriveDate} · {f.arriveZone}</small></div>
  </div>;
}

export default function FlightTickets() {
  const publicPages = import.meta.env.VITE_PUBLIC_PAGES === 'true';
  const [selected,setSelected] = useState<Flight|null>(null);
  const [language,setLanguage] = useState<'th'|'en'>('th');
  const [page,setPage] = useState(1);
  const [imageError,setImageError] = useState(false);
  const imageURL=siteAsset(`documents/booking-${language}-${page}.png`);
  function open(f:Flight) {setSelected(f);setLanguage('th');setPage(1);setImageError(false);}
  return <>
    <section className="card flight-tickets">
      <header className="flight-section-heading"><div><small>OUR FLIGHTS</small><h3><PaperPlaneIcon/>ตั๋วเครื่องบินของเรา</h3><p>{publicPages?'แตะเพื่อดูเวลา เทอร์มินอล และจุดเช็คอิน':'กดที่สายการบินเพื่อดูเอกสารจองจริง'}</p></div><span className="airport-reminder">ขาเข้า PEK · ขากลับ PKX</span></header>
      <div className="flight-ticket-grid">{flights.map(f=><button type="button" className={'flight-ticket '+f.id} key={f.id} onClick={()=>open(f)} aria-label={`เปิดตั๋ว ${f.airline} ${f.code}`}>
        <div className="flight-ticket-heading"><div><small>{f.label}</small><h4>{f.airline} <span>{f.code}</span></h4></div><ChevronRightIcon/></div>
        <RouteSummary flight={f}/>
        <div className="flight-terminals"><div><small>ขึ้นเครื่อง / ไปเช็คอิน</small><strong>{f.departTerminal}</strong></div><div><small>ลงเครื่อง</small><strong>{f.arriveTerminal}</strong></div></div>
        <div className="flight-checkin"><SewingPinFilledIcon/><span>{f.checkin}</span></div>
        <div className="flight-open"><ReaderIcon/>{publicPages?'ดูรายละเอียดเที่ยวบิน':'ดูตั๋วและเอกสารจอง'}<ChevronRightIcon/></div>
      </button>)}</div>
      <p className="flight-gate-note">เทอร์มินอลไม่ใช่เลขเกท • เคาน์เตอร์และเกทขึ้นเครื่องให้ดูจอเที่ยวบิน / Boarding Pass ในวันเดินทาง</p>
    </section>
    <WebSheet open={selected!==null} onOpenChange={open=>!open&&setSelected(null)} title={selected?`ตั๋วเครื่องบิน · ${selected.code}`:'ตั๋วเครื่องบิน'} description={selected?`${selected.airline} · ${selected.origin} → ${selected.destination}`:''}>
      {selected&&<div className="sheet-content flight-details">
        <RouteSummary flight={selected}/>
        <p className="booking-location"><SewingPinFilledIcon/>{selected.checkin}</p>
        {publicPages?<div className="card"><h3>เอกสารการจอง</h3><p>เอกสารฉบับจริงเก็บไว้ในโฟลเดอร์ส่วนตัว ไม่ได้เผยแพร่ในลิงก์นี้</p></div>:<><div className="booking-heading"><h3><ReaderIcon/>เอกสารจองของฉัน</h3><a href={siteAsset(language==='th'?'documents/booking.pdf':'documents/booking-en.pdf')} target="_blank" rel="noreferrer">เปิด PDF ต้นฉบับ<ExternalLinkIcon/></a></div>
        <div className="booking-language" aria-label="ภาษาเอกสาร">{(['th','en'] as const).map(lang=><button type="button" key={lang} className={language===lang?'selected':''} aria-pressed={language===lang} onClick={()=>{setLanguage(lang);setPage(1);setImageError(false)}}>{lang==='th'?'ภาษาไทย':'English'}</button>)}</div>
        <div className="booking-pages" aria-label="หน้าเอกสาร">{[1,2,3].map(p=><button type="button" key={p} aria-pressed={page===p} className={page===p?'selected':''} onClick={()=>{setPage(p);setImageError(false)}}>หน้า {p}</button>)}<a href={imageURL} target="_blank" rel="noreferrer">ขยายภาพเต็ม<ExternalLinkIcon/></a></div>
        {imageError?<p className="warning">ยังแสดงภาพไม่ได้ ลองเปิด PDF ต้นฉบับด้านบน</p>:<a className="booking-image-link" href={imageURL} target="_blank" rel="noreferrer" aria-label={`ขยายภาพเอกสารจองหน้า ${page}`}><img key={imageURL} src={imageURL} alt={`เอกสารจอง Trip.com ของฉัน · ${language==='th'?'ภาษาไทย':'English'} · หน้า ${page}`} onError={()=>setImageError(true)}/></a>}</>}
        <div className="airport-direction"><h3><SewingPinFilledIcon/>ต้องไปตรงไหน?</h3><p>{selected.checkin}</p><div className="airport-time"><ClockIcon/><span>เป้าหมายถึงสนามบิน <strong>{selected.airportBy}</strong><small>เผื่อก่อนออก 3 ชั่วโมงตามคำแนะนำในเอกสาร Trip.com</small></span></div><ol>{selected.steps.map(s=><li key={s}>{s}</li>)}</ol>
          {selected.airportCN&&<a className="outline" href={amap(selected.airportCN)} target="_blank" rel="noreferrer">เปิดสนามบินดาซิงใน Amap<ExternalLinkIcon/></a>}
          <a className="airport-source" href={selected.source} target="_blank" rel="noreferrer">คู่มือสนามบิน / สายการบิน<ExternalLinkIcon/></a>
        </div>
        <p className="flight-document-note">วันเวลาและ PEK T3 ยืนยันจากเอกสารจอง • จุดเช็คอินอ้างคู่มือสนามบิน/สายการบินที่ตรวจ 4 ต.ค. 2026</p>
        <p className="muted">เอกสารการจองมีเลขตั๋วและข้อมูลผู้เดินทาง • ใช้ Boarding Pass ของสายการบินสำหรับขึ้นเครื่อง</p>
      </div>}
    </WebSheet>
  </>;
}
