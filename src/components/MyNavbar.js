import React from 'react'
import { View, Navbar, Text } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Create from '../screens/Create';
import AddButton from './AddButton';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();


const MyNavbar = () => {
    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: {
                height: 70,
                position: 'absolute',
                bottom: 16,
                marginHorizontal: 16,
                borderRadius: 16
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                ? 'time'
                : 'time-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: '#446cfa',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen options={{
            tabBarIcon: () => {
                return <Ionicons name='add' size={50} color='white' />
            },
            tabBarButton: (props) => {
                return <AddButton {...props} />
            }
        }} name="Create" component={Create} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
}

export default MyNavbar;