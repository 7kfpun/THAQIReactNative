import React from 'react';
import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import * as StoreReview from 'react-native-store-review';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import store from 'react-native-simple-store';

import { config } from '../config';
import I18n from '../utils/i18n';
import tracker from '../utils/tracker';

const RATE_KEY = 'isRatingGiven.001';
const STARS_TO_APP_STORE = 4;
const RATE_POPUP_TIME = 5 * 60 * 1000;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
  },
  button: {
    marginTop: 6,
    padding: 10,
    backgroundColor: '#3B5998',
    borderRadius: 2,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 40,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 26,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  close: {
    padding: 5,
    position: 'absolute',
    top: 6,
    right: 10,
  },
});

export default class Rating extends React.Component {
  static openFeedbackUrl() {
    const url = I18n.isZh ? config.feedbackUrl.zh : config.feedbackUrl.en;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  }

  state = {
    starCount: 0,
    isRatingGiven: false,
    isRatingClose: true,
  };

  componentDidMount() {
    const that = this;
    store.get(RATE_KEY).then((isRatingGiven) => {
      if (isRatingGiven) {
        that.setState({ isRatingGiven });
      }
    });

    this.showRatingTimeout = setTimeout(() => {
      this.setState({ isRatingClose: false });
    }, RATE_POPUP_TIME);
  }

  componentWillUnmount() {
    this.showRatingTimeout && clearTimeout(this.showRatingTimeout);
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });

    if (rating >= STARS_TO_APP_STORE) {
      if (StoreReview.isAvailable) {
        StoreReview.requestReview();
      } else if (Platform.OS === 'ios') {
        Linking.openURL(config.appStore);
      } else if (Platform.OS === 'android') {
        Linking.openURL(config.googlePlay);
      }
    }

    store.save(RATE_KEY, true);

    tracker.logEvent('give-rating', { label: rating.toString() });
  }

  render() {
    if (this.state.isRatingGiven || this.state.isRatingClose) {
      return null;
    }

    return (
      <Animatable.View style={styles.container} animation="fadeIn">
        <TouchableOpacity style={styles.close} onPress={() => this.setState({ isRatingClose: true })}>
          <Icon name="clear" size={22} color="#616161" />
        </TouchableOpacity>
        <Icon name="thumb-up" size={30} color="#616161" />
        <Text style={styles.titleText}>{I18n.t('rating_title')}</Text>
        <Text style={styles.descriptionText}>{I18n.t('rating_description')}</Text>
        <StarRating
          starSize={36}
          rating={this.state.starCount}
          selectedStar={rating => this.onStarRatingPress(rating)}
        />
        {this.state.starCount > 0 &&
          this.state.starCount < STARS_TO_APP_STORE &&
          <TouchableOpacity onPress={() => Rating.openFeedbackUrl()}>
            <Animatable.View style={styles.button} animation="fadeIn">
              <Text style={styles.text}>{I18n.t('feedback_description')}</Text>
            </Animatable.View>
          </TouchableOpacity>}
      </Animatable.View>
    );
  }
}
