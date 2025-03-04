import { View, Text } from 'react-native'
import React from 'react'

const GalleryItem = ({item}:any) => {
  return (
    <View>
      <Text>GalleryItem{item}</Text>
    </View>
  )
}

export default GalleryItem