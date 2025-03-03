import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import InputField from "../Components/InputField";
import AuthButton from "../Components/AuthButton";
import SocialLogin from "../Components/SocialLogin";

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../../assets/Images/Login:SignUp.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      </ImageBackground>
      {/* <Image source={require("../../assets/Images/Login:SignUp.png")} /> */}
      
      <View style={{padding: 20}}>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" isPassword />
      <TouchableOpacity>
        <Text style={styles.forgotText} onPress={() => navigation.navigate("ForgotPass")}>FORGOT PASSWORD</Text>
      </TouchableOpacity>
      <AuthButton title="LOG IN" onPress={() => navigation.navigate("FeedScreen")} />
      <Text style={styles.orText}>OR LOG IN BY</Text>
      <SocialLogin />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.link}>SIGN UP</Text>
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", backgroundColor: "#F5F2E8" },
  backgroundImage: { 
    width: "100%", 
    height: 250, // Adjust height as needed
    justifyContent: "center", 
    alignItems: "center" 
  },
  title: { fontSize: 30, fontWeight: "bold", textAlign: "center", color: "#fff" },
  forgotText: { textAlign: "center", marginVertical: 10 },
  orText: { textAlign: "center", marginVertical: 10 },
  signUpText: { textAlign: "center", marginVertical: 10 },
  link: { color: "#B8915B", fontWeight: "bold" },
});

export default LoginScreen;