import React from 'react';
import {
  Platform,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { iOSColors } from 'react-native-typography';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Main from './views/main';
import Details from './views/details';
import Settings from './views/settings';
import Help from './views/help';

import I18n from './utils/i18n';
import tracker from './utils/tracker';

if (!__DEV__) {
  console.log = () => {};
}

const navigationOptions = {
  header: null,
};

const MainNavigator = createStackNavigator(
  {
    Main,
    MainDetails: Details,
  },
  {
    navigationOptions,
  },
);

const SettingsNavigator = createStackNavigator(
  {
    Settings,
  },
  {
    navigationOptions,
  },
);

const HelpNavigator = createStackNavigator(
  {
    Help,
  },
  {
    navigationOptions,
  },
);

const AppTab = createBottomTabNavigator(
  {
    main: MainNavigator,
    settings: SettingsNavigator,
    help: HelpNavigator,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      return {
        tabBarLabel: I18n.t(routeName),
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName;
          let size = 20;
          if (routeName === 'main') {
            iconName = 'ios-map';
            size = 19;
          } else if (routeName === 'settings') {
            iconName = 'ios-notifications-outline';
          } else if (routeName === 'help') {
            iconName = 'ios-help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={tintColor} />;
        },
      };
    },
    tabBarOptions: {
      activeTintColor: iOSColors.tealBlue,
      inactiveTintColor: iOSColors.black,
      labelStyle: {
        fontSize: 10,
        paddingBottom: 2,
        paddingTop: 0,
      },
      // showIcon, pressColor, style and indicatorStyle are for Android
      // (createMaterialTopTabNavigator)
      showIcon: true,
      pressColor: '#E0E0E0',
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        ...Platform.select({
          ios: {
            backgroundColor: iOSColors.white,
          },
          android: {
            backgroundColor: iOSColors.tealBlue,
          },
        }),
      },
    },
    tabBarPosition: 'bottom',
  },
);

console.ignoredYellowBox = [
  'NetInfo\'s "change" event is deprecated. Listen to the "connectionChange" event instead.',
  'Warning: Can only update a mounted or mounting component.',
];

// gets the current screen from navigation state
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default () => (
  <AppTab
    onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);

      if (prevScreen !== currentScreen) {
        console.log(currentScreen);
        tracker.view(currentScreen);
      }
    }}
  />
);
