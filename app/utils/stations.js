const regions = [
  {
    id: '1',
    name: {
      en: 'Bangkok Metropolitan Region',
      th: 'กรุงเทพฯและปริมณฑล'
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
      '20t', // new
    ]
  }, {
    id: '2',
    name: {
      en: 'Northern Provinces',
      th: 'ภาคเหนือ'
    },
    stations: [
      '57t', '73t', '35t', '36t',
      // 'm101',  removed
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
      '76t'
    ]
  }, {
    id: '3',
    name: {
      en: 'Eastern Provinces',
      th: 'ภาคตะวันออก'
    },
    stations: [
      '60t',
      '32t',
      '33t',
      '34t',
      '28t',
      '30t',
      '74t',
      // 'a29',  removed
      'm8',
      '77t',
      '71t'
    ]
  }, {
    id: '5',
    name: {
      en: 'Eastern Provinces',
      th: 'ภาคตะวันออกเฉียงเหนือ'
    },
    stations: ['72t', '46t', '47t']
  }, {
    id: '7',
    name: {
      en: 'Central And Western Provinces',
      th: 'ภาคกลางและตะวันตก'
    },
    stations: [
      '41t',
      '79t',
      '24t',
      '25t',
      '21t',
      '26t'
    ]
  }
];

const stations = [
  {
    stationID: "03t",
    nameTH: "ริมถนนทางหลวงหมายเลข 3902 ",
    nameEN: "Highway NO.3902 km.13 +600",
    areaTH: "ริมถนนกาญจนาภิเษก เขตบางขุนเทียน, กรุงเทพฯ",
    areaEN: "Kanchanaphisek Rd, Bang Khun Thian, Bangkok",
    stationType: "GROUND",
    lat: "13.636514",
    long: "100.414262",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "71",
        unit: "µg/m³"
      },
      PM10: {
        value: "127",
        unit: "µg/m³"
      },
      O3: {
        value: "8",
        unit: "ppb"
      },
      CO: {
        value: "1.76",
        unit: "ppm"
      },
      NO2: {
        value: "66",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "152"
      }
    }
  }, {
    stationID: "05t",
    nameTH: "กรมอุตุนิยมวิทยาบางนา",
    nameEN: "Thai Meteorological Department ",
    areaTH: "แขวงบางนา, เขตบางนา, กรุงเทพฯ",
    areaEN: "Bang Na, Khet Bang Na, Bangkok",
    stationType: "GROUND",
    lat: "13.666113",
    long: "100.605741",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "51",
        unit: "µg/m³"
      },
      PM10: {
        value: "81",
        unit: "µg/m³"
      },
      O3: {
        value: "44",
        unit: "ppb"
      },
      CO: {
        value: "0.75",
        unit: "ppm"
      },
      NO2: {
        value: "54",
        unit: "ppb"
      },
      SO2: {
        value: "5",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "101"
      }
    }
  }, {
    stationID: "10t",
    nameTH: "เคหะชุมชนคลองจั่น",
    nameEN: "National Housing Authority Klongchan",
    areaTH: "แขวงคลองจั่น, เขตบางกะปิ, กรุงเทพฯ",
    areaEN: "Khlong Chan, Khet Bang Kapi, Bangkok",
    stationType: "GROUND",
    lat: "13.779539",
    long: "100.645654",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "47",
        unit: "µg/m³"
      },
      PM10: {
        value: "69",
        unit: "µg/m³"
      },
      O3: {
        value: "45",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "53",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "88"
      }
    }
  }, {
    stationID: "11t",
    nameTH: "การเคหะชุมชนห้วยขวาง ",
    nameEN: "National Housing Huaykwang",
    areaTH: "แขวงดินแดง, เขตดินแดง, กรุงเทพฯ",
    areaEN: "Din Daeng, Khet Din Daeng, Bangkok",
    stationType: "GROUND",
    lat: "13.775516",
    long: "100.569206",
    LastUpdate: {
      date: "2019-01-15",
      time: "19:00",
      PM25: {
        value: "52",
        unit: "µg/m³"
      },
      PM10: {
        value: "-",
        unit: "µg/m³"
      },
      O3: {
        value: "46",
        unit: "ppb"
      },
      CO: {
        value: "-",
        unit: "ppm"
      },
      NO2: {
        value: "0",
        unit: "ppb"
      },
      SO2: {
        value: "3",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "104"
      }
    }
  }, {
    stationID: "50t",
    nameTH: "โรงพยาบาลจุฬาลงกรณ์",
    nameEN: "Chulalongkorn Hospital",
    areaTH: "ริมถนนพระราม 4 เขตปทุมวัน, กรุงเทพฯ",
    areaEN: "Rama IV Rd. Khet Pathum Wan, Bangkok",
    stationType: "GROUND",
    lat: "13.729984",
    long: "100.536443",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "51",
        unit: "µg/m³"
      },
      PM10: {
        value: "94",
        unit: "µg/m³"
      },
      O3: {
        value: "N/A",
        unit: "ppb"
      },
      CO: {
        value: "1.77",
        unit: "ppm"
      },
      NO2: {
        value: "75",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "101"
      }
    }
  }, {
    stationID: "52t",
    nameTH: "การไฟฟ้าย่อยธนบุรี ",
    nameEN: "Thonburi Power Sub-Station",
    areaTH: "ริมถนนอินทรพิทักษ์ เขตธนบุรี, กรุงเทพฯ",
    areaEN: "Intarapitak Rd. Khet Thon Buri, Bangkok",
    stationType: "GROUND",
    lat: "13.727557",
    long: "100.486604",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "53",
        unit: "µg/m³"
      },
      PM10: {
        value: "85",
        unit: "µg/m³"
      },
      O3: {
        value: "12",
        unit: "ppb"
      },
      CO: {
        value: "0.33",
        unit: "ppm"
      },
      NO2: {
        value: "37",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "106"
      }
    }
  }, {
    stationID: "53t",
    nameTH: "สถานีตำรวจนครบาลโชคชัย ",
    nameEN: "Chokchai Police Station",
    areaTH: "ริมถนนลาดพร้าว เขตวังทองหลาง, กรุงเทพฯ",
    areaEN: "Lat Phrao Rd. Khet Wang Thonglang, Bangkok",
    stationType: "GROUND",
    lat: "13.795414",
    long: "100.592899",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "60",
        unit: "µg/m³"
      },
      PM10: {
        value: "92",
        unit: "µg/m³"
      },
      O3: {
        value: "N/A",
        unit: "ppb"
      },
      CO: {
        value: "1.45",
        unit: "ppm"
      },
      NO2: {
        value: "52",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "124"
      }
    }
  }, {
    stationID: "54t",
    nameTH: "การเคหะชุมชนดินแดง ",
    nameEN: "National Housing Authority Dindaeng",
    areaTH: "ริมถนนดินแดง เขตดินแดง, กรุงเทพฯ",
    areaEN: "Din Daeng Rd. Khet Din Daeng, Bangkok",
    stationType: "GROUND",
    lat: "13.762609",
    long: "100.550361",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "67",
        unit: "µg/m³"
      },
      PM10: {
        value: "100",
        unit: "µg/m³"
      },
      O3: {
        value: "18",
        unit: "ppb"
      },
      CO: {
        value: "2.63",
        unit: "ppm"
      },
      NO2: {
        value: "115",
        unit: "ppb"
      },
      SO2: {
        value: "-",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "142"
      }
    }
  }, {
    stationID: "59t",
    nameTH: "กรมประชาสัมพันธ์",
    nameEN: "The Government Public Relations Department ",
    areaTH: "แขวงพญาไท, เขตพญาไท, กรุงเทพฯ",
    areaEN: "Phaya Thai, Khet Phaya Thai, Bangkok",
    stationType: "GROUND",
    lat: "13.783143",
    long: "100.540529",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "46",
        unit: "µg/m³"
      },
      PM10: {
        value: "69",
        unit: "µg/m³"
      },
      O3: {
        value: "44",
        unit: "ppb"
      },
      CO: {
        value: "1.39",
        unit: "ppm"
      },
      NO2: {
        value: "80",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "84"
      }
    }
  }, {
    stationID: "61t",
    nameTH: "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี) ",
    nameEN: "Bodindecha Sing Singhaseni School",
    areaTH: "แขวงพลับพลา, เขตวังทองหลาง, กรุงเทพฯ",
    areaEN: "Pubpla, Khet Wang Thonglang, Bangkok",
    stationType: "GROUND",
    lat: "13.76963",
    long: "100.614562",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "61",
        unit: "µg/m³"
      },
      PM10: {
        value: "84",
        unit: "µg/m³"
      },
      O3: {
        value: "73",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "65",
        unit: "ppb"
      },
      SO2: {
        value: "3",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "126"
      }
    }
  }, {
    stationID: "79t",
    nameTH: "สถานีอุตุนิยมวิทยา จ.กาญจนบุรี",
    nameEN: "Kanchanaburi Meteorological Station",
    areaTH: "ต.ปากแพรก อ.เมือง, จ.กาญจนบุรี",
    areaEN: "Pak Phraek, Mueang, Kanchanaburi",
    stationType: "GROUND",
    lat: "14.022425",
    long: "99.536118",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "65",
        unit: "µg/m³"
      },
      PM10: {
        value: "85",
        unit: "µg/m³"
      },
      O3: {
        value: "51",
        unit: "ppb"
      },
      CO: {
        value: "0.76",
        unit: "ppm"
      },
      NO2: {
        value: "17",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "137"
      }
    }
  }, {
    stationID: "46t",
    nameTH: "ส่วนอุทกวิทยา สำนักงานทรัพยากรน้ำภาคที่4 ขอนแก่น",
    nameEN: "Hydrogeological Group Water Resources Regional Office4 khonkaen",
    areaTH: "ต.ในเมือง, อ.เมือง, ขอนแก่น",
    areaEN: "Nai Mueang, Mueang, Khon Kaen",
    stationType: "GROUND",
    lat: "16.445329",
    long: "102.835251",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "-",
        unit: "µg/m³"
      },
      PM10: {
        value: "63",
        unit: "µg/m³"
      },
      O3: {
        value: "41",
        unit: "ppb"
      },
      CO: {
        value: "0.65",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "-",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "36"
      }
    }
  }, {
    stationID: "60t",
    nameTH: "สำนักงานเทศบาลตำบลทุ่งสะเดา",
    nameEN: "Municipality Office Tungsadao",
    areaTH: "ต.วังเย็น, อ.แปลงยาว, ฉะเชิงเทรา",
    areaEN: "Wang Yen, Plaeng Yao, Chachoengsao",
    stationType: "GROUND",
    lat: "13.588554",
    long: "101.286359",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "N/A",
        unit: "µg/m³"
      },
      PM10: {
        value: "86",
        unit: "µg/m³"
      },
      O3: {
        value: "56",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "14",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "64"
      }
    }
  }, {
    stationID: "32t",
    nameTH: "สนามกีฬาเทศบาลแหลมฉบัง ",
    nameEN: "Laem Chabang Municipal Stadium",
    areaTH: "ต.ทุ่งสุขลา อ.ศรีราชา, ชลบุรี",
    areaEN: "Thung Sukhla, Si Racha, Chon buri",
    stationType: "GROUND",
    lat: "13.119214",
    long: "100.918596",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "41",
        unit: "µg/m³"
      },
      PM10: {
        value: "58",
        unit: "µg/m³"
      },
      O3: {
        value: "38",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "23",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "63"
      }
    }
  }, {
    stationID: "33t",
    nameTH: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านเขาหิน",
    nameEN: "Health Promotion Hospital Bankhaohin",
    areaTH: "ต.บ่อวิน อ.ศรีราชา, จ.ชลบุรี",
    areaEN: "Bo Win, Si Racha, Chon buri",
    stationType: "GROUND",
    lat: "13.173562",
    long: "100.927866",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "40",
        unit: "µg/m³"
      },
      PM10: {
        value: "90",
        unit: "µg/m³"
      },
      O3: {
        value: "45",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "25",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "62"
      }
    }
  }, {
    stationID: "34t",
    nameTH: "สำนักงานสิ่งแวดล้อมภาคที่ 13 ",
    nameEN: "Environment Agency Section 13, Chonburi",
    areaTH: "ต.บ้านสวน,อ.เมือง, ชลบุรี",
    areaEN: "Ban Suan, Mueang, Chon Buri",
    stationType: "GROUND",
    lat: "13.355065",
    long: "100.977777",
    LastUpdate: {
      date: "2019-01-15",
      time: "19:00",
      PM25: {
        value: "47",
        unit: "µg/m³"
      },
      PM10: {
        value: "63",
        unit: "µg/m³"
      },
      O3: {
        value: "65",
        unit: "ppb"
      },
      CO: {
        value: "0.75",
        unit: "ppm"
      },
      NO2: {
        value: "9",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "88"
      }
    }
  }, {
    stationID: "76t",
    nameTH: "ศูนย์การศึกษานอกโรงเรียน",
    nameEN: "Non-Formal Education Centre, Mea Sot",
    areaTH: "ต.แม่ปะ อ.แม่สอด, จ.ตาก",
    areaEN: "MaePa, MaeSot, Tak",
    stationType: "GROUND",
    lat: "16.750102",
    long: "98.591312",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "42",
        unit: "µg/m³"
      },
      PM10: {
        value: "70",
        unit: "µg/m³"
      },
      O3: {
        value: "38",
        unit: "ppb"
      },
      CO: {
        value: "0.32",
        unit: "ppm"
      },
      NO2: {
        value: "16",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "67"
      }
    }
  }, {
    stationID: "m116",
    nameTH: "การประปาเทศบาลนครปฐม",
    nameEN: "Municipal waterworks, Nakhon Pathom",
    areaTH: "ต.นครปฐม อ.เมืองนครปฐม, จ.นครปฐม",
    areaEN: "Mueang, Nakhon Pathom",
    stationType: "MOBILE",
    lat: "13.830333",
    long: "100.053471",
    LastUpdate: {
      date: "2019-01-15",
      time: "15:00",
      PM25: {
        value: "62",
        unit: "µg/m³"
      },
      PM10: {
        value: "N/A",
        unit: "µg/m³"
      },
      O3: {
        value: "N/A",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "N/A",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "130"
      }
    }
  }, {
    stationID: "47t",
    nameTH: "สถานีสูบน้ำประตูพลแสน",
    nameEN: "Municipal Waste Water Pumping Station",
    areaTH: "ต.ในเมือง, อ.เมือง, นครราชสีมา",
    areaEN: "Nai Mueang, Mueang, Nakhon Ratchasima",
    stationType: "GROUND",
    lat: "14.979726",
    long: "102.098301",
    LastUpdate: {
      date: "2019-01-14",
      time: "09:00",
      PM25: {
        value: "N/A",
        unit: "µg/m³"
      },
      PM10: {
        value: "62",
        unit: "µg/m³"
      },
      O3: {
        value: "12",
        unit: "ppb"
      },
      CO: {
        value: "0.51",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "35"
      }
    }
  }, {
    stationID: "41t",
    nameTH: "โครงการชลประทานนครสวรรค์",
    nameEN: "Nakhonsawan Irrigation Project ",
    areaTH: "ต.ปากน้ำโพ, อ.เมือง, นครสวรรค์",
    areaEN: "Pak Nam Pho, Mueang, Nakhon Sawan",
    stationType: "GROUND",
    lat: "15.686254",
    long: "100.110542",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "45",
        unit: "µg/m³"
      },
      PM10: {
        value: "105",
        unit: "µg/m³"
      },
      O3: {
        value: "37",
        unit: "ppb"
      },
      CO: {
        value: "0.94",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "-",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "81"
      }
    }
  }, {
    stationID: "13t",
    nameTH: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย",
    nameEN: "EGAT",
    areaTH: "ต.บางกรวย, อ.บางกรวย, นนทบุรี",
    areaEN: "Bang Krua, Bang Kruai, Nonthaburi",
    stationType: "GROUND",
    lat: "13.807156",
    long: "100.506319",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "57",
        unit: "µg/m³"
      },
      PM10: {
        value: "78",
        unit: "µg/m³"
      },
      O3: {
        value: "10",
        unit: "ppb"
      },
      CO: {
        value: "1.09",
        unit: "ppm"
      },
      NO2: {
        value: "68",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "116"
      }
    }
  }, {
    stationID: "22t",
    nameTH: "มหาวิทยาลัยสุโขทัยธรรมาธิราช ",
    nameEN: "Sukhothai Thammathirat Open University",
    areaTH: "ต.บางพูด, อ.ปากเกร็ด, นนทบุรี",
    areaEN: "Bang Phut, Pak Kret, Nonthaburi",
    stationType: "GROUND",
    lat: "13.90794",
    long: "100.535599",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "N/A",
        unit: "µg/m³"
      },
      PM10: {
        value: "99",
        unit: "µg/m³"
      },
      O3: {
        value: "-",
        unit: "ppb"
      },
      CO: {
        value: "-",
        unit: "ppm"
      },
      NO2: {
        value: "64",
        unit: "ppb"
      },
      SO2: {
        value: "-",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "74"
      }
    }
  }, {
    stationID: "62t",
    nameTH: "ศาลากลางจังหวัดนราธิวาส ",
    nameEN: "City Hall, Narathiwat",
    areaTH: "ต.บางนาค อ.เมือง, นราธิวาส",
    areaEN: "Bang Nak, Mueang, Narathiwat",
    stationType: "GROUND",
    lat: "6.426885",
    long: "101.823005",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "19",
        unit: "µg/m³"
      },
      PM10: {
        value: "39",
        unit: "µg/m³"
      },
      O3: {
        value: "26",
        unit: "ppb"
      },
      CO: {
        value: "0.73",
        unit: "ppm"
      },
      NO2: {
        value: "14",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "20"
      }
    }
  }, {
    stationID: "67t",
    nameTH: "สำนักงานเทศบาลเมืองน่าน",
    nameEN: "Municipality Office, Nan",
    areaTH: "ต.ในเวียง อ.เมือง, น่าน",
    areaEN: "Nai Wiang, Mueang, Nan",
    stationType: "GROUND",
    lat: "18.788878",
    long: "100.776359",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "24",
        unit: "µg/m³"
      },
      PM10: {
        value: "49",
        unit: "µg/m³"
      },
      O3: {
        value: "27",
        unit: "ppb"
      },
      CO: {
        value: "0.34",
        unit: "ppm"
      },
      NO2: {
        value: "16",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "25"
      }
    }
  }, {
    stationID: "75t",
    nameTH: "โรงพยาบาลเฉลิมพระเกียรติ ",
    nameEN: "Chalermprakiet Hospital",
    areaTH: "ต.ห้วยโก๋น อ.เฉลิมพระเกียรติ, จ.น่าน",
    areaEN: "Huai Kon, Chaloem Phra Kiat, Nan",
    stationType: "GROUND",
    lat: "19.32238",
    long: "101.025365",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "17",
        unit: "µg/m³"
      },
      PM10: {
        value: "28",
        unit: "µg/m³"
      },
      O3: {
        value: "14",
        unit: "ppb"
      },
      CO: {
        value: "0.39",
        unit: "ppm"
      },
      NO2: {
        value: "4",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "17"
      }
    }
  }, {
    stationID: "20t",
    nameTH: "มหาวิทยาลัยกรุงเทพ วิทยาเขตรังสิต ",
    nameEN: "Bangkok University Rangsit Campus",
    areaTH: "ต.คลองหนึ่ง,อ.คลองหลวง, ปทุมธานี",
    areaEN: "Khlong Nueng, Khlong Luang, Pathum Thani",
    stationType: "GROUND",
    lat: "14.037512",
    long: "100.605124",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "56",
        unit: "µg/m³"
      },
      PM10: {
        value: "60",
        unit: "µg/m³"
      },
      O3: {
        value: "54",
        unit: "ppb"
      },
      CO: {
        value: "-",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "114"
      }
    }
  }, {
    stationID: "77t",
    nameTH: "ศาลาประชาคมบ้านบุยายใบ",
    nameEN: "Bu Yai Bai Hall Station",
    areaTH: "ต.ท่าตูม อ.ศรีมหาโพธิ, จ.ปราจีนบุรี",
    areaEN: "Tha Tum, SiMahaPhot, Prachin Buri",
    stationType: "GROUND",
    lat: "13.934197",
    long: "101.58696",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "46",
        unit: "µg/m³"
      },
      PM10: {
        value: "77",
        unit: "µg/m³"
      },
      O3: {
        value: "46",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "18",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "84"
      }
    }
  }, {
    stationID: "21t",
    nameTH: "โรงเรียนอยุธยาวิทยาลัย",
    nameEN: "Ayutthaya Witthayalai School",
    areaTH: "ต.ประตูชัย, อ.พระนครศรีอยุธยา, พระนครศรีอยุธยา",
    areaEN: "Pratu Chai, Phra Nakhon Si Ayutthaya",
    stationType: "GROUND",
    lat: "14.352225",
    long: "100.565352",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "57",
        unit: "µg/m³"
      },
      PM10: {
        value: "112",
        unit: "µg/m³"
      },
      O3: {
        value: "49",
        unit: "ppb"
      },
      CO: {
        value: "0.62",
        unit: "ppm"
      },
      NO2: {
        value: "46",
        unit: "ppb"
      },
      SO2: {
        value: "3",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "116"
      }
    }
  }, {
    stationID: "70t",
    nameTH: "อุทยานการเรียนรู้ องค์การบริหารส่วนจังหวัดพะเยา",
    nameEN: "Knowledge Park, Phayao",
    areaTH: "ต.เวียง อ.เมือง, พะเยา",
    areaEN: "Wiang, Meuang, Phayao",
    stationType: "GROUND",
    lat: "19.163862",
    long: "99.902715",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "25",
        unit: "µg/m³"
      },
      PM10: {
        value: "48",
        unit: "µg/m³"
      },
      O3: {
        value: "-",
        unit: "ppb"
      },
      CO: {
        value: "0.35",
        unit: "ppm"
      },
      NO2: {
        value: "10",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "25"
      }
    }
  }, {
    stationID: "43t",
    nameTH: "ศูนย์บริการสาธารณสุขเทศบาลภูเก็ต",
    nameEN: "Municipal Health Center",
    areaTH: "ต.ตลาดใหญ่ อ.เมือง, ภูเก็ต",
    areaEN: "Talat Yai, Mueang, Phuket",
    stationType: "GROUND",
    lat: "7.884508",
    long: "98.391318",
    LastUpdate: {
      date: "2019-01-15",
      time: "12:00",
      PM25: {
        value: "N/A",
        unit: "µg/m³"
      },
      PM10: {
        value: "45",
        unit: "µg/m³"
      },
      O3: {
        value: "-",
        unit: "ppb"
      },
      CO: {
        value: "0.48",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "23"
      }
    }
  }, {
    stationID: "63t",
    nameTH: "สนามโรงพิธีช้างเผือก ",
    nameEN: "White Elephant Park",
    areaTH: "ต.สะเตง อ.เมือง, ยะลา",
    areaEN: "Sateng, Mueang, Yala",
    stationType: "GROUND",
    lat: "6.546197",
    long: "101.2831",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "22",
        unit: "µg/m³"
      },
      PM10: {
        value: "39",
        unit: "µg/m³"
      },
      O3: {
        value: "29",
        unit: "ppb"
      },
      CO: {
        value: "0.70",
        unit: "ppm"
      },
      NO2: {
        value: "12",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "22"
      }
    }
  }, {
    stationID: "28t",
    nameTH: "สำนักงานสาธารณสุขอำเภอปลวกแดง",
    nameEN: "Pluakdaeng District Health Office",
    areaTH: "ต.ปลวกแดง, อ.ปลวกแดง, ระยอง",
    areaEN: "Pluak Daeng, Pluak Daeng, Rayong",
    stationType: "GROUND",
    lat: "12.97378",
    long: "101.212844",
    LastUpdate: {
      date: "2019-01-15",
      time: "18:00",
      PM25: {
        value: "N/A",
        unit: "µg/m³"
      },
      PM10: {
        value: "71",
        unit: "µg/m³"
      },
      O3: {
        value: "28",
        unit: "ppb"
      },
      CO: {
        value: "-",
        unit: "ppm"
      },
      NO2: {
        value: "10",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "43"
      }
    }
  }, {
    stationID: "29t",
    nameTH: "โรงพยาบาลส่งเสริมสุขภาพตำบลมาบตาพุด ",
    nameEN: "Health Promotion Hospital Maptaput",
    areaTH: "ต.มาบตาพุด อ.เมือง, ระยอง",
    areaEN: "Map Ta Phut, Meuang, Rayong",
    stationType: "GROUND",
    lat: "12.70862",
    long: "101.166055",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "43",
        unit: "µg/m³"
      },
      PM10: {
        value: "78",
        unit: "µg/m³"
      },
      O3: {
        value: "22",
        unit: "ppb"
      },
      CO: {
        value: "0.80",
        unit: "ppm"
      },
      NO2: {
        value: "31",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "71"
      }
    }
  }, {
    stationID: "30t",
    nameTH: "สำนักงานเกษตรจังหวัดระยอง ",
    nameEN: "Agricultural Office",
    areaTH: "ต.ท่าประดู่ อ.เมือง, ระยอง",
    areaEN: "Tha Pradu, Meuang, Rayong",
    stationType: "GROUND",
    lat: "12.671521",
    long: "101.275875",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "39",
        unit: "µg/m³"
      },
      PM10: {
        value: "57",
        unit: "µg/m³"
      },
      O3: {
        value: "54",
        unit: "ppb"
      },
      CO: {
        value: "0.66",
        unit: "ppm"
      },
      NO2: {
        value: "13",
        unit: "ppb"
      },
      SO2: {
        value: "3",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "59"
      }
    }
  }, {
    stationID: "31t",
    nameTH: "ศูนย์วิจัยพืชไร่ระยอง ",
    nameEN: "Field Crop Research Center, Rayong",
    areaTH: "ต.ห้วยโป่ง อ.เมือง, ระยอง",
    areaEN: "Huai Pong, Meuang, Rayong",
    stationType: "GROUND",
    lat: "12.735114",
    long: "101.13562",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "41",
        unit: "µg/m³"
      },
      PM10: {
        value: "92",
        unit: "µg/m³"
      },
      O3: {
        value: "27",
        unit: "ppb"
      },
      CO: {
        value: "0.29",
        unit: "ppm"
      },
      NO2: {
        value: "37",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "65"
      }
    }
  }, {
    stationID: "74t",
    nameTH: "ศูนย์ราชการจังหวัดระยอง ",
    nameEN: "Government Complex, Rayong",
    areaTH: "ต.เนินพระ อ.เมือง, ระยอง",
    areaEN: "Nern Pra, Meuang, Rayong",
    stationType: "GROUND",
    lat: "12.706325",
    long: "101.180975",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "N/A",
        unit: "µg/m³"
      },
      PM10: {
        value: "48",
        unit: "µg/m³"
      },
      O3: {
        value: "11",
        unit: "ppb"
      },
      CO: {
        value: "0.15",
        unit: "ppm"
      },
      NO2: {
        value: "23",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "24"
      }
    }
  }, {
    stationID: "m8",
    nameTH: "ค่ายสุรสิงหนาท",
    nameEN: "Khai Surasinghanat",
    areaTH: "ต.ตะพง อ.เมือง, ระยอง",
    areaEN: "Taphong, Mueang, Rayong",
    stationType: "MOBILE",
    lat: "12.648576",
    long: "101.32245",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "30",
        unit: "µg/m³"
      },
      PM10: {
        value: "44",
        unit: "µg/m³"
      },
      O3: {
        value: "45",
        unit: "ppb"
      },
      CO: {
        value: "0.57",
        unit: "ppm"
      },
      NO2: {
        value: "6",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "41"
      }
    }
  }, {
    stationID: "26t",
    nameTH: "สำนักงานสิ่งแวดล้อมภาคที่8",
    nameEN: "Environmental Office 8 ratchaburi",
    areaTH: "ต.หน้าเมือง, อ.เมือง, ราชบุรี",
    areaEN: "Na Mueang, Mueang, Ratchaburi",
    stationType: "GROUND",
    lat: "13.532555",
    long: "99.814873",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "63",
        unit: "µg/m³"
      },
      PM10: {
        value: "88",
        unit: "µg/m³"
      },
      O3: {
        value: "44",
        unit: "ppb"
      },
      CO: {
        value: "0.77",
        unit: "ppm"
      },
      NO2: {
        value: "16",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "131"
      }
    }
  }, {
    stationID: "37t",
    nameTH: "สถานีอุตุนิยมวิทยาลำปาง",
    nameEN: "Meteorological stations, Lampang",
    areaTH: "ต.พระบาท อ.เมือง, ลำปาง",
    areaEN: "Phra Bat, Meuang, Lampang",
    stationType: "GROUND",
    lat: "18.278251",
    long: "99.506447",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "29",
        unit: "µg/m³"
      },
      PM10: {
        value: "42",
        unit: "µg/m³"
      },
      O3: {
        value: "47",
        unit: "ppb"
      },
      CO: {
        value: "0.55",
        unit: "ppm"
      },
      NO2: {
        value: "1",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "45"
      }
    }
  }, {
    stationID: "38t",
    nameTH: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านสบป้าด ",
    nameEN: "Health Promotion Hospital Sob Pad, Lampang",
    areaTH: "ต.สบป้าด อ.แม่เมาะ, ลำปาง",
    areaEN: "Sop Pat, Mae Mo, Lampang",
    stationType: "GROUND",
    lat: "18.250747",
    long: "99.763986",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "26",
        unit: "µg/m³"
      },
      PM10: {
        value: "37",
        unit: "µg/m³"
      },
      O3: {
        value: "45",
        unit: "ppb"
      },
      CO: {
        value: "1.29",
        unit: "ppm"
      },
      NO2: {
        value: "1",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "41"
      }
    }
  }, {
    stationID: "39t",
    nameTH: "โรงพยาบาลส่งเสริมสุขภาพตำบลท่าสี ",
    nameEN: "Health Promotion Hospital ",
    areaTH: "ต.บ้านดง อ.แม่เมาะ, ลำปาง",
    areaEN: "Ban Dong, Mae Mo, Lampang",
    stationType: "GROUND",
    lat: "18.419425",
    long: "99.727046",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "22",
        unit: "µg/m³"
      },
      PM10: {
        value: "31",
        unit: "µg/m³"
      },
      O3: {
        value: "37",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "15",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "28"
      }
    }
  }, {
    stationID: "40t",
    nameTH: "การประปาส่วนภูมิภาคแม่เมาะ",
    nameEN: "Provincial Waterworks Authority Mae Moh",
    areaTH: "ต.แม่เมาะ อ.แม่เมาะ, ลำปาง",
    areaEN: "Mae Mo, Mae Mo, Lampang",
    stationType: "GROUND",
    lat: "18.282664",
    long: "99.659873",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "34",
        unit: "µg/m³"
      },
      PM10: {
        value: "55",
        unit: "µg/m³"
      },
      O3: {
        value: "42",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "7",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "43"
      }
    }
  }, {
    stationID: "68t",
    nameTH: "อุตุนิยมวิทยาลำพูน",
    nameEN: "Meteorological Staions, Lamphun",
    areaTH: "ต.บ้านกลาง อ.เมือง, ลำพูน",
    areaEN: "ฺBan Klang, Mueang, Lamphun",
    stationType: "GROUND",
    lat: "18.567179",
    long: "99.03856",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "37",
        unit: "µg/m³"
      },
      PM10: {
        value: "68",
        unit: "µg/m³"
      },
      O3: {
        value: "41",
        unit: "ppb"
      },
      CO: {
        value: "0.44",
        unit: "ppm"
      },
      NO2: {
        value: "19",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "50"
      }
    }
  }, {
    stationID: "44t",
    nameTH: "เทศบาลนครหาดใหญ่ ",
    nameEN: "Hat Yai Municipality",
    areaTH: "ต.หาดใหญ่ อ.หาดใหญ่, สงขลา",
    areaEN: "Hat Yai, Songkhla",
    stationType: "GROUND",
    lat: "7.020545",
    long: "100.48404",
    LastUpdate: {
      date: "2019-01-15",
      time: "12:00",
      PM25: {
        value: "-",
        unit: "µg/m³"
      },
      PM10: {
        value: "-",
        unit: "µg/m³"
      },
      O3: {
        value: "-",
        unit: "ppb"
      },
      CO: {
        value: "0.69",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "6",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "4"
      }
    }
  }, {
    stationID: "80t",
    nameTH: "ศาลากลาง จ.สตูล",
    nameEN: "City Hall, Satun",
    areaTH: "ต.พิมาน อ.เมือง, จ.สตูล",
    areaEN: "Phiman, Mueang, Satun",
    stationType: "GROUND",
    lat: "6.624686",
    long: "100.066212",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "14",
        unit: "µg/m³"
      },
      PM10: {
        value: "29",
        unit: "µg/m³"
      },
      O3: {
        value: "28",
        unit: "ppb"
      },
      CO: {
        value: "0.49",
        unit: "ppm"
      },
      NO2: {
        value: "14",
        unit: "ppb"
      },
      SO2: {
        value: "1",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "20"
      }
    }
  }, {
    stationID: "08t",
    nameTH: "ศูนย์ฟื้นฟูอาชีพคนพิการและทุพลภาพ ",
    nameEN: "Prabadang Rehabiltation Center",
    areaTH: "ต.ทรงคนอง อ.พระประแดง, สมุทรปราการ",
    areaEN: "Song Kanong, Phra Pradaeng, Samut Prakan",
    stationType: "GROUND",
    lat: "13.664023",
    long: "100.543406",
    LastUpdate: {
      date: "2019-01-15",
      time: "11:00",
      PM25: {
        value: "65",
        unit: "µg/m³"
      },
      PM10: {
        value: "102",
        unit: "µg/m³"
      },
      O3: {
        value: "15",
        unit: "ppb"
      },
      CO: {
        value: "0.51",
        unit: "ppm"
      },
      NO2: {
        value: "42",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "137"
      }
    }
  }, {
    stationID: "17t",
    nameTH: "บ้านพักกรมอุตสาหกรรมพื้นฐานและการเหมืองแร่",
    nameEN: "Residence for Dept. of Mineral Resources",
    areaTH: "ต.ตลาด อ.พระประแดง, สมุทรปราการ",
    areaEN: "Talat, Phra Pradaeng, Samut Prakan",
    stationType: "GROUND",
    lat: "13.652154",
    long: "100.53184",
    LastUpdate: {
      date: "2019-01-15",
      time: "18:00",
      PM25: {
        value: "47",
        unit: "µg/m³"
      },
      PM10: {
        value: "58",
        unit: "µg/m³"
      },
      O3: {
        value: "49",
        unit: "ppb"
      },
      CO: {
        value: "-",
        unit: "ppm"
      },
      NO2: {
        value: "-",
        unit: "ppb"
      },
      SO2: {
        value: "-",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "88"
      }
    }
  }, {
    stationID: "18t",
    nameTH: "ศาลากลางจังหวัดสมุทรปราการ ",
    nameEN: "City Hall",
    areaTH: "ต.ปากน้ำ อ.เมือง, สมุทรปราการ",
    areaEN: "Pak Nam, Meuang, Samut Prakan",
    stationType: "GROUND",
    lat: "13.599172",
    long: "100.597332",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "38",
        unit: "µg/m³"
      },
      PM10: {
        value: "64",
        unit: "µg/m³"
      },
      O3: {
        value: "56",
        unit: "ppb"
      },
      CO: {
        value: "0.17",
        unit: "ppm"
      },
      NO2: {
        value: "16",
        unit: "ppb"
      },
      SO2: {
        value: "0",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "64"
      }
    }
  }, {
    stationID: "19t",
    nameTH: "การเคหะชุมชนเมืองใหม่บางพลี ",
    nameEN: "National Housing Authority Bangplee",
    areaTH: "ต.บางเสาธง,อ.บางเสาธง, สมุทรปราการ",
    areaEN: "Bang Sao Thong, Bang Sao Thong, Samut Prakan ",
    stationType: "GROUND",
    lat: "13.570333",
    long: "100.785866",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "52",
        unit: "µg/m³"
      },
      PM10: {
        value: "82",
        unit: "µg/m³"
      },
      O3: {
        value: "47",
        unit: "ppb"
      },
      CO: {
        value: "0.74",
        unit: "ppm"
      },
      NO2: {
        value: "19",
        unit: "ppb"
      },
      SO2: {
        value: "7",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "104"
      }
    }
  }, {
    stationID: "14t",
    nameTH: "แขวงการทางสมุทรสาคร ",
    nameEN: "Highway District",
    areaTH: "ต.อ้อมน้อย, อ.กระทุ่มแบน, สมุทรสาคร",
    areaEN: "Om Noi, Krathum Baen, Samut Sakhon",
    stationType: "GROUND",
    lat: "13.705458",
    long: "100.315675",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "64",
        unit: "µg/m³"
      },
      PM10: {
        value: "98",
        unit: "µg/m³"
      },
      O3: {
        value: "41",
        unit: "ppb"
      },
      CO: {
        value: "0.91",
        unit: "ppm"
      },
      NO2: {
        value: "54",
        unit: "ppb"
      },
      SO2: {
        value: "9",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "134"
      }
    }
  }, {
    stationID: "27t",
    nameTH: "โรงเรียนสมุทรสาครวิทยาลัย",
    nameEN: "Samut Sakhon Wittayalai School",
    areaTH: "ริมถนนคู่ขนานพระราม 2, อ.เมือง",
    areaEN: "Maha Chai, Mueang, Samut Sakhon",
    stationType: "GROUND",
    lat: "13.550478",
    long: "100.264254",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "44",
        unit: "µg/m³"
      },
      PM10: {
        value: "64",
        unit: "µg/m³"
      },
      O3: {
        value: "44",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "12",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "76"
      }
    }
  }, {
    stationID: "24t",
    nameTH: "สถานีตำรวจภูธรตำบลหน้าพระลาน ",
    nameEN: "Na Phralan Police Station ",
    areaTH: "ต.หน้าพระลาน, อ.เฉลิมพระเกียรติ , สระบุรี",
    areaEN: "Na Phra Lan, Chaloem Phra Kiat, Saraburi",
    stationType: "GROUND",
    lat: "14.687391",
    long: "100.871228",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "74",
        unit: "µg/m³"
      },
      PM10: {
        value: "241",
        unit: "µg/m³"
      },
      O3: {
        value: "35",
        unit: "ppb"
      },
      CO: {
        value: "0.61",
        unit: "ppm"
      },
      NO2: {
        value: "71",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "5",
        aqi: "231"
      }
    }
  }, {
    stationID: "25t",
    nameTH: "สถานีดับเพลิงพระลักษณ์",
    nameEN: "Khao Noi Fire Station",
    areaTH: "ต.ปากเพรียว, อ.เมือง, สระบุรี",
    areaEN: "Pak Phriao, Mueang Saraburi, Saraburi",
    stationType: "GROUND",
    lat: "14.526302",
    long: "100.926128",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "-",
        unit: "µg/m³"
      },
      PM10: {
        value: "95",
        unit: "µg/m³"
      },
      O3: {
        value: "68",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "63",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "3",
        aqi: "95"
      }
    }
  }, {
    stationID: "71t",
    nameTH: "โรงเรียนอนุบาลศรีอรัญโญทัย",
    nameEN: "Sriaranyothai Kindergarten",
    areaTH: "ต.อรัญประเทศ, อ.อรัญประเทศ, สระแก้ว",
    areaEN: "Aranyaprathet, Aranyaprathet, Sa Kaeo",
    stationType: "GROUND",
    lat: "13.692122",
    long: "102.502124",
    LastUpdate: {
      date: "2019-01-15",
      time: "18:00",
      PM25: {
        value: "76",
        unit: "µg/m³"
      },
      PM10: {
        value: "104",
        unit: "µg/m³"
      },
      O3: {
        value: "N/A",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "N/A",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "4",
        aqi: "164"
      }
    }
  }, {
    stationID: "42t",
    nameTH: "สำนักงานสิ่งแวดล้อมภาคที่ 14",
    nameEN: "Environment Agency Section 14, Surat Thani",
    areaTH: "ต.มะขามเตี้ย อ.เมือง, สุราษฎร์ธานี",
    areaEN: "Makham Tia, Mueang, Surat Thani",
    stationType: "GROUND",
    lat: "9.126057",
    long: "99.325355",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "22",
        unit: "µg/m³"
      },
      PM10: {
        value: "40",
        unit: "µg/m³"
      },
      O3: {
        value: "40",
        unit: "ppb"
      },
      CO: {
        value: "0.52",
        unit: "ppm"
      },
      NO2: {
        value: "1",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "33"
      }
    }
  }, {
    stationID: "57t",
    nameTH: "สำนักงานทรัพยากรธรรมชาติและสิ่งแวดล้อมจังหวัดเชียงราย",
    nameEN: "Natural Resources and Environment Office, Chiangrai",
    areaTH: "ต.เวียง อ.เมือง, เชียงราย",
    areaEN: "Wiang, Meuang, Chiang Rai",
    stationType: "GROUND",
    lat: "19.909242",
    long: "99.823357",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "26",
        unit: "µg/m³"
      },
      PM10: {
        value: "31",
        unit: "µg/m³"
      },
      O3: {
        value: "27",
        unit: "ppb"
      },
      CO: {
        value: "0.85",
        unit: "ppm"
      },
      NO2: {
        value: "17",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "26"
      }
    }
  }, {
    stationID: "73t",
    nameTH: "สำนักงานสาธารณสุขแม่สาย",
    nameEN: "Maesai Health Office",
    areaTH: "ต.เวียงพางคำ อ.แม่สาย, เชียงราย",
    areaEN: "Wiang Phang Kham, Mae Sai, Chiang Rai",
    stationType: "GROUND",
    lat: "20.427234",
    long: "99.883724",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "17",
        unit: "µg/m³"
      },
      PM10: {
        value: "29",
        unit: "µg/m³"
      },
      O3: {
        value: "11",
        unit: "ppb"
      },
      CO: {
        value: "0.69",
        unit: "ppm"
      },
      NO2: {
        value: "N/A",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "17"
      }
    }
  }, {
    stationID: "35t",
    nameTH: "ศูนย์ราชการจังหวัดเชียงใหม่ ",
    nameEN: "City Hall, Chiangmai",
    areaTH: "ต.ช้างเผือก อ.เมือง, เชียงใหม่",
    areaEN: "Chang Phueak, Meuang, Chiang Mai",
    stationType: "GROUND",
    lat: "18.840633",
    long: "98.969661",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "27",
        unit: "µg/m³"
      },
      PM10: {
        value: "44",
        unit: "µg/m³"
      },
      O3: {
        value: "48",
        unit: "ppb"
      },
      CO: {
        value: "-",
        unit: "ppm"
      },
      NO2: {
        value: "31",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "47"
      }
    }
  }, {
    stationID: "36t",
    nameTH: "โรงเรียนยุพราชวิทยาลัย ",
    nameEN: "Yupparaj Wittayalai School",
    areaTH: "ต.ศรีภูมิ อ.เมือง, เชียงใหม่",
    areaEN: "Si Phum, Meuang, Chiang Mai",
    stationType: "GROUND",
    lat: "18.47327",
    long: "98.59162",
    LastUpdate: {
      date: "2019-01-15",
      time: "19:00",
      PM25: {
        value: "20",
        unit: "µg/m³"
      },
      PM10: {
        value: "33",
        unit: "µg/m³"
      },
      O3: {
        value: "N/A",
        unit: "ppb"
      },
      CO: {
        value: "0.72",
        unit: "ppm"
      },
      NO2: {
        value: "49",
        unit: "ppb"
      },
      SO2: {
        value: "2",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "20"
      }
    }
  }, {
    stationID: "72t",
    nameTH: "สำนักงานสาธารณสุขจังหวัดเลย",
    nameEN: "Provincial Health Office, Loei",
    areaTH: "ต.นาอาน, อ.เมือง, เลย",
    areaEN: "Na An, Mueang, Loei",
    stationType: "GROUND",
    lat: "17.452765",
    long: "101.728715",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "26",
        unit: "µg/m³"
      },
      PM10: {
        value: "43",
        unit: "µg/m³"
      },
      O3: {
        value: "N/A",
        unit: "ppb"
      },
      CO: {
        value: "N/A",
        unit: "ppm"
      },
      NO2: {
        value: "N/A",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "26"
      }
    }
  }, {
    stationID: "69t",
    nameTH: "อุตุนิยมวิทยาจังหวัดแพร่",
    nameEN: "Meteorology Center, Phrae",
    areaTH: "ต.นาจักร อ.เมือง, แพร่",
    areaEN: "Na Chak, Meuang, Phrae",
    stationType: "GROUND",
    lat: "18.128928",
    long: "100.162345",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "28",
        unit: "µg/m³"
      },
      PM10: {
        value: "40",
        unit: "µg/m³"
      },
      O3: {
        value: "46",
        unit: "ppb"
      },
      CO: {
        value: "0.38",
        unit: "ppm"
      },
      NO2: {
        value: "0",
        unit: "ppb"
      },
      SO2: {
        value: "-",
        unit: "ppb"
      },
      AQI: {
        Level: "2",
        aqi: "43"
      }
    }
  }, {
    stationID: "58t",
    nameTH: "สำนักงานทรัพยากรธรรมชาติและสิ่งแวดล้อมจังหวัดแม่ฮ่องสอน",
    nameEN: "Natural Resources and Environment Office, Mae Hongson",
    areaTH: "ต.จองคำ อ.เมือง, แม่ฮ่องสอน",
    areaEN: "Chong Kham, Meuang, Mae Hong Son",
    stationType: "GROUND",
    lat: "19.304686",
    long: "97.970999",
    LastUpdate: {
      date: "2019-01-15",
      time: "20:00",
      PM25: {
        value: "6",
        unit: "µg/m³"
      },
      PM10: {
        value: "15",
        unit: "µg/m³"
      },
      O3: {
        value: "21",
        unit: "ppb"
      },
      CO: {
        value: "0.89",
        unit: "ppm"
      },
      NO2: {
        value: "4",
        unit: "ppb"
      },
      SO2: {
        value: "N/A",
        unit: "ppb"
      },
      AQI: {
        Level: "1",
        aqi: "15"
      }
    }
  }
];

exports.regions = regions;
exports.stations = stations;
exports.stationMapper = stations.reduce((map, obj) => {
  map[obj.stationID] = obj;
  return map;
}, {});
