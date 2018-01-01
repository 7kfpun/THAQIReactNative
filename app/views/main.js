import React, { Component } from 'react';
import {
  Dimensions,
  DeviceEventEmitter,
  Platform,
  StyleSheet,
  NativeModules,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { iOSColors } from 'react-native-typography';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import store from 'react-native-simple-store';
import timer from 'react-native-timer';

import AdMob from '../elements/admob';
import Indicator from '../elements/indicator';
import Marker from '../elements/marker';

import { aqi } from '../utils/api';
import { indexTypes } from '../utils/indexes';
import I18n from '../utils/i18n';
import tracker from '../utils/tracker';

const { width, height } = Dimensions.get('window');

const { RNLocation } = NativeModules;

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
    top: 35,
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
  static navigationOptions = {
    header: null,
    tabBarLabel: I18n.t('main'),
    tabBarIcon: ({ tintColor }) => <Icon name="place" size={19} color={tintColor} />,
  };

  state = {
    location: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    selectedIndex: indexTypes[0].key,
    isLoading: false,
    gpsEnabled: false,
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

  async componentDidMount() {
    this.prepareData();
    timer.setInterval(this, 'ReloadDataInterval', () => this.prepareData(), RELOAD_INTERVAL);

    const that = this;
    store.get('selectedIndex').then((selectedIndex) => {
      if (selectedIndex) {
        that.setState({
          selectedIndex,
        });
      }
    });

    if (Platform.OS === 'ios') {
      RNLocation.requestWhenInUseAuthorization();
      // RNLocation.requestAlwaysAuthorization();
      RNLocation.startUpdatingLocation();
      RNLocation.setDistanceFilter(5.0);

      let first = true;
      DeviceEventEmitter.addListener('locationUpdated', (location) => {
        console.log('Location updated', location);
        this.setState({
          location: location.coords,
          gpsEnabled: true,
        });

        if (first) {
          first = false;
          if (MainView.isOutOfBound(location.coords.latitude, location.coords.longitude)) {
            timer.setTimeout(this, 'MoveToDefault', () => {
              this.map.animateToRegion(MainView.getDefaultLocation());
            }, 800);
          } else {
            timer.setTimeout(this, 'MoveToDefault', () => {
              this.map.animateToRegion(this.getCurrentLocation());
            }, 500);
          }
        }
      });
    } else {
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      //   {
      //     title: '應用程序需要訪問您的位置',
      //     message: '應用程序需要訪問您的位置',
      //   },
      // );
      // console.log('granted', granted);
      // if (granted) {
      //   FusedLocation.setLocationPriority(FusedLocation.Constants.HIGH_ACCURACY);
      //
      //   console.log('Getting GPS location');
      //   // Get location once.
      //   const location = await FusedLocation.getFusedLocation();
      //   if (location.latitude && location.longitude) {
      //     this.setState({
      //       location: {
      //         latitude: location.latitude,
      //         longitude: location.longitude,
      //       },
      //       gpsEnabled: true,
      //     });
      //
      //     if (MainView.isOutOfBound(location.latitude, location.longitude)) {
      //       this.map.animateToRegion(MainView.getDefaultLocation());
      //     } else {
      //       this.map.animateToRegion(this.getCurrentLocation());
      //     }
      //   }
      //
      //   // Set options.
      //   FusedLocation.setLocationPriority(FusedLocation.Constants.BALANCED);
      //   FusedLocation.setLocationInterval(3000);
      //   FusedLocation.setFastestLocationInterval(1500);
      //   FusedLocation.setSmallestDisplacement(10);
      //
      //   // Keep getting updated location.
      //   FusedLocation.startLocationUpdates();
      //
      //   // Place listeners.
      //   this.subscription = FusedLocation.on('fusedLocation', (updatedLocation) => {
      //     console.log('GPS location updated', updatedLocation);
      //     this.setState({
      //       location: {
      //         latitude: updatedLocation.latitude,
      //         longitude: updatedLocation.longitude,
      //       },
      //       gpsEnabled: true,
      //     });
      //   });
      // }
    }
  }

  getCurrentLocation() {
    return {
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude,
      latitudeDelta: this.state.gpsEnabled ? 0.6 : LATITUDE_DELTA,
      longitudeDelta: this.state.gpsEnabled ? 0.6 * ASPECT_RATIO : LONGITUDE_DELTA,
    };
  }

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

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref={(ref) => { this.map = ref; }}
          initialRegion={this.getCurrentLocation()}
          // onRegionChange={region => this.onRegionChange(region)}
        >
          {this.state.aqiResult && this.state.aqiResult.stations
            && this.state.aqiResult.stations
            .map(station => (<MapView.Marker
              key={station.stationID}
              coordinate={{
                latitude: parseFloat(station.lat),
                longitude: parseFloat(station.long),
              }}
              onPress={() => {
                this.setState({ selectedLocation: station.stationID });
                this.map.animateToRegion({
                  latitude: parseFloat(station.lat),
                  longitude: parseFloat(station.long),
                });

                const tempStation = {...station}
                delete tempStation.LastUpdate
                tracker.logEvent('select-location', tempStation);
              }}
            >
              <View>
                <Marker
                  amount={station.LastUpdate[this.state.selectedIndex].value || station.LastUpdate[this.state.selectedIndex].aqi}
                  index={this.state.selectedIndex}
                  isNumericShow={true}
                />
              </View>
              <MapView.Callout>
                <TouchableOpacity
                  onPress={() => {
                    const tempStation = {...station}
                    delete tempStation.LastUpdate
                    tracker.logEvent('check-main-details', tempStation);
                    this.props.navigation.navigate('MainDetails', { item: station });
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: I18n.isTh ? station.areaTH.length * 6: station.areaEN.length * 6, marginLeft: 10 }}>
                    <Text style={styles.stationText}>{I18n.isTh ? station.areaTH : station.areaEN}</Text>
                    {/* <Icon name="chevron-right" size={24} color={'gray'} /> */}
                  </View>
                </TouchableOpacity>
              </MapView.Callout>
            </MapView.Marker>))}

          {this.state.gpsEnabled && this.state.location && <MapView.Marker
            coordinate={this.state.location}
          />}
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
              && `${this.state.aqiResult.stations[3].LastUpdate.date} ${this.state.aqiResult.stations[3].LastUpdate.time}`
            }</Text>
            {!this.state.isLoading && <Icon name="refresh" style={{ marginLeft: 5 }} size={20} color="#616161" />}
            {this.state.isLoading && <ActivityIndicator style={{ marginLeft: 5 }} />}
          </View>
        </TouchableOpacity>

        <Indicator />

        {<TouchableOpacity
          style={styles.defaultLocation}
          onPress={() => {
            this.map.animateToRegion(MainView.getDefaultLocation());
            tracker.logEvent('move-to-default-location');
          }}
        >
          <Icon name="crop-free" size={28} color={iOSColors.gray} />
        </TouchableOpacity>}

        {this.state.gpsEnabled && <TouchableOpacity
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

          <AdMob unitId={'thaqi-ios-main-footer'} />
        </View>
      </View>
    );
  }
}
