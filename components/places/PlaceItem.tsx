import { PlaceProp } from '@/types';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const PlaceItem = ({
  place,
  onPress,
}: {
  place: PlaceProp;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: place.imageUri }} />

      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
