import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import CategoryCard from "../Components/CategoryCard";
import CustomButton from "../Components/CustomButton";

const ChooseCategoryScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
        <ImageBackground source={require("../../assets/Images/header-bg.png")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Who are you?</Text>

        <Text style={styles.categoryTitle}>Visual artist</Text>
        <View style={styles.row}>
          <CategoryCard title="Painter" image={require("../../assets/Images/painter.png")} />
          <CategoryCard title="Sculptor" image={require("../../assets/Images/sculptor.png")} />
        </View>

        <Text style={styles.categoryTitle}>Performance artist</Text>
        <View style={styles.row}>
          <CategoryCard title="Actor" image={require("../../assets/Images/actor.png")} />
          <CategoryCard title="Singer" image={require("../../assets/Images/singer.png")} />
        </View>

        <Text style={styles.categoryTitle}>Literary artist</Text>
        <View style={styles.row}>
          <CategoryCard title="Poet" image={require("../../assets/Images/painter.png")} />
          <CategoryCard title="Novelist" image={require("../../assets/Images/sculptor.png")} />
        </View>

        <Text style={styles.footerText}>SHARE - INSPIRE - CONNECT</Text>
        <CustomButton title="EXPLORE NOW" onPress={() => navigation.navigate("FeedScreen")} />
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "rgba(255,255,255,0.9)" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  categoryTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  footerText: { textAlign: "center", marginVertical: 15, color: "#B8915B", fontWeight: "bold" },
});

export default ChooseCategoryScreen;
