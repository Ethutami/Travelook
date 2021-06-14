import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StakHome from '../stakNavigation'
import OrdersScreen from '../../../pages/orders'
import UserAccountScreen from '../../../pages/me/screen'
import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'


const index = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
          initialRouteName="Next Stay"
          screenOptions={({route}) => ({
            tabBarIcon: ({color, focused}) => {
              let home;
              let orders
              let me;
    
              if (route.name === 'Next Stay') {
                home =  'home-variant-outline';
              } else if (route.name === 'Orders') {
                orders = 'check-square';
              }else{
                  me = 'smile'
              }
              // You can return any component that you like here!
              return (
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                  <MaterialComunityIcon name={home} size={24} color={color} />
                  <Feather name={orders} size={20} color={color} />
                  <Feather name={me} size={20} color={color} />
                </View>
              );
            },
          })}
        barStyle={{backgroundColor: '#FFFFFF'}}
        tabBarOptions={{
          activeTintColor: "#1E1E1E",
          inactiveTintColor: "#C2C3C6"
        }}
        >
            <Tab.Screen name="Next Stay" component={StakHome} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
            <Tab.Screen name="Me" component={UserAccountScreen}/>
        </Tab.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})
