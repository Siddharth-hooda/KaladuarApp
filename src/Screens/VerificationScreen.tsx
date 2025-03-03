import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import InputField from '../Components/InputField';
import AuthButton from '../Components/AuthButton';

const VerificationScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/Login:SignUp.png')}
        style={styles.backgroundImage}
        resizeMode="cover"></ImageBackground>
      <View style={[styles.container,{padding:20}]}>
        <Text style={styles.title}>VERIFICATION</Text>
        <Text style={styles.subText}>
          A message with a verification code was sent to your mobile phone.
        </Text>
        <InputField placeholder="Type verification code" />
        <Text style={styles.resendText}>DON’T RECEIVE THE CODE</Text>
        <AuthButton
          title="VERIFY"
          onPress={() => navigation.navigate('ResetPassword')}
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
  container: {flex: 1, justifyContent: 'center', backgroundColor: '#F5F2E8'},
  title: {fontSize: 24, fontWeight: 'bold', textAlign: 'center'},
  subText: {textAlign: 'center', marginVertical: 10},
  resendText: {textAlign: 'center', marginVertical: 10, color: '#B8915B'},
});

export default VerificationScreen;
