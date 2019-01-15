import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';

import AdMob from '../elements/admob';
import Chart from '../elements/chart';
import IndicatorHorizontal from '../elements/indicator-horizontal';
import Marker from '../elements/marker';
import SettingsItem from '../elements/settings-item';

import { history } from '../utils/api';
import { indexTypes } from '../utils/indexes';
import { stationMapper } from '../utils/stations';
import I18n from '../utils/i18n';
import tracker from '../utils/tracker';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingRight: 10,
    paddingLeft: 2,
    marginBottom: 10,
  },
  block: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingRight: 10,
    paddingVertical: 20,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  currentBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
    marginLeft: 2,
  },
  text: {
    marginTop: 4,
    fontSize: 12,
    color: 'black',
  },
  unitText: {
    fontSize: 10,
    color: 'gray',
  },
  dateText: {
    fontSize: 10,
  },
});

export default class DetailsView extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({}).isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  }

  static navigationOptions = () => ({
    header: null,
    tabBarLabel: I18n.t('details'),
    tabBarIcon: ({ tintColor }) => (<Icon
      name="timeline"
      size={21}
      color={tintColor}
    />),
  })

  state = {
    refreshing: true,
  }

  componentDidMount() {
    this.prepareData();

    const { state } = this.props.navigation;
    const { item } = state.params;
    if (item.ImageUrl) {
      Image.getSize(item.ImageUrl, (imageWidth, imageHeight) => {
        console.log('getSize', imageWidth, imageHeight);
        this.setState({ ratio: imageHeight / imageWidth });
      });
    }
  }

  prepareData = () => {
    const { state } = this.props.navigation;
    const { item } = state.params;

    const trace = firebase.perf().newTrace('api_get_aqi_history');
    trace.start();
    history(item.stationID).then((result) => {
      trace.stop();
      if (result.data) {
        this.setState({ result: result.data });
      }
      this.setState({ refreshing: false });
    });
  }

  goBack = () => {
    this.props.navigation.goBack(null);
  }

  increaseEnabledCount = () => console.log()

  descreaseEnabledCount = () => console.log()

  render() {
    const { state } = this.props.navigation;
    const { item } = state.params;

    alert(item.stationID);

    const {
      ratio,
      refreshing,
      result,
      tags,
    } = this.state;
    tracker.view('History-Details');
    return (
      <View style={styles.container}>
        <View style={styles.titleBlock}>
          <Icon name="chevron-left" size={40} color="gray" onPress={this.goBack} />
          <Text style={styles.title}>{I18n.isTh ? item.nameTH : item.nameEN}</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.prepareData}
            />
          }
        >
          {item.ImageUrl && <Image
            style={{ width, height: ratio * width }}
            source={{ uri: item.ImageUrl }}
          />}

          <View style={{ padding: 10 }}>
            <SettingsItem
              text={I18n.t('notify_title')}
              item={item}
              tags={tags || {}}
              increaseEnabledCount={this.increaseEnabledCount}
              descreaseEnabledCount={this.descreaseEnabledCount}
            />

            <Text style={{ marginTop: 10 }}>{I18n.isTh ? item.areaTH : item.areaEN}</Text>
          </View>

          <IndicatorHorizontal />

          {!refreshing && result && indexTypes.map((indexType) => {
            const { length } = result;
            return (
              <View key={indexType.key} style={styles.block}>
                <View style={styles.currentBlock}>
                  <Marker
                    amount={indexType.key === 'AQI' ? item.LastUpdate[indexType.key].aqi : item.LastUpdate[indexType.key].value}
                    index={indexType.name}
                    isNumericShow={true}
                  />
                  <Text style={styles.text}>{indexType.name}</Text>
                  <Text style={styles.unitText}>{indexType.unit}</Text>
                </View>

                <View style={{ width: width - 80 }}>
                  <Chart result={result.map(i => i[indexType.key])} index={indexType.key} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.dateText}>{moment(result[0].publish_time).format('lll')}</Text>
                    <Text style={styles.dateText}>{moment(result[length - 1].publish_time).format('lll')}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <AdMob unitId="thaqi-ios-details-footer" />
      </View>
    );
  }
}
