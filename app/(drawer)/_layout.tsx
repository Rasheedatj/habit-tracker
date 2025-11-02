import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { StatusBar } from 'react-native';

const DrawerLayout = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'red'} />

      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          sceneStyle: {
            backgroundColor: '#3f2f25',
          },
          drawerContentStyle: {
            backgroundColor: '#351401',
          },
          drawerInactiveTintColor: 'white',
          drawerActiveBackgroundColor: '#e4baa1',
          drawerActiveTintColor: '#351401',
        }}
      >
        <Drawer.Screen
          name='categoriesScreen'
          options={{
            title: 'Category',
            drawerLabel: 'Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='list' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name='FavouriteScreen'
          options={{
            title: 'Favourites',
            drawerLabel: 'Favourites',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='star' color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </>
  );
};

export default DrawerLayout;
