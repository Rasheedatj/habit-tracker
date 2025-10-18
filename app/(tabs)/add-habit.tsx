import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons, TextInput } from 'react-native-paper';

const FREQUENCIES = ['Daily', 'Weekly', 'Monthly'];
type Frequncy = (typeof FREQUENCIES)[number];

const AddHabitScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState<Frequncy>('daily');

  const handleSubmit = async () => [];
  return (
    <View style={styles.container}>
      <TextInput
        label='Title'
        mode='outlined'
        style={styles.input}
        onChangeText={setTitle}
      />
      <TextInput
        label='Description'
        mode='outlined'
        style={styles.input}
        onChangeText={setDescription}
      />
      <View style={styles.frequncyContainer}>
        <SegmentedButtons
          value={frequency}
          onValueChange={(value) => setFrequency(value)}
          buttons={FREQUENCIES.map((freq) => {
            return { value: freq.toLowerCase(), label: freq };
          })}
        />
      </View>

      <Button mode='contained' disabled={!title || !description}>
        Add Habit
      </Button>
    </View>
  );
};

export default AddHabitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginBottom: 16,
  },
  frequncyContainer: {
    marginBottom: 24,
  },
});
