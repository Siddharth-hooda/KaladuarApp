import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
      <TextInput
          placeholder="Discover posts from your circle..."
          style={styles.searchBar}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: '#EFEFEF',
      borderRadius: 25,
      padding: 10,
      paddingLeft: 15,
      fontSize: 14,
      // margin:30
    },
  });

export default Search