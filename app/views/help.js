import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { iOSColors } from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SafariView from 'react-native-safari-view';

import AdMob from '../elements/admob';

import I18n from '../utils/i18n';
import tracker from '../utils/tracker';

import { config } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  block: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  index: {
    paddingHorizontal: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  description: {
    fontWeight: '100',
    lineHeight: 20,
    marginBottom: 10,
  },
});

const helpTexts = {
  AQI: [{
    index: '0 - 50',
    category: 'status_good',
    meaning: 'status_good_meaning',
    backgroundColor: '#009866',
    fontColor: 'black',
  }, {
    index: '51 - 100',
    category: 'status_moderate',
    meaning: 'status_moderate_meaning',
    backgroundColor: '#FEDE33',
    fontColor: 'black',
  }, {
    index: '101 - 150',
    category: 'status_unhealthy_for_sensitive_groups',
    meaning: 'status_unhealthy_for_sensitive_groups_meaning',
    backgroundColor: '#FE9833',
    fontColor: 'black',
  }, {
    index: '151 - 200',
    category: 'status_unhealthy',
    meaning: 'status_unhealthy_meaning',
    backgroundColor: '#CC0033',
    fontColor: 'white',
  }, {
    index: '201 - 300',
    category: 'status_very_unhealthy',
    meaning: 'status_very_unhealthy_meaning',
    backgroundColor: '#660098',
    fontColor: 'white',
  }, {
    index: '301 - 500',
    category: 'status_hazardous',
    meaning: 'status_hazardous_meaning',
    backgroundColor: '#7E2200',
    fontColor: 'white',
  }],
};

export default class HelpView extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: I18n.t('help'),
    tabBarIcon: ({ tintColor }) => <Icon name="info-outline" size={21} color={tintColor} />,
  };

  static openFeedbackUrl() {
    SafariView.isAvailable()
      .then(SafariView.show({
        url: I18n.isTh ? config.feedbackUrl.th : config.feedbackUrl.en,
      }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    tracker.view('Help');
    return (
      <View style={styles.container}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{I18n.t('help_definition')}</Text>
          <TouchableOpacity onPress={HelpView.openFeedbackUrl}>
            <Icon name="mail-outline" size={30} color={iOSColors.gray} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.block}>
            <View style={{ marginBottom: 20 }}><Text>{I18n.t('aqi_meaning')}</Text></View>
            {helpTexts.AQI.map(item => (
              <View key={`help-text-${Math.random()}`}>
                <View style={styles.row}>
                  <View style={[{ backgroundColor: item.backgroundColor }, styles.index]}>
                    <Text style={{ color: item.fontColor }}>{item.index}</Text>
                  </View>
                  <Text>{I18n.t(item.category)}</Text>
                </View>
                <Text style={styles.description}>{I18n.t(item.meaning)}</Text>
              </View>))}
          </View>
        </ScrollView>
        <AdMob unitId="thaqi-ios-help-footer" />
      </View>
    );
  }
}
