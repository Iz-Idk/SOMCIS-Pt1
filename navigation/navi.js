import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "../navigation/index"
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordS from '../screens/ForgotPasswordS';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name = "Sign In" component={SignInScreen} />
    </AuthStack.Navigator>
);


export default function Navi () {
    <NavigationContainer>
      <ForgotPasswordS />
        
    </NavigationContainer>
}