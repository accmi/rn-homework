import React from 'react';
import {View, TextInput} from 'react-native';

import SearchIcon from '../../../../assets/search.svg';

import {styles} from './styles';

interface SearchComponentProps {
  value: string;
  searchDidChange(value: string): void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  value,
  searchDidChange,
}) => (
  <View style={styles.shadowContainer}>
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <SearchIcon width="17" height="17" />
        <TextInput
          style={styles.searchInput}
          value={value}
          onChangeText={searchDidChange}
        />
      </View>
    </View>
  </View>
);
