import { Meal } from '@/utils/UI.types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({ meal }: { meal: Meal }) => {
  const router = useRouter();
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: 'red' }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() =>
          router.push({
            pathname: '/[mealId]',
            params: {
              mealId: meal.id,
            },
          })
        }
      >
        <View style={styles.innerView}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>

          <MealDetails
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4,
  },
  innerView: {
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 8,
    // color: 'white',
  },

  pressed: {
    opacity: 0.7,
  },
});
