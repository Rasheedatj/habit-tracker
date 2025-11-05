import { appColors } from '@/utils/globalStyles';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

const TabLayout = () => {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: appColors.accent500,
        tabBarInactiveTintColor: appColors.primary100,
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: appColors.primary500,
          paddingTop: 10,
        },
        headerStyle: {
          backgroundColor: appColors.primary500,
        },
        sceneStyle: {
          backgroundColor: appColors.primary700,
        },
        headerRight: ({ tintColor }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: '/ManageExpense',
                params: {
                  mode: 'add',
                },
              })
            }
            style={{ marginRight: 20 }}
          >
            <FontAwesome6 name='plus' size={24} color={tintColor} />
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name='Recent'
        options={{
          title: 'Recent Expenses',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name='hourglass-2' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='AllExpenses'
        options={{
          title: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='calendar-alt' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
