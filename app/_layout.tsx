import { store } from '@/store/redux/store';
import { appColors } from '@/utils/globalStyles';
import { Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    Roboto_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
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
              presentation:
                Platform.OS === 'ios' ? 'modal' : 'transparentModal',
              headerStyle: {
                backgroundColor: appColors.primary500,
              },
            }}
          />
        </Stack>
      </Provider>
    </>
  );
};

export default RootLayout;
