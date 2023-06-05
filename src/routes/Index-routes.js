import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

import { AuthContext } from '../context/AuthContext';

const IndexRoutes = () => {

    const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
        { isLoggedIn ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  )
}

export default IndexRoutes