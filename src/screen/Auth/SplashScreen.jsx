import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        async function fetchMyAPI() {
            const loginToken = await AsyncStorage.getItem('logged');
            if (loginToken === null) {
                setTimeout(() => {
                    navigation.replace('SinginSingup');
                }, 200);
                console.log("if");
                console.log(loginToken);
            }
            else {
                setTimeout(() => {
                    navigation.replace('Tabs');
                }, 1000);
                console.log("else");
            }
        }
        fetchMyAPI();
    });
    return (
        <Image style={{ width: "100%", marginBottom: '40%' }} resizeMode="cover"
            source={require('../../../assets/MC.png')}
        />
    )
}

export default SplashScreen