import { Linking, Platform } from 'react-native';

import SafariView from 'react-native-safari-view';

export const openURL = (url, isInApp = 1) => {
  if (Platform.OS === 'ios' && isInApp) {
    SafariView.isAvailable()
      .then(SafariView.show({ url }))
      .catch(error => {
        console.log(error);
        Linking.openURL(url);
      });
  } else {
    Linking.openURL(url);
  }
};

export const noop = () => {};
