import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import OneSignal from 'react-native-onesignal';

import AdMob from '../elements/admob';
import SettingsGroup from '../elements/settings-group';

import { OneSignalGetTags } from '../utils/onesignal';
import { regions } from '../utils/stations';
import I18n from '../utils/i18n';

import { config } from '../config';

const CHECK_INTERVAL = 60 * 1000;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBlock: {
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 24,
    color: 'black',
  },
  permissionReminderBlock: {
    backgroundColor: '#3949AB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  permissionReminderText: {
    fontSize: 12,
    color: 'white',
  },
  list: {
    paddingVertical: 30,
  },
});


export default class SettingsView extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: I18n.t('settings'),
    tabBarIcon: ({ tintColor }) => <Icon name="notifications-none" size={21} color={tintColor} />,
  };

  static requestPermissions() {
    if (Platform.OS === 'ios') {
      const permissions = {
        alert: true,
        badge: true,
        sound: true,
      };
      OneSignal.requestPermissions(permissions);
      OneSignal.registerForPushNotifications();
    }
  }

  state = {
    isShowPermissionReminderBlock: false,
    tags: [],
  };

  async componentDidMount() {
    // Request permission on start
    OneSignal.init(config.onesignal, { kOSSettingsKeyAutoPrompt: true });

    this.loadEnabledItems();
  }

  async loadEnabledItems() {
    const tags = await OneSignalGetTags();
    if (JSON.stringify(tags) !== JSON.stringify(this.state.tags)) {
      this.setState({ tags, k: Math.random() });
    }

    this.checkPermissions(tags);
    this.checkPermissionsInterval = setInterval(
      () => this.checkPermissions(tags),
      CHECK_INTERVAL,
    );
  }

  checkPermissions(tags) {
    if (Platform.OS === 'ios' && tags && Object.values(tags).indexOf('true') !== -1) {
      OneSignal.checkPermissions((permissions) => {
        console.log('checkPermissions', permissions);
        if (!permissions || (permissions && !permissions.alert)) {
          this.setState({ isShowPermissionReminderBlock: true });
        }
      });

      SettingsView.requestPermissions();
    }
    this.setState({ isShowPermissionReminderBlock: false });
  }

  render() {
    const {
      k,
      tags,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.titleBlock}>
          <Text style={styles.titleText}>{I18n.t('notify_title')}</Text>
        </View>
        {this.state.isShowPermissionReminderBlock &&
          <View style={styles.permissionReminderBlock}>
            <Text style={styles.permissionReminderText}>{I18n.t('permissions_required')}</Text>
          </View>}

        <ScrollView>
          <FlatList
            key={k}
            style={styles.list}
            data={regions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <SettingsGroup item={item} tags={tags} />}
          />
        </ScrollView>

        <AdMob unitId={config.admob[Platform.OS]['thaqi-settings-footer']} />
      </View>
    );
  }
}
