import { SearchBar } from 'components/SearchBar';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './SearchScreen.styles';
import { RNEInputRef } from 'components/SearchBar';
import { ProductsList } from 'components/ProductsList';

export const SearchScreen = () => {
  const styles = useStyles();
  const input = useRef<RNEInputRef>(null);
  const [searchValue, setSearchValue] = useState('');

  const onIconPress = () => {
    console.log(searchValue);
  };

  const shouldShowList = useMemo(() => searchValue !== '', [searchValue]);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['left', 'bottom', 'right']}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          ref={input}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          onIconPress={onIconPress}
        />
      </View>
      {shouldShowList ? <ProductsList filterName={searchValue} /> : null}
    </SafeAreaView>
  );
};
