import { Colors } from '@/utils/globalStyles';
import { getMapPreview } from '@/utils/location';
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from 'expo-location';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const LocationPicker = () => {
  const [selectedLocation, setSelectedLocation] = useState<null | {
    lng: number;
    lat: number;
  }>(null);
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const verifyPermission = async () => {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionRes = await requestPermission();
      return permissionRes.granted;
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      // Alert.alert(
      //   'Insufficient Permission',
      //   'Your app does not have enough permission to use location'
      // );

      // return false;
      const permissionRes = await requestPermission();
      return permissionRes.granted;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    console.log(hasPermission);

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setSelectedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const getPickOnMapHandler = async () => {};
  return (
    <View>
      <View style={styles.mapPreview}>
        {selectedLocation ? (
          <View style={styles.location}>
            <Image
              source={{
                uri: getMapPreview({
                  lat: selectedLocation.lat,
                  lng: selectedLocation.lng,
                }),
              }}
              style={styles.image}
            />
          </View>
        ) : (
          <Text>No locationn picked yet yet</Text>
        )}
      </View>

      <View style={styles.actions}>
        <Button title='Locate User' onPress={getLocationHandler} />
        <Button title='Pick on map' onPress={getPickOnMapHandler} />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },

  location: {
    width: '100%',
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
