import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignupScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import ResetPasswordScreen from "../Screens/ResetPasswordScreen";
import VerificationScreen from "../Screens/VerificationScreen";
import SetNewPasswordScreen from "../Screens/SetNewPassword";
import ChooseCategoryScreen from "../Screens/ChooseCategoryScreen";
import FeedScreen from "../Screens/FeedScreen";
import ChallengeScreen from "../Screens/ChallengeScreen";
import ProfileScreen from "../Screens/Profile/ProfileScreen";
import EditProfileScreen from "../Screens/Profile/EditProfile";
import GalleryScreen from "../Screens/ArtScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPass" component={ResetPasswordScreen} />
        <Stack.Screen name="VerifyCode" component={VerificationScreen} />
        <Stack.Screen name="ResetPassword" component={SetNewPasswordScreen} />
        <Stack.Screen name="ChooseCategory" component={ChooseCategoryScreen} />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
        <Stack.Screen name="challengeScreen" component={ChallengeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        {/* <Stack.Screen name="ArtScreen" component={GalleryScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
