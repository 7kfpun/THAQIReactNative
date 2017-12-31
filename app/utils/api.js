import firebase from 'react-native-firebase';

import { config } from '../config';

const aqi = () => {
  const AQIURL = `${config.aqiUrl}?t=${Math.random()}`;
  return fetch(AQIURL)
    .then(res => res.json())
    .catch((err) => {
      console.log('Request for aqi failed', err);
      firebase.crash().log('Request for aqi failed');
      firebase.crash().report(JSON.stringify(err));
    });
};

exports.aqi = aqi;
