import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

const CategoryCard = ({ title, image, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, margin: 10, borderRadius: 10 },
  image: { width: "100%", height: 120, justifyContent: "center", alignItems: "center" },
  text: { color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" },
});

export default CategoryCard;
