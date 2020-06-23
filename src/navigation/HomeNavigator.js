/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import TabBadgeIcon from '../components/navigation/TabBadgeIcon';

// import Home screen
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Cart from '../screens/cart/Cart';
import Profile from '../screens/settings/Profile';
import Colors from '../theme/colors';

// HomeNavigator Config

type Props = {
  color: string,
  focused: string,
  size: number,
};

// create bottom tab navigator
const Tab = createBottomTabNavigator();

// HomeNavigator
function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}: Props) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = `home${focused ? '' : '-outline'}`;
          } else if (route.name === 'Search') {
            iconName = 'magnify';
          } else if (route.name === 'Favorites') {
            iconName = `heart${focused ? '' : '-outline'}`;
          } else if (route.name === 'Profile') {
            iconName = `account-box${focused ? '' : '-outline'}`;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.secondaryText,
        showLabel: false, // hide labels
        style: {
          backgroundColor: Colors.surface, // TabBar background
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: props => (
            <TabBadgeIcon
              name={`cart${props.focused ? '' : '-outline'}`}
              {...props}
            />
          ),
        }}
      />
    
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
