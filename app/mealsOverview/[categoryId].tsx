import MealItem from '@/components/MealItem';
import { MEALS } from '@/data/dummy-data';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const SingleMealOverview = () => {
  const { categoryId } = useLocalSearchParams();
  const curMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={curMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem meal={itemData.item} />}
      />
    </View>
  );
};

export default SingleMealOverview;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});
