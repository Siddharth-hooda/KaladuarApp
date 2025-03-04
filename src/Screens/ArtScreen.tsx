import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import GalleryItem from '../../Components/Gallery/GalleryItem';
import TabSelector from '../../Components/Gallery/TabSelector';
import styles from '../../styles/GalleryScreenStyles';

const mockData = [
  { id: '1', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../../assets/woman-eating.jpg') },
  { id: '2', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../../assets/woman-eating.jpg') },
  { id: '3', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../../assets/woman-eating.jpg') },
  { id: '4', title: 'Woman Eating', price: 12, oldPrice: 15, discount: 20, image: require('../../../assets/woman-eating.jpg') },
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#C5A87D" style={styles.searchIcon} />
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

export default GalleryScreen;
