import { Models } from 'react-native-appwrite';

export interface Habit extends Models.DefaultDocument {
  user_id: string;
  title: string;
  description: string;
  frequency: string;
  streak_count: number;
  last_completed: string;
}

export interface CompletedHabit extends Models.DefaultDocument {
  habit_id: string;
  user_id: string;
  completed_at: string;
}
