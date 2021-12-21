import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MainScreen} from './src/screens/main';
import {ProductScreen} from './src/screens/product';

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    {/* <MainScreen /> */}
    <ProductScreen />
  </QueryClientProvider>
);
