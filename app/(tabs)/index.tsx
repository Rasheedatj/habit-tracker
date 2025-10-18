import {
  client,
  DATABASE_ID,
  databases,
  HABITS_COMPLETIONS_ID,
  HABITS_ID,
  RealTimeResponse,
} from '@/lib/appwrite';
import { useAuth } from '@/lib/context/auth-context';
import { CompletedHabit, Habit } from '@/types/databases.type';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ID, Query } from 'react-native-appwrite';
import { Swipeable } from 'react-native-gesture-handler';
import { Button, Surface, Text } from 'react-native-paper';

export default function Index() {
  const { user, signOut } = useAuth();
  const [habits, setHabits] = useState<Habit[]>();
  const [completedHabits, setCompletedHabits] = useState<string[]>();
  const swipeableRefs = useRef<{ [key: string]: Swipeable | null }>({});

  const isHabitCompleted = (habitId: string) =>
    completedHabits?.includes(habitId);

  useEffect(() => {
    if (user) {
      const habitsChannel = `databases.${DATABASE_ID}.collections.${HABITS_ID}.documents`;
      const habitSubscription = client.subscribe(
        habitsChannel,
        (response: RealTimeResponse) => {
          if (
            response.events.includes(
              'databases.*.collections.*.documents.*.create'
            )
          ) {
            fetchHabits();
          } else if (
            response.events.includes(
              'databases.*.collections.*.documents.*.update'
            )
          ) {
            fetchHabits();
          } else if (
            response.events.includes(
              'databases.*.collections.*.documents.*.delete'
            )
          ) {
            fetchHabits();
          }
        }
      );

      const completionsChannel = `databases.${DATABASE_ID}.collections.${HABITS_COMPLETIONS_ID}.documents`;
      const completionsSubscription = client.subscribe(
        completionsChannel,
        (response: RealTimeResponse) => {
          if (
            response.events.includes(
              'databases.*.collections.*.documents.*.create'
            )
          ) {
            fetchCompletedHabits();
          }
        }
      );

      fetchHabits();
      fetchCompletedHabits();
      return () => {
        habitSubscription();
        completionsSubscription();
      };
    }
  }, [user]);

  const fetchHabits = async () => {
    try {
      const response = await databases.listDocuments(DATABASE_ID, HABITS_ID, [
        Query.equal('user_id', user?.$id ?? ''),
      ]);
      setHabits(response.documents as Habit[]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCompletedHabits = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        HABITS_COMPLETIONS_ID,
        [Query.equal('user_id', user?.$id ?? '')]
      );
      const completions = response.documents as CompletedHabit[];
      setCompletedHabits(completions.map((c) => c.habit_id));
    } catch (error) {
      console.error(error);
    }
  };

  const renderRightActions = (habitId: string) => (
    <View style={styles.swipeActionRight}>
      {isHabitCompleted(habitId) ? (
        <Text style={{ color: '#fff' }}>Completed</Text>
      ) : (
        <MaterialCommunityIcons
          name='check-circle-outline'
          size={32}
          color={'#fff'}
        />
      )}
    </View>
  );

  const handleDeleteHabit = async (id: string) => {
    try {
      await databases.deleteDocument(DATABASE_ID, HABITS_ID, id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleteHabit = async (id: string) => {
    if (!user || completedHabits?.includes(id)) return;
    try {
      const currentDate = new Date().toISOString();
      await databases.createDocument(
        DATABASE_ID,
        HABITS_COMPLETIONS_ID,
        ID.unique(),
        {
          habit_id: id,
          user_id: user?.$id,
          completed_at: currentDate,
        }
      );

      const habit = habits?.find((h) => h.$id === id);
      if (!habit) return;
      await databases.updateDocument(DATABASE_ID, HABITS_ID, id, {
        last_completed: currentDate,
        streak_count: habit.streak_count + 1,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const renderLeftActions = () => (
    <View style={styles.swipeActionLeft}>
      <MaterialCommunityIcons
        name='trash-can-outline'
        size={32}
        color={'#fff'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant='headlineSmall' style={styles.title}>
          Today&apos;s Habits
        </Text>
        <Button mode='text' onPress={signOut} icon={'logout'}>
          Sign out
        </Button>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {habits?.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyStateText}>
              No habits yet.{' '}
              <Link href='/add-habit' style={styles.habitLink}>
                Add your first habit
              </Link>
            </Text>
          </View>
        ) : (
          habits?.map((habit) => {
            return (
              <Swipeable
                key={habit.$id}
                ref={(ref) => {
                  swipeableRefs.current[habit.$id] = ref;
                }}
                overshootLeft={false}
                overshootRight={false}
                renderLeftActions={renderLeftActions}
                renderRightActions={() => renderRightActions(habit.$id)}
                onSwipeableOpen={(Directions) => {
                  if (Directions === 'left') {
                    handleDeleteHabit(habit.$id);
                  } else if (Directions === 'right') {
                    handleCompleteHabit(habit.$id);
                  }
                }}
              >
                <Surface
                  elevation={0}
                  style={[
                    styles.card,
                    isHabitCompleted(habit.$id) && styles.cardCompleted,
                  ]}
                >
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{habit.title}</Text>
                    <Text style={styles.cardDescription}>
                      {' '}
                      {habit.description}
                    </Text>

                    <View style={styles.cardFooter}>
                      <View style={styles.streakBadge}>
                        <MaterialCommunityIcons
                          name='fire'
                          size={18}
                          color={'#ff9800'}
                        />
                        <Text style={styles.streakText}>
                          {habit.streak_count}{' '}
                          {habit.streak_count > 0 ? 'days' : 'day'} streak count
                        </Text>
                      </View>

                      <View style={styles.frequencyBadge}>
                        <Text style={styles.frequencyText}>
                          {habit.frequency}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Surface>
              </Swipeable>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyStateText: {
    color: '#666666',
  },
  habitLink: {
    color: '#7c4dff',
  },
  card: {
    marginBottom: 18,
    borderRadius: 18,
    backgroundColor: '#f7f2fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  cardCompleted: {
    backgroundColor: '#',
    opacity: 0.6,
    pointerEvents: 'none',
  },
  cardContent: {
    padding: 20,
    pointerEvents: 'none',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#22223b',
  },
  cardDescription: {
    fontSize: 15,
    marginBottom: 16,
    color: '#6c6c80',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff3e0',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  streakText: {
    marginLeft: 6,
    color: '#ff9800',
    fontWeight: 'bold',
    fontSize: 14,
  },
  frequencyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ede7f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  frequencyText: {
    color: '#7c4dff',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'capitalize',
  },

  swipeActionLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#e53935',
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingLeft: 16,
  },
  swipeActionRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: '#4caf50',
    borderRadius: 18,
    marginBottom: 18,
    marginTop: 2,
    paddingRight: 16,
  },
});
