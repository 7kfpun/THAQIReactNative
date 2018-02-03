const regions = [{
  id: '1',
  name: {
    en: 'Bangkok Metropolitan Region',
    th: 'กรุงเทพฯและปริมณฑล',
  },
  stations: [
    '03t',
    '05t',
    '10t',
    '50t',
    '52t',
    '53t',
    '59t',
    '61t',
    '08t',
    '17t',
    '19t',
    '27t',
  ],
}, {
  id: '2',
  name: {
    en: 'Northern Provinces',
    th: 'ภาคเหนือ',
  },
  stations: [
    '57t',
    '73t',
    '35t',
    '36t',
    'm101',
    '37t',
    '38t',
    '39t',
    '40t',
    '68t',
    '58t',
    '67t',
    '75t',
    '69t',
    '70t',
    '76t',
  ]
}, {
  id: '3',
  name: {
    en: 'Eastern Provinces',
    th: 'ภาคตะวันออก',
  },
  stations: [
    '60t',
    '32t',
    '33t',
    '34t',
    '28t',
    '30t',
    '74t',
    'a29',
    'm8',
    '77t',
    '71t',
  ]
}, {
  id: '5',
  name: {
    en: 'Eastern Provinces',
    th: 'ภาคตะวันออกเฉียงเหนือ',
  },
  stations: [
    '72t',
    '46t',
    '47t',
  ]
}, {
  id: '7',
  name: {
    en: 'Central And Western Provinces',
    th: 'ภาคกลางและตะวันตก',
  },
  stations: [
    '41t',
    '79t',
    '24t',
    '25t',
    '21t',
    '26t',
  ]
}];


