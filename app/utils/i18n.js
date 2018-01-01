import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    main: 'Map',
    list: 'List',
    details: 'Details',
    forecast: 'Forecast',
    settings: 'Settings',
    help: 'Help',
    contact: 'Contact',

    list_title: 'Detail Data',

    rating_title: 'Enjoy using "Taiwan Air Quality"?',
    rating_description: 'Please give us 5 stars to cheer we up if you like this app.',
    feedback_description: 'Give us some feedbacks. We will definitely keep improving.',

    notify_title: 'Notification',

    notify_pollution_title: 'When the air quality gets significantly worse',
    notify_pollution_therhold: 'Notice me when AQI is above',
    notify_cleanliness_title: 'When the air gets clean',
    notify_cleanliness_therhold: 'Notice me when AQI is below',
    aqi_full: 'Air Quality Index (AQI)',

    permissions_required: 'Notification permission required',
    too_small_therhold: 'The value is too small, you would get lots of notifications',
    too_large_therhold: 'The value is too large, you would get lots of notifications',

    forecast_title: 'Forecast',
    forecast_notification_label: 'Forecast Notification (daily)',

    help_definition: 'Definition',

    contact_title: 'Contact Us',

    aqi_meaning: 'An air quality index (AQI) is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. As the AQI increases, an increasingly large percentage of the population is likely to experience increasingly severe adverse health effects.',
    status_good: 'Good',
    status_good_meaning: 'Air pollution risk is low.',
    status_moderate: 'Moderate',
    status_moderate_meaning: 'Air quality is acceptable.',
    status_unhealthy_for_sensitive_groups: 'Unhealthy for Sensitive Groups',
    status_unhealthy_for_sensitive_groups_meaning: 'High-risk group may have health effects. General public is not affected.',
    status_unhealthy: 'Unhealthy',
    status_unhealthy_meaning: 'High-risk group may have more serious health effects. Some of the general public may have health effects.',
    status_very_unhealthy: 'Very Unhealthy',
    status_very_unhealthy_meaning: 'General public have health effects.',
    status_hazardous: 'Hazardous',
    status_hazardous_meaning: 'Some of the general public may have more serious health effects.',

    cancel: 'Cancel',
  },
  th: {
    main: 'แผนที่',
    list: 'สถานี',
    details: 'รายละเอียด',
    forecast: 'พยากรณ์',
    settings: 'การตั้งค่า',
    help: 'ช่วยเหลือ',
    contact: 'ติดต่อ',

    list_title: 'สถานี',

    rating_title: 'ถ้าคุณชอบแอพนี้',
    rating_description: 'กรุณาให้เรา 5 ดาวเพื่อเชียร์เรา',
    feedback_description: 'เราต้องการ้คำแนะนำของคุณ เราจะทำให้แอพนี้ดีขึ้น',

    notify_title: 'การตั้งค่าการแจ้งเตือน',

    notify_pollution_title: 'เมื่อคุณภาพอากาศแย่ลง',
    notify_pollution_therhold: 'แจ้งให้ฉันทราบเมื่อ AQI อยู่เหนือ',
    notify_cleanliness_title: 'เมื่อคุณภาพอากาศดีขึ้น',
    notify_cleanliness_therhold: 'แจ้งให้ฉันทราบเมื่อ AQI ต่ำกว่า',
    aqi_full: 'คุณภาพอากาศ (AQI)',

    permissions_required: 'คุณต้องเปิดการแจ้งเตือน',
    too_small_therhold: 'ค่าที่คุณตั้งไว้ต่ำหรือคุณจะได้รับการแจ้งเตือนเป็นจำนวนมาก',
    too_large_therhold: 'ค่าที่คุณตั้งไว้สูง คุณจะได้รับการแจ้งเตือนเป็นจำนวนมาก',

    forecast_title: 'พยากรณ์อากาศ',
    forecast_notification_label: 'ประกาศพยากรณ์อากาศ (รายวัน)',

    help_definition: 'ความหมายของสี',

    contact_title: 'ติดต่อเรา',

    aqi_meaning: 'คุณภาพอากาศ (AQI) คือตัวเลขที่ใช้เพื่อสื่อสารว่าอากาศมีมลภาวะแค่ไหน เมื่อ AQI มีค่าสูงขึ้น เปอร์เซ็นต์ของประชากรที่มีแนวโน้มจะได้รับผลกระทบด้านลบต่อสุขภาพจะยิ่งสูงขึ้น',
    status_good: 'ดี',
    status_good_meaning: 'ไม่มีผลกระทบต่อสุขภาพ',
    status_moderate: 'ปานกลาง',
    status_moderate_meaning: 'ไม่มีผลกระทบต่อสุขภาพ',
    status_unhealthy_for_sensitive_groups: 'มีผลกระทบต่อกลุ่มที่มีความอ่อนไหว',
    status_unhealthy_for_sensitive_groups_meaning: 'ผู้ป่วยโรคระบบทางเดินหายใจ ควรหลีกเลี่ยงการออกกำลังภายนอกอาคาร',
    status_unhealthy: 'มีผลกระทบต่อสุขภาพ',
    status_unhealthy_meaning: 'บุคคลทั่วไป โดยเฉพาะเด็กและผู้สูงอายุ ไม่ควรทำกิจกรรมภายนอกอาคารเป็นเวลานาน',
    status_very_unhealthy: 'มีผบกระทบต่อสุขภาพมาก',
    status_very_unhealthy_meaning: 'ผู้ป่วยโรคระบบทางเดินหายใจ ควรหลีกเลี่ยงกิจกรรมภายนอกอาคาร บุคคลทั่วไป โดยเฉพาะเด็กและผู้สูงอายุ ควรจำกัดการออกกำลังภายนอกอาคาร',
    status_hazardous: 'อันตราย',
    status_hazardous_meaning: 'บุคคลทั่วไป ควรหลีกเลี่ยงการออกกำลังภายนอกอาคาร สำหรับผู้ป่วยโรคระบบทางเดินหายใจ ควรอยู่ภายในอาคาร',

    cancel: 'ยกเลิก',
  },
};

I18n.isTh = I18n.locale.startsWith('th');

export default I18n;
