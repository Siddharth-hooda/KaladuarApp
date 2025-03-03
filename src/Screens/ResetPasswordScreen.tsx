import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import InputField from "../Components/InputField";
import AuthButton from "../Components/AuthButton";

const ResetPasswordScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../assets/Images/Login:SignUp.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SET NEW PASSWORD</Text>
        <InputField placeholder="Password" isPassword />
        <InputField placeholder="Confirm Password" isPassword />
        <AuthButton title="SEND" onPress={() => navigation.navigate("Login")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
});

export default ResetPasswordScreen;
