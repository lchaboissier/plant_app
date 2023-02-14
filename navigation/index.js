import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import PlantInfoScreen from '../screens/PlantInfoScreen/PlantInfoScreen';
import HelpPage1 from '../components/HelpInfo/HelpPages/HelpPage1';
import HelpPage2 from '../components/HelpInfo/HelpPages/HelpPage2';
import HelpPage3 from '../components/HelpInfo/HelpPages/HelpPage3';
import HelpPage4 from '../components/HelpInfo/HelpPages/HelpPage4';
import HelpPage5 from '../components/HelpInfo/HelpPages/HelpPage5';
import HelpPage6 from '../components/HelpInfo/HelpPages/HelpPage6';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="PlantInfo" component={PlantInfoScreen} />
        <Stack.Screen name="HelpPage1" component={HelpPage1} />
        <Stack.Screen name="HelpPage2" component={HelpPage2} />
        <Stack.Screen name="HelpPage3" component={HelpPage3} />
        <Stack.Screen name="HelpPage4" component={HelpPage4} />
        <Stack.Screen name="HelpPage5" component={HelpPage5} />
        <Stack.Screen name="HelpPage6" component={HelpPage6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;