/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {Platform, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/welcome/Welcome';
import SignUp from '../screens/signup/SignUp';
import SignIn from '../screens/signin/SignIn';
import HomeNavigator from './HomeNavigator';
import Product from '../screens/product/ProductDetail';
import Orders from '../screens/orders/OrdersB';
// import colors
import Colors from '../theme/colors';


const SAVE_ICON = Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark';


const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <View
      style={[
        {flex: 1},
        // FIX ME: react navigation white glitch (flicker), remove this backgroundColor
        Platform.OS === 'android' && {backgroundColor: Colors.primaryColor},
      ]}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardOverlayEnabled: false,
            cardShadowEnabled: false,
            cardStyle: {
              // FIX ME: added to prevent some minor react navigation border bottom glitches
              backgroundColor: Colors.primaryColor,
              opacity: 1,
              shadowOpacity: 0,
            },
            headerStyle: {
              elevation: 1,
              shadowOpacity: 0,
            },
            headerBackTitleVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: Colors.onPrimaryColor,
            headerTitleAlign: 'center',
          }}>
        
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerStyle: {
                backgroundColor: Colors.primaryColor,
                elevation: 0,
                shadowOpacity: 0,
              },
              title: 'Create Account',
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerStyle: {
                backgroundColor: Colors.primaryColor,
                elevation: 0,
                shadowOpacity: 0,
              },
              title: 'Sign In',
            }}
          />
          <Stack.Screen
            name="HomeNavigator"
            component={HomeNavigator}
            options={{headerShown: false}}
          />
      
          <Stack.Screen
            name="Product"
            component={Product}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{
              headerStyle: {
                backgroundColor: Colors.primaryColor,
              },
              title: 'My Orders',
            }}
          />
      
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default MainNavigator;
