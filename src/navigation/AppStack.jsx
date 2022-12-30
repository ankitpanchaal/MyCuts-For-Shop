import React from 'react'
import SinginSingup from '../screen/Auth/SinginSingup'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import SingUp from '../screen/Auth/SingUp';
import AddServices from '../screen/AddServices';
import EditService from '../screen/EditService';
import Profile from '../screen/Profile';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='SinginSingup' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='SinginSingup' component={SinginSingup} />
            <Stack.Screen name='SingUp' component={SingUp} />

            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='AddServices' component={AddServices} />
            <Stack.Screen name='EditService' component={EditService} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default AppStack