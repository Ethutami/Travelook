import React from 'react';
import { StyleSheet, } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import store, { persistor } from './src/redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import LaunchPage from './src/pages/launchPage';
import LoginPage from './src/pages/loginPage';
import SignupPage from './src/pages/signUpPage';
import MainTab from './src/component/navigator/mainTab'
import AccountScreen from './src/pages/me/screen/AccountScreen'
import NotificationScreen from './src/pages/notivication'
import ReviewScreen from './src/pages/me/screen/review/ReviewScreen'
import EditReview from './src/pages/me/screen/review/editReview'
import ReviewAllScreen from './src/component/detailList/review/allReview'
import Filter_Sort from './src/pages/filter_sort'
import Details from './src/pages/details/index'
import Amenities from './src/component/detailList/amenitie/allAmenitie'
import BookingSreen from './src/pages/Booking'
import DetailsReservation from './src/pages/Booking/reservation'
import OrderDetails from './src/pages/orders/orderDetails'
import OrderHistory from './src/pages/orders/orderHistory'
import ShowReview  from './src/pages/me/screen/review/showReview'

const App: () => Node = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="LaunchPage" headerMode={false}>
            <Stack.Screen name="LaunchPage" component={LaunchPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={SignupPage} />
            <Stack.Screen name="TabMain" component={MainTab} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Review" component={ReviewScreen} />
            <Stack.Screen name="EditReview" component={EditReview} />
            <Stack.Screen name="ShowReview" component={ShowReview} />
            <Stack.Screen name="ReviewAllScreen" component={ReviewAllScreen} />
            <Stack.Screen name="FilterSort" component={Filter_Sort} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Amenitie" component={Amenities} />
            <Stack.Screen name="Booking" component={BookingSreen} />
            <Stack.Screen name="DetailsReservation" component={DetailsReservation} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="OrderHistory" component={OrderHistory} />
          </Stack.Navigator>
        </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
    
    );
};

const styles = StyleSheet.create({});

export default App;
