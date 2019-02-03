// import firebase from 'react-native-firebase';

import { config } from '../config';

const aqi = () => {
  const AQIURL = `${config.aqiUrl}?t=${Math.random()}`;
  return fetch(AQIURL)
    .then(res => res.json())
    .catch((err) => {
      console.log('Request for aqi failed', err);
      // firebase.crash().log('Request for aqi failed');
      // firebase.crash().report(JSON.stringify(err));
    });
};


const HISTORY_LIMIT = 24;

const history = (station) => {
  const AQI_HISTORY_URL = `${config.aqiHistoryUrl}?station=${station}&limit=${HISTORY_LIMIT}&t=${Math.random()}`;
  return fetch(AQI_HISTORY_URL)
    .then(res => res.json())
    .catch((err) => {
      console.log('Request for aqi history failed', err);
      // firebase.crash().log('Request for history failed');
      // firebase.crash().report(JSON.stringify(err));
    });
};

exports.aqi = aqi;
exports.history = history;
