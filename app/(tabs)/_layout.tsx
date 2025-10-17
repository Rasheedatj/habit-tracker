import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: 'coral',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome5 name='home' size={24} color={color} />
            ) : (
              <AntDesign name='home' size={24} color={color} />
            );
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='login'
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='login' size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
