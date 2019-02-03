import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SettingsItem from '../elements/settings-item';

import { stationMapper } from '../utils/stations';
import tracker from '../utils/tracker';
import I18n from '../utils/i18n';

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  switchBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupNameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  noticeText: {
    fontSize: 12,
  },
  noticeWarningText: {
    fontSize: 10,
    marginBottom: 15,
  },
  list: {
    paddingVertical: 10,
  },
});

export default class SettingsGroup extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.shape({
        en: PropTypes.string.isRequired,
        th: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    isOpen: true,
  };

  componentDidMount() {
    console.log(stationMapper);
  }

  render() {
    const { item, tags } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ isOpen: !this.state.isOpen });
            tracker.logEvent('toggle-settings-group', { label: I18n.isTh ? item.name.th : item.name.en });
          }}
        >
          <View style={styles.groupNameBlock}>
            <Text style={styles.text}>{I18n.isTh ? item.name.th : item.name.en}</Text>
            <Icon name={this.state.isOpen ? 'keyboard-arrow-down' : 'chevron-right'} size={21} color="gray" />
          </View>
        </TouchableOpacity>
        {this.state.isOpen && <FlatList
          style={styles.list}
          data={item.stations.filter(i => stationMapper[i])}
          keyExtractor={i => i}
          renderItem={({ item }) => <SettingsItem item={stationMapper[item]} tags={tags} />}
        />}
      </View>
    );
  }
}
