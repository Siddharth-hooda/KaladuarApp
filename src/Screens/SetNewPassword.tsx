import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import InputField from '../Components/InputField';
import AuthButton from '../Components/AuthButton';

const SetNewPasswordScreen = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/Login:SignUp.png')}
        style={styles.backgroundImage}></ImageBackground>
      <View style={[styles.container, {padding: 20}]}>
        <Text style={styles.title}>SET NEW PASSWORD</Text>
        <Text style={styles.subText}>Type your new password</Text>
        <InputField
          placeholder="Password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />
        <InputField
          placeholder="Confirm Password"
          isPassword
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <AuthButton title="SEND" onPress={() => navigation.navigate('ChooseCategory')} />
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
  subText: {textAlign: 'center', marginVertical: 10, color: '#555'},
});

export default SetNewPasswordScreen;
