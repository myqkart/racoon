import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../auth/Login';
import Signup from '../auth/Signup';
import ForgetPass from '../auth/ForgetPass';
import Verification from '../auth/Verification';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    );
}

export default AuthRoutes