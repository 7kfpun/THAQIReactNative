import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator,
  Dimensions,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { iOSColors } from 'react-native-typography';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import store from 'react-native-simple-store';

import AdMob from '../elements/admob';
import Indicator from '../elements/indicator';
import Marker from '../elements/marker';
import Rating from '../elements/rating';

import { aqi } from '../utils/api';
import { indexTypes } from '../utils/indexes';
import I18n from '../utils/i18n';
import tracker from '../utils/tracker';

import { config } from '../config';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 12.4;
const LONGITUDE = 101.5;
const LATITUDE_DELTA = 18;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const OUT_OF_BOUND = 60;
const RELOAD_INTERVAL = 10 * 60 * 1000;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  defaultLocation: {
    position: 'absolute',
    right: 12,
    bottom: 162,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  currentLocation: {
    position: 'absolute',
    right: 12,
    bottom: 104,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
  },

  refreshContainer: {
    top: Platform.OS === 'ios' ? 35 : 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  refreshContainerBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  refreshContainerText: {
    fontSize: 12,
  },

  stationText: {
    fontSize: 12,
  },

  buttonContainer: {
    height: 42,
    flexGrow: 0,
  },
  bubble: {
    height: 40,
    width: 56,
    marginHorizontal: 4,
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 2,
    paddingVertical: 12,
    borderRadius: 20,
    borderColor: iOSColors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBubble: {
    borderColor: iOSColors.tealBlue,
  },

  text: {
    fontSize: 13,
  },
});

export default class MainView extends Component<{}> {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
    tabBarLabel: I18n.t('main'),
    tabBarIcon: ({ tintColor }) => <Icon name="place" size={19} color={tintColor} />,
  };

  static isOutOfBound(latitude, longitude) {
    const distance = ((latitude - LATITUDE) * (latitude - LATITUDE)) + ((longitude - LONGITUDE) * (longitude - LONGITUDE));
    console.log('Distance', distance);
    return distance > OUT_OF_BOUND;
  }

  static getDefaultLocation() {
    return {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  }

  state = {
    location: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    selectedIndex: indexTypes[0].key,
    isLoading: false,
    gpsEnabled: false,
  };

  componentWillUnmount() {
    this.reloadFetchLatestDataInterval && clearInterval(this.reloadFetchLatestDataInterval);
  }

  getCurrentLocation() {
    return {
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude,
      latitudeDelta: this.state.gpsEnabled ? 0.6 : LATITUDE_DELTA,
      longitudeDelta: this.state.gpsEnabled ? 0.6 * ASPECT_RATIO : LONGITUDE_DELTA,
    };
  }

  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      navigator.geolocation.requestAuthorization();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: I18n.t('location_permission.title'),
            message: I18n.t('location_permission.description'),
          },
        );
        console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.setState({
            gpsEnabled: true,
          });
          this.checkLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  loadMapContent = async () => {
    const that = this;
    store.get('selectedIndex').then((selectedIndex) => {
      if (selectedIndex) {
        that.setState({
          selectedIndex,
        });
      }
    });

    if (Platform.OS === 'ios') {
      this.checkLocation();
    } else {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.checkLocation();
      } else {
        this.requestLocationPermission();
      }
    }

    this.prepareData();

    this.reloadFetchLatestDataInterval = setInterval(() => {
      this.prepareData();
      tracker.logEvent('reload-fetch-latest-data');
    }, RELOAD_INTERVAL);
  };

  prepareData() {
    this.setState({ isLoading: true }, () => {
      const that = this;
      const trace = firebase.perf().newTrace('api_get_aqi');
      trace.start();
      aqi().then((result) => {
        const keys = Object.keys(result || {}).length;
        console.log('AQI:', result);
        console.log('AQI length:', keys);
        if (result && keys > 0) {
          that.setState({ aqiResult: result });
        }

        that.setState({ isLoading: false });
        trace.stop();
      });
    });
  }

  checkLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('geolocation', position);
        this.setState({
          location: position.coords,
          gpsEnabled: true,
        });

        const moveLocation = MainView.isOutOfBound(
          position.coords.latitude,
          position.coords.longitude
        )
          ? MainView.getDefaultLocation()
          : this.getCurrentLocation();
        try {
          this.map.animateToRegion(moveLocation);
        } catch (err) {
          console.error(`Map animateToRegion failed: ${JSON.stringify(err)}`);
        }
      },
      error => {
        this.requestLocationPermission();
        if (!this.state.isLocationMovedToDefault) {
          // alert(error.message);
          this.setState({ isLocationMovedToDefault: true });
          setTimeout(() => {
            try {
              console.log(error);
              this.map.animateToRegion(MainView.getDefaultLocation());
            } catch (err) {
              console.error(
                `Map animateToRegion failed: ${JSON.stringify(err)}`
              );
            }
          }, 2000);
        }
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        location: position.coords,
        gpsEnabled: true,
      });
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref={(ref) => { this.map = ref; }}
          initialRegion={this.getCurrentLocation()}
          // onRegionChange={region => this.onRegionChange(region)}
          onMapReady={this.loadMapContent}
          showsUserLocation={true}
        >
          {this.state.aqiResult && this.state.aqiResult.stations
            && this.state.aqiResult.stations
            .map(station => (
              <MapView.Marker
                key={station.stationID}
                coordinate={{
                  latitude: parseFloat(station.lat),
                  longitude: parseFloat(station.long),
                }}
                onPress={() => {
                  // this.setState({ selectedLocation: station.stationID });
                  tracker.logEvent('check-main-details', station);
                  navigation.navigate('MainDetails', { item: station });
                }}
              >
                <View>
                  <Marker
                    amount={station.LastUpdate[this.state.selectedIndex].value || station.LastUpdate[this.state.selectedIndex].aqi}
                    index={this.state.selectedIndex}
                    isNumericShow={true}
                  />
                </View>
              </MapView.Marker>))}
        </MapView>

        <TouchableOpacity
          onPress={() => {
            this.prepareData();
            tracker.logEvent('fetch-latest-data');
          }}
          style={styles.refreshContainer}
        >
          <View style={styles.refreshContainerBody}>
            <Text style={styles.refreshContainerText}>{this.state.aqiResult
              && this.state.aqiResult.stations
              && `${this.state.aqiResult.stations[3].LastUpdate.date} ${this.state.aqiResult.stations[3].LastUpdate.time}`}
            </Text>
            {!this.state.isLoading && <Icon name="refresh" style={{ marginLeft: 5 }} size={20} color="#616161" />}
            {this.state.isLoading && <ActivityIndicator style={{ marginLeft: 5 }} />}
          </View>
        </TouchableOpacity>

        <Indicator />

        <Rating />

        {
          <TouchableOpacity
            style={styles.defaultLocation}
            onPress={() => {
              this.map.animateToRegion(MainView.getDefaultLocation());
              tracker.logEvent('move-to-default-location');
            }}
          >
            <Icon name="crop-free" size={28} color={iOSColors.gray} />
          </TouchableOpacity>
        }

        {this.state.gpsEnabled &&
          <TouchableOpacity
            style={styles.currentLocation}
            onPress={() => {
              this.map.animateToRegion(this.getCurrentLocation());
              tracker.logEvent('move-to-current-location');
            }}
          >
            <Icon name="near-me" size={28} color={iOSColors.gray} />
          </TouchableOpacity>}

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.buttonContainer}>
            {indexTypes.map(item => (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  this.setState({ selectedIndex: item.name });
                  store.save('selectedIndex', item.name);
                  tracker.logEvent('select-index', { label: item.name });
                  console.log('Select index', item.name);
                }}
                style={[styles.bubble, styles.button, this.state.selectedIndex === item.name ? styles.selectedBubble : {}]}
              >
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <AdMob unitId={config.admob[Platform.OS]['thaqi-main-footer']} />
        </View>
      </View>
    );
  }
}
