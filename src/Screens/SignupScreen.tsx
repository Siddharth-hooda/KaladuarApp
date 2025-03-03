import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import InputField from "../Components/InputField";
import AuthButton from "../Components/AuthButton";

const SignUpScreen = ({ navigation }:any) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../../assets/Images/Login:SignUp.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>
      {/* <Text style={styles.title}>WELCOME</Text> */}
      <View style={[styles.container,{ padding: 20 }]}>
      <InputField placeholder="Email" />
      <InputField placeholder="Email" />
      <InputField placeholder="Password" isPassword />
      <AuthButton title="SIGN IN" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signInText}>Already have an account? <Text style={styles.link}>SIGN IN</Text></Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  backgroundImage: { 
    width: "100%", 
    height: 250, // Adjust height as needed
    justifyContent: "center", 
    alignItems: "center" 
  },
  title: { fontSize: 30, fontWeight: "bold", textAlign: "center" },
  signInText: { textAlign: "center", marginVertical: 10 },
  link: { color: "#B8915B", fontWeight: "bold" },
});

export default SignUpScreen;
