import OneSignal from 'react-native-onesignal';

exports.OneSignalGetTags = () => new Promise((resolve, reject) => {
  try {
    OneSignal.getTags((tags) => {
      console.log('OneSignal tags', tags);
      resolve(tags);
    });
  } catch (err) {
    console.log('OneSignal tags', err);
    reject(err);
  }
});
