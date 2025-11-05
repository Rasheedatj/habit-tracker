import { appColors } from '@/utils/globalStyles';
import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

const RootLayout = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
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
    </>
  );
};

export default RootLayout;
