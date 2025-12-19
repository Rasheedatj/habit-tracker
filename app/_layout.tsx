import { Colors } from '@/utils/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

const RootLayout = () => {
  const router = useRouter();
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.gray700,
          },
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: 'Your Favourite  Places',
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                style={styles.headerRight}
                onPress={() => router.push('/')}
              >
                <Ionicons color={tintColor} name='add' size={24} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name='AddPlace'
          options={{
            title: 'Add a new Place',
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name='Map'
          options={{
            title: 'Add Place',
          }}
        />
        <Stack.Screen
          name='PlaceDetails'
          options={{
            title: 'Add Place',
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  headerRight: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
