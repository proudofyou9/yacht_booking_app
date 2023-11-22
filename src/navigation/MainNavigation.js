import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/welcome';
import SplashScreen from '../screens/splash';
import RegisterScreen from '../screens/signup';
import LoginScreen from '../screens/login';

import FavouriteScreen from "../screens/favourites";
import MessageScreen from "../screens/messages";
import ChatScreen from "../screens/chat";

import SearchScreen from "../screens/Search/index";
import YachtScreen from "../pages/yacht";
import BookScreen from "../pages/book";
import DetailPriceScreen from "../pages/detailed_price";
import PaymentScreen from '../pages/payment';
import ContactScreen from '../pages/contact';

import BookingScreen from '../screens/bookings';
import ProfileScreen from '../screens/profile';
import SettingScreen from "../pages/setting";

const Stack = createNativeStackNavigator();

const MainNavigator = ({parentNavigator}) => {
  return (
    <NavigationContainer>
      <>
        <Stack.Navigator
          initialRouteName={'Payment'}
          screenOptions={{headerShown: false}}>
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Favourite" component={FavouriteScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />

            <Stack.Screen name='Chat'>
              {(props) => <ChatScreen  {...props}/>}
            </Stack.Screen>

            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Info" component={YachtScreen} />
            <Stack.Screen name="Book" component={BookScreen} />
            <Stack.Screen name="DetailedPrice" component={DetailPriceScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />

            <Stack.Screen name="Booking" component={BookingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
          </>
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default MainNavigator;
