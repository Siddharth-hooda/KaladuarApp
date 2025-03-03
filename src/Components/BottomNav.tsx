import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const BottomNav = ({ navigation }: any) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity>
        <Image source={require("../../assets/Images/home-filled.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/Images/category-outlined.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.plusButton}>
        <Image source={require("../../assets/Images/Plus.png")} style={styles.plusIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/Images/marketplace-outlined.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/Images/profile-outlined.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  icon: { width: 24, height: 24 },
  plusButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#B8915B",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  plusIcon: { width: 30, height: 30 },
});

export default BottomNav;
