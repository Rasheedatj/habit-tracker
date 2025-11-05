import { CATEGORIES } from '@/data/dummy-data';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@/store/redux/store';

export default function RootLayout() {
  return (
    // <SafeAreaView style={{ flex: 1 }} edges={['top']}>
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'red'} />
      <Provider store={store}>
        {/* <FavoriteContextProvider> */}
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: '#352f25' },
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: 'Home',
            }}
          />

          <Stack.Screen
            name='(drawer)'
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='mealsOverview/[categoryId]'
            options={({ route, navigation }) => {
              const categoryId = (route.params as { categoryId: string })
                .categoryId;
              return {
                title: CATEGORIES.find((cat) => cat.id === categoryId)?.title,
              };
            }}
          />
          <Stack.Screen name='[mealId]' />
          <Stack.Screen
            name='XPractice'
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: '#fafafa',
              },
            }}
          />
        </Stack>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </>
    // </SafeAreaView>
  );
}
