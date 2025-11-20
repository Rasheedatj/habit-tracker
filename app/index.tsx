import PlacesList from '@/components/places/PlacesList';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const AllPlacesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <PlacesList places={[]} />
    </View>
  );
};

export default AllPlacesScreen;
