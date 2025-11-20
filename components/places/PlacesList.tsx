import { PlaceProp } from '@/types';
import { Colors } from '@/utils/globalStyles';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }: { places: PlaceProp[] }) => {
  if (!places || places.length === 0)
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - start adding some!
        </Text>
        <Link href='/Map' style={{ color: 'red' }}>
          Map
        </Link>
      </View>
    );

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem place={itemData.item} onPress={() => {}} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fallBackText: {
    fontSize: 16,
    color: Colors.primary100,
  },
});
