import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../assets/Images/google.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/Images/facebook.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default SocialLogin;
