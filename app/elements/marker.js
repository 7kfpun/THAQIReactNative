import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { indexRanges } from '../utils/indexes';
import I18n from '../utils/i18n';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#FF5A5F',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
    borderColor: '#D23F44',
    borderWidth: 0.6,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '100',
  },
});

export default class AirMarker extends React.PureComponent {
  static propTypes = {
    index: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    isStatusShow: PropTypes.bool,
    isNumericShow: PropTypes.bool,
  }

  static defaultProps = {
    index: 'AQI',
    amount: '-',
    fontSize: 15,
    isStatusShow: false,
    isNumericShow: false,
  }

  render() {
    const { index, fontSize, amount, isStatusShow, isNumericShow } = this.props;
    let color = 'gray';
    let fontColor = 'black';

    let showAmount;
    if (['ND', '-', '/*', '-*', '-/-', 'N/A'].includes(amount) || amount < '0' || !amount) {
      showAmount = '-';
      color = 'gray';
      fontColor = 'white';
    } else {
      showAmount = amount;

      const isMatched = indexRanges[index].filter(item => amount >= item.min && amount <= item.max);
      if (isMatched && isMatched.length >= 1) {
        color = isMatched[0].color;
        fontColor = isMatched[0].fontColor;
        status = isMatched[0].status;
      }
    }

    let text = '';
    if (isStatusShow && I18n.isZh) {
      text = status;
    }

    if (isNumericShow) {
      text = text ? `${text} ${showAmount}` : showAmount;
    }

    return (
      <View style={styles.container}>
        <View style={[styles.bubble, { backgroundColor: color, borderColor: 'white' }]}>
          <Text style={[styles.text, { fontSize, color: fontColor }]}>{text}</Text>
        </View>
      </View>
    );
  }
}
