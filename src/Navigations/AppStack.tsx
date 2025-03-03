import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNav from "../Components/BottomNav";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainApp" component={BottomTabNav} />
    </Stack.Navigator>
  );
};

export default AppStack;
