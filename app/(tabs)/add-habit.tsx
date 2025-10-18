import { DATABASE_ID, databases, HABITS_ID } from '@/lib/appwrite';
import { useAuth } from '@/lib/context/auth-context';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ID } from 'react-native-appwrite';
import {
  Button,
  SegmentedButtons,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';

const FREQUENCIES = ['Daily', 'Weekly', 'Monthly'];
type Frequncy = (typeof FREQUENCIES)[number];

const AddHabitScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState<Frequncy>('daily');
  const [error, setError] = useState('');
  const router = useRouter();
  const theme = useTheme();

  const { user } = useAuth();

  const handleSubmit = async () => {
    if (!user) return;
    try {
      await databases.createDocument(DATABASE_ID, HABITS_ID, ID.unique(), {
        user_id: user.$id,
        title,
        description,
        frequency,
        streak_count: 10,
        last_completed: new Date().toISOString(),
      });

      router.back();
    } catch (error) {
      if (error instanceof Error) return setError(error.message);

      return 'There was an error creating your new habit';
    }
  };
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

      <Button
        mode='contained'
        onPress={handleSubmit}
        disabled={!title || !description}
      >
        Add Habit
      </Button>

      {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
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
