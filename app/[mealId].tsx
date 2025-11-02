import IconButton from '@/components/IconButton';
import List from '@/components/List';
import MealDetails from '@/components/MealDetails';
import { MEALS } from '@/data/dummy-data';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const SingleMealScreen = () => {
  const navigation = useNavigation();
  const { mealId } = useLocalSearchParams<{ mealId: string }>();
  const meal = MEALS.find((meal) => meal.id === mealId);

  const handleIconPress = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={handleIconPress}
            icon={'star'}
            size={32}
            color='red'
          />
        );
      },
    });
  }, [meal, navigation]);

  return (
    <ScrollView
      style={styles.rootContainer}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.title}>Meal Details for #{mealId}</Text>

      <MealDetails
        duration={meal?.duration}
        affordability={meal?.affordability}
        complexity={meal?.complexity}
        textStyle={{
          color: 'white',
        }}
      />
      <View style={styles.list}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleView}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>
          <List data={meal?.ingredients} />
          <View style={styles.subTitleView}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>
          <List data={meal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  subTitleView: {
    borderBottomWidth: 2,
    borderColor: '#e2b497',
    margin: 4,
    marginHorizontal: 12,
    padding: 6,
  },
  subTitle: {
    color: '#e2b497',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  list: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
