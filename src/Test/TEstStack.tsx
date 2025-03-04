import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { First, Second, Third } from './screens' 

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export function FirstStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} />
    </Stack.Navigator>
  );
}

export function SecondStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  );
}

export function ThirdStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Third" component={Third} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstStack} />
        <Tab.Screen name="Secondary" component={SecondStack}/>
        <Tab.Screen name="Third" component={ThirdStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}