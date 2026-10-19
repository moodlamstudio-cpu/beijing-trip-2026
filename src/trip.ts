export type Entry = {id:string;date:string;day:string;start:string|null;end:string|null;place:string;activity:string;transport:string;cn:string;th:string;en:string;lines:string;status:string;note:string;extra:string;booking:string;timezone:string};
export type Route = {day:number;title:string;stops:number;meters:number;changes:number;legs:string[][];note?:string};
export type Plan = {updated:string;source:string;entries:Entry[];map:{routes:Route[];stations:{cn:string;th:string;en:string;lines:string[]}[];sources:Record<string,string>}};
export type Place = {id:string;th:string;cn:string;en:string;photo?:string;day:number;time:string;ticket?:string;package?:string;note:string;station?:{cn:string;th:string;en:string;lines:string[];note?:string}};
export function siteAsset(path: string) { return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`; }
export const places: Place[] = [
 {id:'lama',th:'วัดลามะ',cn:'雍和宫',en:'Yonghe Temple',photo:'lama',day:1,time:'09:00–10:30',ticket:'https://www.klook.com/th/activity/38523-lama-temple-beijing/',package:'บัตรเข้าชม • 22 ต.ค. 2026',note:'เลือกบัตรเข้าชมให้ตรงเวลา 09:00 ไม่ใช่รอบทัวร์คนละเวลา • ตรวจขั้นตอนแลกบัตรสำหรับพาสปอร์ต • ห้ามถ่ายภาพภายในอาคาร',station:{cn:'雍和宫',th:'หย่งเหอกง',en:'Yonghegong (Lama Temple)',lines:['2','5']}},
 {id:'shichahai',th:'สือช่าไห่ / โฮ่วไห่',cn:'什刹海',en:'Shichahai / Houhai',photo:'shichahai',day:1,time:'11:00–11:30',note:'เดินทะเลสาบและหูท่งตามแรง ตัดช่วงนี้ได้หากเหนื่อยหลังพักสนามบิน',station:{cn:'什刹海',th:'สือช่าไห่',en:'Shichahai',lines:['8']}},
 {id:'nan',th:'หนานหลัวกู่เซี่ยง',cn:'南锣鼓巷',en:'Nanluoguxiang',photo:'nan',day:1,time:'11:30–12:30',note:'เดินเล่นและกินมื้อกลางวัน',station:{cn:'南锣鼓巷',th:'หนานหลัวกู่เซี่ยง',en:'Nanluoguxiang',lines:['6','8']}},
 {id:'art798',th:'ย่านศิลปะ 798',cn:'798艺术区',en:'798 Art Zone',photo:'art798',day:1,time:'16:00–18:00',note:'เดินชิว ถ่ายรูป กินกาแฟ • นิทรรศการบางแห่งจ่ายหรือจองแยก',station:{cn:'高家园',th:'เกาเจียหยวน',en:'Gaojiayuan',lines:['12'],note:'สถานีทางเลือกสำหรับย่าน 798; ตรวจทางเข้าที่เหมาะกับจุดหมายย่อย'}},
 {id:'indigo',th:'ห้าง INDIGO',cn:'颐堤港',en:'INDIGO',photo:'indigo',day:1,time:'18:30–20:00',note:'มื้อเย็นและซื้อของจำเป็นใกล้ที่พัก',station:{cn:'将台',th:'เจียงไถ',en:'Jiangtai',lines:['14']}},
 {id:'universal',th:'ยูนิเวอร์แซล ปักกิ่ง',cn:'北京环球影城',en:'Universal Studios Beijing',photo:'universal',day:2,time:'เวลาเปิดจริง–เย็น',ticket:'https://www.klook.com/th/activity/56183-universal-studios-beijing/',package:'บัตรเข้าสวน 1 วัน • ศุกร์ 23 ต.ค. 2026',note:'เลือก Admission ระบุวัน ไม่ใช่ Express Pass อย่างเดียว • เวลา 09:00 ในแผนคือเวลาเป้าหมายถึง ไม่ใช่เวลาเปิดสวน • ตรวจปฏิทินและชื่อพาสปอร์ตก่อนซื้อ',station:{cn:'环球度假区',th:'ยูนิเวอร์แซลรีสอร์ต',en:'Universal Resort',lines:['7','1-Batong']}},
 {id:'wall',th:'กำแพงมู่เถียนยวี่',cn:'慕田峪长城',en:'Mutianyu Great Wall',photo:'wall',day:3,time:'09:30–13:30',ticket:'https://www.klook.com/th/activity/3939-mutianyu-great-wall-ticket-beijing/',package:'Entrance + Internal Shuttle + Chairlift & Toboggan • 24 ต.ค.',note:'เลือกกระเช้าเก้าอี้ขึ้น + สไลเดอร์ลง ไม่ใช่ Cable Car ไปกลับ • Internal Shuttle คือรถในด่าน ไม่ใช่รถไปกลับจากโรงแรม • ต้องจองรถรับส่งแยก • สไลเดอร์อาจปิดตามอากาศ ยืนยันทางลงสำรอง',station:{cn:'慕田峪长城景区',th:'เขตท่องเที่ยวกำแพงมู่เถียนยวี่',en:'Mutianyu Great Wall Scenic Area',lines:[],note:'ไม่มีรถไฟฟ้าถึงจุดเที่ยวโดยตรง; ใช้รถรับส่ง/รถทัวร์หรือ DiDi'}},
 {id:'temple',th:'หอสักการะฟ้า',cn:'天坛公园东门',en:'Temple of Heaven',photo:'temple',day:4,time:'09:00–10:30',ticket:'https://www.klook.com/th/activity/12671-temple-of-heaven-admission-ticket-beijing/',package:'ตั๋วรวมอาคารที่ต้องการเข้าชม • 25 ต.ค. 2026',note:'ตรวจสิทธิ์เข้าชมอาคารในแพ็กเกจ ไม่ใช่เฉพาะสวน • ออกฝั่งตะวันตกเพื่อเดินไป Tianqiao',station:{cn:'天坛东门',th:'เทียนถานตงเหมิน',en:'Tiantandongmen',lines:['5']}},
 {id:'qianmen',th:'เฉียนเหมิน / ต้าซื่อหลาน',cn:'前门大街',en:'Qianmen / Dashilan',photo:'qianmen',day:4,time:'11:15–12:00',note:'เดินถนนและกินข้าว ไม่เพิ่มกิจกรรมคิวยาวในวันกลับ',station:{cn:'前门',th:'เฉียนเหมิน',en:'Qianmen',lines:['2','8']}},
 {id:'forbidden-city',th:'พระราชวังต้องห้าม',cn:'故宫博物院 午门',en:'The Palace Museum · Meridian Gate',day:0,time:'ยังไม่จัดวัน',note:'พักไว้ก่อน ยังไม่ใส่ในแผนรายวัน • วันเปิดปกติอังคาร–อาทิตย์ 08:30–17:00 (ช่วง เม.ย.–ต.ค.) หยุดรับเข้า 16:00 • ปิดวันจันทร์ • บัตรทั่วไปช่วงนี้ 60 หยวน/คน • ต้องจองล่วงหน้าผ่านช่องทางทางการและใช้พาสปอร์ต; ไม่มีขายบัตรวันเข้าชม',station:{cn:'天安门东 / 天安门西',th:'เทียนอันเหมินตง / เทียนอันเหมินซี',en:'Tiananmen East / Tiananmen West',lines:['1'],note:'ทางเข้าชมหลักคือ Meridian Gate (午门); ตรวจจุดนัดหมายและทางเข้าจากบัตรจอง'}}
];
export const hotel = {th:'Qiuguo Hotel (Beijing Communication University Huangqu Metro Station Branch)',cn:'秋果酒店（北京传媒大学黄渠地铁站店）',en:'Qiuguo Hotel · Huangqu Metro Station Branch',id:'hotel',checkIn:'22 ต.ค. 2026 หลัง 14:00',checkOut:'25 ต.ค. 2026 ก่อน 12:00',station:{cn:'黄渠',th:'หวงฉวี',en:'Huangqu',lines:['6']},note:'ที่พัก · สถานีใกล้ที่พัก 黄渠 / Huangqu สาย 6'};
export const hotelPlace:Place={id:'hotel',th:hotel.th,cn:hotel.cn,en:hotel.en,day:0,time:'',note:hotel.note,station:hotel.station};
export const pekPlace:Place={id:'pek',th:'สนามบินปักกิ่งแคปิตอล · T3',cn:'北京首都国际机场 T3',en:'Beijing Capital International Airport Terminal 3',day:0,time:'',note:'สนามบินขาเข้า • Terminal 3',station:{cn:'首都机场3号航站楼',th:'สถานีเทอร์มินอล 3 สนามบินแคปิตอล',en:'Capital Airport Terminal 3',lines:['Airport Express']}};
export const pkxPlace:Place={id:'pkx',th:'สนามบินปักกิ่งต้าซิง · PKX',cn:'北京大兴国际机场',en:'Beijing Daxing International Airport',day:0,time:'',note:'สนามบินขากลับ • PKX',station:{cn:'大兴机场',th:'ต้าซิงจีฉ่าง',en:'Daxing Airport',lines:['Daxing Airport Express']}};
export const checks = [
 ['book-hotel','จองโรงแรม 3 คืน และยืนยันฝากกระเป๋าเช้า'],['book-lama','บัตรวัดลามะ • 22 ต.ค.'],['book-universal','บัตร Universal • ศุกร์ 23 ต.ค.'],['book-wall','Mutianyu + Chairlift + Toboggan • 24 ต.ค.'],['book-transfer','รถไปกลับ Mutianyu และจุดนัดจริง'],['book-temple','บัตรหอฟ้า • 25 ต.ค.'],['passport','พาสปอร์ตและสำเนาออฟไลน์'],['payment','ตั้งค่า Alipay / WeChat และการชำระเงิน'],['internet','อินเทอร์เน็ต / eSIM และแอปแผนที่'],['offline','บันทึกตั๋วและแผนที่ไว้ใช้เมื่อเน็ตไม่ดี'],['pkx','ยืนยันสนามบินขากลับ PKX และเวลาเที่ยวบิน'],['packing','รองเท้าเดิน เสื้อกันหนาว และ Power bank']
];
export const departure = new Date('2026-10-21T19:35:00+07:00').getTime();
export const arrivalHome = new Date('2026-10-26T00:05:00+07:00').getTime();
export function amap(cn:string) { const p = new URLSearchParams({keyword:cn,city:'北京',view:'list',src:'BeijingTrip2026',callnative:'1'}); return 'https://uri.amap.com/search?'+p.toString(); }
export function dateCN(time:number) { return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(time)); }
export function clockCN(time:number) { return new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(time)); }
export function dayOf(time:number) { const d = dateCN(time); return d >= '2026-10-22' && d <= '2026-10-25' ? Number(d.slice(-2))-21 : 0; }
export function selectNow(entries:Entry[],time:number) {
 const date=dateCN(time), today=entries.filter(e=>e.date===date && e.timezone==='Asia/Shanghai');
 const hm=clockCN(time);
 const current=today.find((e,i)=>e.start && e.start<=hm && hm<(e.end || today.slice(i+1).find(n=>n.start)?.start || '23:59'));
 const next=today.find(e=>e.start && e.start>hm);
 return {current,next,today};
}
export function entryPlace(e:Entry): Place|undefined {
 const text = `${e.place} ${e.activity} ${e.cn}`.toLowerCase();
 const target=e.place.split('→').at(-1)?.trim().toLowerCase()||e.place.toLowerCase();
 const has=(pattern:RegExp,s=target)=>pattern.test(s);
 if (has(/\bpkx\b|daxing|ต้าซิง/)) return pkxPlace;
 if (has(/\bpek\b|capital|แคปิตอล/)) return pekPlace;
 if (has(/qiuguo|秋果|hotel|โรงแรม|ที่พัก|酒店|huangqu|黄渠/)) return hotelPlace;
 const candidates:Array<[RegExp,string]>=[
  [/雍和宫|yonghe|lama|วัดลามะ/,'lama'],[/什刹海|shichahai|houhai|สือช่าไห่|โฮ่วไห่/,'shichahai'],[/南锣鼓巷|nanluo|หนานหลัว/,'nan'],[/798|高家园|art zone|ย่านศิลปะ/,'art798'],[/颐堤港|indigo/,'indigo'],[/环球度假区|universal|citywalk|环球影城|ในสวนสนุก/,'universal'],[/慕田峪|mutianyu|great wall|长城|กำแพง/,'wall'],[/天坛|tiantan|temple of heaven|หอสักการะ/,'temple'],[/前门|qianmen|dashilan|เฉียนเหมิน|ต้าซื่อหลาน/,'qianmen'],[/天安门|故宫|palace museum|forbidden city|พระราชวังต้องห้าม/,'forbidden-city']
 ];
 for(const [pattern,id] of candidates){if(has(pattern)||pattern.test(text)){const found=places.find(p=>p.id===id);if(found)return found}}
 return undefined;
}
