import { Colors } from '@/utils/globalStyles';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

const PlaceForm = () => {
  const [title, setTitle] = useState('');
  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      style={styles.form}
    >
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 600,
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
