import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#666666',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Today's Habits",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='calendar-today'
              size={size}
              color={color}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='streaks'
        options={{
          title: 'Streaks',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='chart-line'
              size={size}
              color={color}
            />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name='add-habit'
        options={{
          title: 'Add Habit',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='plus-circle'
              size={size}
              color={color}
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
