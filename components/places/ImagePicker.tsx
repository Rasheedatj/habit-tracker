import { Colors } from '@/utils/globalStyles';
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

const ImagePicker = () => {
  const [camerPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [selectedImage, setSelectedImage] = useState('');

  const verifyPermission = async () => {
    if (camerPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionRes = await requestPermission();
      return permissionRes.granted;
    }
    if (camerPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficeint permission',
        'This app does not have the permission to use the camera'
      );
      return false;
    }

    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image) setSelectedImage(image.assets?.at(0)?.uri!);
  };

  return (
    <View>
      <View style={styles.imagePreview}>
        {!selectedImage ? (
          <Text>No image yet</Text>
        ) : (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        )}
      </View>
      <Button title='Take image' onPress={handleTakeImage} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
