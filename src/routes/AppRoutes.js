import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../screens/IndexScreen';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="IndexScreen" component={IndexScreen} />
        </Stack.Navigator>
      );
}

export default AppRoutes