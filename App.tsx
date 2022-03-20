import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MainNavigator} from './src/navigation/mainNavigator';

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <MainNavigator />
  </QueryClientProvider>
);
