import { store } from '@/store/redux/store';
import { appColors } from '@/utils/globalStyles';
import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

const RootLayout = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='ManageExpense'
            options={{
              title: 'Manage Expense',
              headerTintColor: 'white',
              presentation: 'modal',
              headerStyle: {
                backgroundColor: appColors.primary500,
              },
              contentStyle: {},
            }}
          />
        </Stack>
      </Provider>
    </>
  );
};

export default RootLayout;
