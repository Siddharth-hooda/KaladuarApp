import React from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import GalleryItem from '../Components/Gallery/GalleryItem';
import TabSelector from '../Components/Gallery/TabSelector';

const mockData = [
  { id: '1', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../assets/Images/woman-eating.jpg.png') },
  { id: '2', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../assets/Images/woman-eating.jpg.png') },
  { id: '3', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../assets/Images/woman-eating.jpg.png') },
  { id: '4', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../assets/Images/woman-eating.jpg.png') },
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        {/* <FontAwesome name="search" size={20} color="#C5A87D" style={styles.searchIcon} /> */}
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      
      {/* Tab Selector */}
      <TabSelector />
      
      {/* Gallery List */}
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <GalleryItem item={item} />}
        contentContainerStyle={styles.galleryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}, searchContainer: {}, searchIcon: {}, searchInput: {}, galleryList: {}
})

export default GalleryScreen;
