import React from 'react';

import { AuthProvider } from './src/context/AuthContext';
import IndexRoutes from './src/routes/Index-routes';

export default function App () {
  return (
    <AuthProvider>
      <IndexRoutes />
    </AuthProvider>
  )
}