const stations = [{
  address: {
    en: 'Wiang Phang Kham, Mae Sai, Chiang Rai',
    th: 'ต.เวียงพางคำ อ.แม่สาย, เชียงราย'
  },
  code: '73t',
  lat: '20.427234',
  long: '99.883724',
  name: {
    en: 'Maesai Health Office',
    th: 'สำนักงานสาธารณสุขแม่สาย'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Wiang, Meuang, Chiang Rai',
    th: 'ต.เวียง อ.เมือง, เชียงราย'
  },
  code: '57t',
  lat: '19.909242',
  long: '99.823357',
  name: {
    en: 'Natural Resources and Environment Office, Chiangrai',
    th: 'สำนักงานทรัพยากรธรรมชาติและสิ่งแวดล้อมจังหวัดเชียงราย'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Huai Kon, Chaloem Phra Kiat, Nan',
    th: 'ต.ห้วยโก๋น อ.เฉลิมพระเกียรติ, น่าน'
  },
  code: '75t',
  lat: '19.322380',
  long: '101.025365',
  name: {
    en: 'Chalermprakiet Hospital',
    th: 'โรงพยาบาลเฉลิมพระเกียรติ '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Chong Kham, Meuang, Mae Hong Son',
    th: 'ต.จองคำ อ.เมือง, แม่ฮ่องสอน'
  },
  code: '58t',
  lat: '19.304686',
  long: '97.970999',
  name: {
    en: 'Natural Resources and Environment Office, Mae Hongson',
    th: 'สำนักงานทรัพยากรธรรมชาติและสิ่งแวดล้อมจังหวัดแม่ฮ่องสอน'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Wiang, Meuang, Phayao',
    th: 'ต.เวียง อ.เมือง, พะเยา'
  },
  code: '70t',
  lat: '19.163862',
  long: '99.902715',
  name: {
    en: 'Knowledge Park, Phayao',
    th: 'อุทยานการเรียนรู้ องค์การบริหารส่วนจังหวัดพะเยา'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Chang Phueak, Meuang, Chiang Mai',
    th: 'ต.ช้างเผือก อ.เมือง, เชียงใหม่'
  },
  code: '35t',
  lat: '18.840633',
  long: '98.969661',
  name: {
    en: 'City Hall, Chiangmai',
    th: 'ศูนย์ราชการจังหวัดเชียงใหม่ '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Suthep, Mueang, Chiang Mai',
    th: 'ต.สุเทพ อ.เมือง, เชียงใหม่'
  },
  code: 'm101',
  lat: '18.804718',
  long: '98.896851',
  name: {
    en: 'Mobile Air Quality Monitoring unit No.04',
    th: 'พระตำหนักภูพิงคราชนิเวศน์ (รถโมบาย)'
  },
  station_type: 'MOBILE'
},
{
  address: {
    en: 'Nai Wiang, Mueang, Nan',
    th: 'ต.ในเวียง อ.เมือง, น่าน'
  },
  code: '67t',
  lat: '18.788878',
  long: '100.776359',
  name: {
    en: 'Municipality Office, Nan',
    th: 'สำนักงานเทศบาลเมืองน่าน'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Nai Mueang, Mueang, Lamphun',
    th: 'ต.ในเมือง อ.เมือง, ลำพูน'
  },
  code: '68t',
  lat: '18.567443',
  long: '99.007994',
  name: {
    en: 'Provincial Administrative Stadium, Lamphun',
    th: 'สนามกีฬาองค์การบริหารส่วนจังหวัดลำพูน'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Si Phum, Meuang, Chiang Mai',
    th: 'ต.ศรีภูมิ อ.เมือง, เชียงใหม่'
  },
  code: '36t',
  lat: '18.473270',
  long: '98.591620',
  name: {
    en: 'Yupparaj Wittayalai School',
    th: 'โรงเรียนยุพราชวิทยาลัย '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Ban Dong, Mae Mo, Lampang',
    th: 'ต.บ้านดง อ.แม่เมาะ, ลำปาง'
  },
  code: '39t',
  lat: '18.419425',
  long: '99.727046',
  name: {
    en: 'Health Promotion Hospital ',
    th: 'โรงพยาบาลส่งเสริมสุขภาพตำบลท่าสี '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Mae Mo, Mae Mo, Lampang',
    th: 'ต.แม่เมาะ อ.แม่เมาะ, ลำปาง'
  },
  code: '40t',
  lat: '18.282664',
  long: '99.659873',
  name: {
    en: 'Provincial Waterworks Authority Mae Moh',
    th: 'การประปาส่วนภูมิภาคแม่เมาะ'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Phra Bat, Meuang, Lampang',
    th: 'ต.พระบาท อ.เมือง, ลำปาง'
  },
  code: '37t',
  lat: '18.278251',
  long: '99.506447',
  name: {
    en: 'Meteorological stations, Lampang',
    th: 'สถานีอุตุนิยมวิทยาลำปาง'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Sop Pat, Mae Mo, Lampang',
    th: 'ต.สบป้าด อ.แม่เมาะ, ลำปาง'
  },
  code: '38t',
  lat: '18.250747',
  long: '99.763986',
  name: {
    en: 'Health Promotion Hospital Sob Pad, Lampang',
    th: 'โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านสบป้าด '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Na Chak, Meuang, Phrae',
    th: 'ต.นาจักร อ.เมือง, แพร่'
  },
  code: '69t',
  lat: '18.128928',
  long: '100.162345',
  name: {
    en: 'Meteorology Center, Phrae',
    th: 'อุตุนิยมวิทยาจังหวัดแพร่'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Na An, Mueang, Loei',
    th: 'ต.นาอาน, อ.เมือง, เลย'
  },
  code: '72t',
  lat: '17.452765',
  long: '101.728715',
  name: {
    en: 'Provincial Health Office, Loei',
    th: 'สำนักงานสาธารณสุขจังหวัดเลย'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'MaePa, MaeSot, Tak',
    th: 'ต.แม่ปะ อ.แม่สอด, จ.ตาก'
  },
  code: '76t',
  lat: '16.750102',
  long: '98.591312',
  name: {
    en: 'Non-Formal Education Centre, Mea Sot',
    th: 'ศูนย์การศึกษานอกโรงเรียน'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Nai Mueang, Mueang, Khon Kaen',
    th: 'ต.ในเมือง, อ.เมือง, ขอนแก่น'
  },
  code: '46t',
  lat: '16.445329',
  long: '102.835251',
  name: {
    en: 'Hydrogeological Group Water Resources Regional Office4 khonkaen',
    th: 'ส่วนอุทกวิทยา สำนักงานทรัพยากรน้ำภาคที่4 ขอนแก่น'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Pak Nam Pho, Mueang, Nakhon Sawan',
    th: 'ต.ปากน้ำโพ, อ.เมือง, นครสวรรค์'
  },
  code: '41t',
  lat: '15.686254',
  long: '100.110542',
  name: {
    en: 'Nakhonsawan Irrigation Project ',
    th: 'โครงการชลประทานนครสวรรค์'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Nai Mueang, Mueang, Nakhon Ratchasima',
    th: 'ต.ในเมือง, อ.เมือง, นครราชสีมา'
  },
  code: '47t',
  lat: '14.979726',
  long: '102.098301',
  name: {
    en: 'Municipal Waste Water Pumping Station',
    th: 'สถานีสูบน้ำประตูพลแสน'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Na Phra Lan, Chaloem Phra Kiat, Saraburi',
    th: 'ต.หน้าพระลาน, อ.เฉลิมพระเกียรติ , สระบุรี'
  },
  code: '24t',
  lat: '14.687391',
  long: '100.871228',
  name: {
    en: 'Na Phralan Police Station ',
    th: 'สถานีตำรวจภูธรตำบลหน้าพระลาน '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Pak Phriao, Mueang Saraburi, Saraburi',
    th: 'ต.ปากเพรียว, อ.เมือง, สระบุรี'
  },
  code: '25t',
  lat: '14.526302',
  long: '100.926128',
  name: {
    en: 'Khao Noi Fire Station',
    th: 'สถานีดับเพลิงพระลักษณ์'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Pratu Chai, Phra Nakhon Si Ayutthaya',
    th: 'ต.ประตูชัย, อ.พระนครศรีอยุธยา, พระนครศรีอยุธยา'
  },
  code: '21t',
  lat: '14.352225',
  long: '100.565352',
  name: {
    en: 'Ayutthaya Witthayalai School',
    th: 'โรงเรียนอยุธยาวิทยาลัย'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Pak Phraek, Mueang, Kanchanaburi',
    th: 'ต.ปากแพรก อ.เมือง, จ.กาญจนบุรี'
  },
  code: '79t',
  lat: '14.022425',
  long: '99.536118',
  name: {
    en: 'Kanchanaburi Meteorological Station',
    th: 'สถานีอุตุนิยมวิทยา จ.กาญจนบุรี'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Tha Tum, SiMahaPhot, Prachin Buri',
    th: 'ต.ท่าตูม อ.ศรีมหาโพธิ, จ.ปราจีนบุรี'
  },
  code: '77t',
  lat: '13.934197',
  long: '101.586960',
  name: {
    en: 'Bu Yai Bai Hall Station',
    th: 'ศาลาประชาคมบ้านบุยายใบ'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Lat Phrao Rd. Khet Wang Thonglang, Bangkok',
    th: 'ริมถนนลาดพร้าว เขตวังทองหลาง, กรุงเทพฯ'
  },
  code: '53t',
  lat: '13.795414',
  long: '100.592899',
  name: {
    en: 'Chokchai Police Station',
    th: 'สถานีตำรวจนครบาลโชคชัย '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Samsen Nai, Khet Phaya Thai, Bangkok',
    th: 'แขวงสามเสนใน, เขตพญาไท, กรุงเทพฯ'
  },
  code: '59t',
  lat: '13.783143',
  long: '100.540529',
  name: {
    en: 'The Government Public Relations Department ',
    th: 'กรมประชาสัมพันธ์'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Khlong Chan, Khet Bang Kapi, Bangkok',
    th: 'แขวงคลองจั่น, เขตบางกะปิ, กรุงเทพฯ'
  },
  code: '10t',
  lat: '13.779539',
  long: '100.645654',
  name: {
    en: 'National Housing Authority Klongchan',
    th: 'เคหะชุมชนคลองจั่น '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Wang Thonglang, Khet Wang Thonglang, Bangkok',
    th: 'แขวงวังทองหลาง, เขตวังทองหลาง, กรุงเทพฯ'
  },
  code: '61t',
  lat: '13.769630',
  long: '100.614562',
  name: {
    en: 'Bodindecha Sing Singhaseni School',
    th: 'โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี) '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Rama IV Rd. Khet Pathum Wan, Bangkok',
    th: 'ริมถนนพระราม 4 เขตปทุมวัน, กรุงเทพฯ'
  },
  code: '50t',
  lat: '13.729984',
  long: '100.536443',
  name: {
    en: 'Chulalongkorn Hospital',
    th: 'โรงพยาบาลจุฬาลงกรณ์'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Intarapitak Rd. Khet Thon Buri, Bangkok',
    th: 'ริมถนนอินทรพิทักษ์ เขตธนบุรี, กรุงเทพ'
  },
  code: '52t',
  lat: '13.727557',
  long: '100.486604',
  name: {
    en: 'Thonburi Power Sub-Station',
    th: 'การไฟฟ้าย่อยธนบุรี '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Aranyaprathet, Aranyaprathet, Sa Kaeo',
    th: 'ต.อรัญประเทศ, อ.อรัญประเทศ, สระแก้ว'
  },
  code: '71t',
  lat: '13.692122',
  long: '102.502124',
  name: {
    en: 'Sriaranyothai Kindergarten',
    th: 'โรงเรียนอนุบาลศรีอรัญโญทัย'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Bang Na, Khet Bang Na, Bangkok',
    th: 'แขวงบางนา, เขตบางนา, กรุงเทพฯ'
  },
  code: '05t',
  lat: '13.666113',
  long: '100.605741',
  name: {
    en: 'Thai Meteorological Department ',
    th: 'กรมอุตุนิยมวิทยาบางนา'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Song Kanong, Phra Pradaeng, Samut Prakan',
    th: 'ต.ทรงคนอง อ.พระประแดง, สมุทรปราการ'
  },
  code: '08t',
  lat: '13.664023',
  long: '100.543406',
  name: {
    en: 'Prabadang Rehabiltation Center',
    th: 'ศูนย์ฟื้นฟูอาชีพคนพิการและทุพลภาพ '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Talat, Phra Pradaeng, Samut Prakan',
    th: 'ต.ตลาด อ.พระประแดง, สมุทรปราการ'
  },
  code: '17t',
  lat: '13.652154',
  long: '100.531840',
  name: {
    en: 'Residence for Dept. of Mineral Resources',
    th: 'บ้านพักกรมอุตสาหกรรมพื้นฐานและการเหมืองแร่'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Kanchanaphisek Rd, Bang Khun Thian, Bangkok',
    th: 'ริมถนนกาญจนาภิเษก, เขตบางขุนเทียน, กรุงเทพฯ'
  },
  code: '03t',
  lat: '13.637362',
  long: '100.413875',
  name: {
    en: 'Highway NO.3902 km.13 +600',
    th: 'ริมถนนทางหลวงหมายเลข 3902 ตอน พระประแดง - บางแค กม.13 +600'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Wang Yen, Plaeng Yao, Chachoengsao',
    th: 'ต.วังเย็น, อ.แปลงยาว, ฉะเชิงเทรา'
  },
  code: '60t',
  lat: '13.588554',
  long: '101.286359',
  name: {
    en: 'Municipality Office Tungsadao',
    th: 'สำนักงานเทศบาลตำบลทุ่งสะเดา'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Bang Sao Thong, Bang Sao Thong, Samut Prakan\xa0',
    th: 'ต.บางเสาธง,อ.บางเสาธง, สมุทรปราการ'
  },
  code: '19t',
  lat: '13.570333',
  long: '100.785866',
  name: {
    en: 'National Housing Authority Bangplee',
    th: 'การเคหะชุมชนเมืองใหม่บางพลี '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Maha Chai, Mueang, Samut Sakhon',
    th: 'ต.มหาชัย, อ.เมือง, สมุทรสาคร'
  },
  code: '27t',
  lat: '13.550478',
  long: '100.264254',
  name: {
    en: 'Samut Sakhon Wittayalai School',
    th: 'โรงเรียนสมุทรสาครวิทยาลัย'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Na Mueang, Mueang, Ratchaburi',
    th: 'ต.หน้าเมือง, อ.เมือง, ราชบุรี'
  },
  code: '26t',
  lat: '13.532555',
  long: '99.814873',
  name: {
    en: 'Environmental Office 8 ratchaburi',
    th: 'สำนักงานสิ่งแวดล้อมภาคที่8'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Ban Suan, Mueang, Chon Buri',
    th: 'ต.บ้านสวน,อ.เมือง, ชลบุรี'
  },
  code: '34t',
  lat: '13.355065',
  long: '100.977777',
  name: {
    en: 'Environment Agency Section 13, Chonburi',
    th: 'สำนักงานสิ่งแวดล้อมภาคที่ 13 '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Bo Win, Si Racha, Chon buri',
    th: 'ต.บ่อวิน อ.ศรีราชา, จ.ชลบุรี'
  },
  code: '33t',
  lat: '13.173562',
  long: '100.927866',
  name: {
    en: 'Health Promotion Hospital Bankhaohin',
    th: 'โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเขาหิน'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Thung Sukhla, Si Racha, Chon buri',
    th: 'ต.ทุ่งสุขลา อ.ศรีราชา, ชลบุรี'
  },
  code: '32t',
  lat: '13.119214',
  long: '100.918596',
  name: {
    en: 'Laem Chabang Municipal Stadium',
    th: 'สนามกีฬาเทศบาลแหลมฉบัง '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Pluak Daeng, Pluak Daeng, Rayong',
    th: 'ต.ปลวกแดง, อ.ปลวกแดง, ระยอง'
  },
  code: '28t',
  lat: '12.973780',
  long: '101.212844',
  name: {
    en: 'Pluakdaeng District Health Office',
    th: 'สำนักงานสาธารณสุขอำเภอปลวกแดง'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Map Ta Phut, Meuang, Rayong',
    th: 'ต.มาบตาพุด อ.เมือง, ระยอง'
  },
  code: 'a29',
  lat: '12.708620',
  long: '101.166055',
  name: {
    en: 'Health Promotion Hospital Maptaput',
    th: 'โรงพยาบาลส่งเสริมสุขภาพตำบลมาบตาพุด '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Nern Pra, Meuang, Rayong',
    th: 'ต.เนินพระ อ.เมือง, ระยอง'
  },
  code: '74t',
  lat: '12.706325',
  long: '101.180975',
  name: {
    en: 'Government Complex, Rayong',
    th: 'ศูนย์ราชการจังหวัดระยอง '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Tha Pradu, Meuang, Rayong',
    th: 'ต.ท่าประดู่ อ.เมือง, ระยอง'
  },
  code: '30t',
  lat: '12.671521',
  long: '101.275875',
  name: {
    en: 'Agricultural Office',
    th: 'สำนักงานเกษตรจังหวัดระยอง '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Taphong, Mueang, Rayong',
    th: 'ต.ตะพง อ.เมือง, ระยอง'
  },
  code: 'm8',
  lat: '12.648576',
  long: '101.322450',
  name: {
    en: 'Khai Surasinghanat',
    th: 'ค่ายสุรสิงหนาท'
  },
  station_type: 'MOBILE'
},
{
  address: {
    en: 'Makham Tia, Mueang, Surat Thani',
    th: 'ต.มะขามเตี้ย อ.เมือง, สุราษฎร์ธานี'
  },
  code: '42t',
  lat: '9.126057',
  long: '99.325355',
  name: {
    en: 'Environment Agency Section 14, Surat Thani',
    th: 'สำนักงานสิ่งแวดล้อมภาคที่ 14'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Talat Yai, Mueang, Phuket',
    th: 'ต.ตลาดใหญ่ อ.เมือง, ภูเก็ต'
  },
  code: '43t',
  lat: '7.884508',
  long: '98.391318',
  name: {
    en: 'Municipal Health Center',
    th: 'ศูนย์บริการสาธารณสุขเทศบาลภูเก็ต'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Phiman, Mueang, Satun',
    th: 'ต.พิมาน อ.เมือง, จ.สตูล'
  },
  code: '80t',
  lat: '6.624686',
  long: '100.066212',
  name: {
    en: 'City Hall, Satun',
    th: 'ศาลากลาง จ.สตูล'
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Sateng, Mueang, Yala',
    th: 'ต.สะเตง อ.เมือง, ยะลา'
  },
  code: '63t',
  lat: '6.546197',
  long: '101.283100',
  name: {
    en: 'White Elephant Park',
    th: 'สนามโรงพิธีช้างเผือก '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Bang Nak, Mueang, Narathiwat',
    th: 'ต.บางนาค อ.เมือง, นราธิวาส'
  },
  code: '62t',
  lat: '6.426885',
  long: '101.823005',
  name: {
    en: 'City Hall, Narathiwat',
    th: 'ศาลากลางจังหวัดนราธิวาส '
  },
  station_type: 'GROUND'
},
{
  address: {
    en: 'Betong, Yala',
    th: 'ต.เบตง อ.เบตง, ยะลา'
  },
  code: '78t',
  lat: '5.763873',
  long: '101.067903',
  name: {
    en: 'Local Government Office, Betong',
    th: 'กองศึกษาเทศบาลเมืองเบตง'
  },
  station_type: 'GROUND'
}];

exports.regions = regions;
exports.stations = stations;
exports.stationMapper = stations.reduce((map, obj) => {
  map[obj.code] = obj;
  return map;
}, {});
