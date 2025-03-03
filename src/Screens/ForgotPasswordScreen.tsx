import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import InputField from '../Components/InputField';
import AuthButton from '../Components/AuthButton';

const ForgotPasswordScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/Login:SignUp.png')}
        style={styles.backgroundImage}></ImageBackground>
      <View style={[styles.container,{padding:20}]}>
        <Text style={styles.title}>TYPE YOUR EMAIL</Text>
        <Text style={styles.subText}>
          We will send you instructions on how to reset your password
        </Text>
        <InputField placeholder="Email" />
        <AuthButton
          title="SEND"
          onPress={() => navigation.navigate('VerifyCode')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 250, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {flex: 1, justifyContent: 'center'},
  title: {fontSize: 24, fontWeight: 'bold', textAlign: 'center'},
  subText: {textAlign: 'center', marginVertical: 10},
});

export default ForgotPasswordScreen;
