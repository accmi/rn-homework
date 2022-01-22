import React from 'react';
import {View} from 'react-native';

import SearchIcon from '../../../../assets/search.svg';
import {Input} from '../../../../components/input';

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
      <Input
        Icon={<SearchIcon width="17" height="17" />}
        value={value}
        searchDidChange={searchDidChange}
      />
    </View>
  </View>
);
