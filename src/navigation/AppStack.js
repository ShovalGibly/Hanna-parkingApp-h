import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import Drawer from './Drawer';
import FindDestinationScreen from '../screens/FindDestinationScreen';
import ShareParkingScreen from '../screens/ShareParkingScreen';
import RecoveryPassword from '../screens/RecoveryPasswordScreen';
import { spring } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

const AppStack = () => {

    return (
        <Stack.Navigator initialRouteName = "Drawer" screenOptions={{headerShown: false}}>
            <Stack.Screen name ="Drawer" component = {Drawer} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Share-Parking" component={ShareParkingScreen} />
            <Stack.Screen name="Sign Up" component={SignupScreen} />
            <Stack.Screen name="Find Destination" component={FindDestinationScreen} />
            <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />


        </Stack.Navigator> 

    )
}

export default AppStack;