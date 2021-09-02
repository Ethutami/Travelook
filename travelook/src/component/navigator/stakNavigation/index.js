import React from 'react'
import { StyleSheet, } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../../pages/home/screen/Home1'
import AllHotelScreen from '../../../pages/home/screen/AllHotels'
import LoadingScreen from '../../../commons/setLoading';

const index = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" headerMode={false}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AllHotelPage" component={AllHotelScreen} />
            <Stack.Screen name="LoadingPage" component={LoadingScreen} />
        </Stack.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})
