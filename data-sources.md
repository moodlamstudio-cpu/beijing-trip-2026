# แหล่งข้อมูล — ตรวจ 3 ตุลาคม 2026

## Klook

| สถานที่ | วันใช้ตามแผน | ลิงก์ | สิ่งที่ต้องเลือก |
|---|---|---|---|
| วัดลามะ | 22 ต.ค. | https://www.klook.com/th/activity/38523-lama-temple-beijing/ | บัตรเข้าชมให้ตรงเวลา ไม่ใช่รอบทัวร์ที่ไม่ตรงแผน |
| Universal Beijing | ศุกร์ 23 ต.ค. | https://www.klook.com/th/activity/56183-universal-studios-beijing/ | Admission 1 วัน ไม่ใช่ Express Pass อย่างเดียว |
| มู่เถียนยวี่ | 24 ต.ค. | https://www.klook.com/th/activity/3939-mutianyu-great-wall-ticket-beijing/ | Entrance + Internal Shuttle + Chairlift & Toboggan |
| หอสักการะฟ้า | 25 ต.ค. | https://www.klook.com/th/activity/12671-temple-of-heaven-admission-ticket-beijing/ | ตรวจว่าแพ็กเกจรวมอาคารที่ต้องการเข้าชม ไม่ใช่แค่สวน |

แพ็กเกจ Chairlift & Toboggan ยืนยันจากหน้าภาษาอังกฤษ: https://www.klook.com/en-US/activity/3939-mutianyu-great-wall-ticket-beijing/

ลิงก์คือหน้าสินค้า ไม่ได้ยืนยันที่ว่างของวันเดินทางหรือราคาสำหรับผู้ใหญ่ 2 คน ไม่ใช่การจองสำเร็จ Internal Shuttle เป็นรถในด่าน ไม่ใช่รถรับส่งโรงแรมในเมือง และสไลเดอร์ขึ้นกับสภาพอากาศ

## การเปิดแอปและแผนที่

เอกสาร Amap ทางการ: https://lbs.amap.com/api/uri-api/guide/search/search

ใช้ `https://uri.amap.com/search` กับ keyword, city=北京, view=list, src และ callnative=1 ตามเอกสาร รองรับมือถือ/คอม การขอเปิดแอปใช้เฉพาะมือถือและต้องติดตั้งแอป การเปิดสำเร็จขึ้นกับเบราว์เซอร์และระบบปฏิบัติการ ยังไม่ได้ทดสอบบนโทรศัพท์จริง ไม่ใช้จุด x/y จากแผนที่อินโฟกราฟิกเป็นพิกัด GPS

เว็บไซต์ DiDi ทางการ: https://www.didichuxing.com/ (เปลี่ยนเส้นทางไป didiglobal.com) ไม่พบเอกสารสาธารณะทางการที่ยืนยัน deep link ใส่ปลายทางสำหรับจีน จึงใช้คัดลอกชื่อจีน ไม่อ้างว่าเปิด DiDi พร้อมปลายทางได้

เส้นทางรถไฟฟ้าอ้าง JSON เดิม `.work/beijing-trip-2026/trip-map/map-data-and-sources.json` ระยะทางรางรวมตามช่วงสถานี ไม่รวมเดิน/ต่อรถ นับสถานีเปิดใช้งานจริง ไม่นับต้นทางและไม่นับการเปลี่ยนสายเป็นสถานีเพิ่ม

- สาย 14: https://www.mtr.bj.cn/service/line/distable/line-14.html
- สาย 5 / 7: https://wenjuan.bjsubway.com/station/zjgls/
- สาย 6: https://www.bjmoa.cn/metroLineList.html?sline=5
- สาย 8: https://www.bjmoa.cn/metroLineList.html?sline=7
- สาย 19: https://www.bjmoa.cn/metroLineList.html?sline=16
- Airport Express: https://www.bjmoa.cn/metroLineList.html?sline=26

## ภาพสถานที่จริง

ใช้ภาพที่เก็บจากงานโปสเตอร์เดิม ไม่ใช้ภาพ AI เป็นหลักฐานสถานที่จริง แหล่งภาพตามตัวสร้างโปสเตอร์ `.work/beijing-trip-2026/build_a4_poster.mjs`:

- วัดลามะ: https://www.yonghegong.cn/2017-01/05/content_40043333.htm
- 798: https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260323_4563864.html
- หนานหลัวกู่เซี่ยง (ภาพและข้อมูลสถานีรถไฟฟ้าสาย 6): https://english.beijing.gov.cn/specials/beijinglifeonthesubway/landmarksalongthesubwaylines/line6/202206/t20220624_2750389.html
- กำแพง: https://english.beijing.gov.cn/travellinginbeijing/attractions/202603/t20260325_4566115.html
- หอฟ้า: https://english.beijing.gov.cn/beijinginfo/culture/culturaltreasures/sevenculture/202401/t20240111_3532658.html
- Universal: https://russian.visitbeijing.com.cn/article/47K0yo4Foyy
- INDIGO: https://www.indigobeijing.com/en/about-us
- Shichahai: https://spanish.visitbeijing.com.cn/article/47IDRulXrnN
- Qianmen: https://xinwen.bjd.com.cn/content/s64f5bb62e4b00547e3de381d.html

ภาพอ้างอิง UI แบบ 1 เป็นภาพออกแบบ ไม่ใช้แทนภาพสถานที่จริง
