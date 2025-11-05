import MealItem from '@/components/MealItem';
import { MEALS } from '@/data/dummy-data';
// eslint-disable-next-line import/no-unresolved
import { RootState } from '@/store/redux/store';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const FavouriteScreen = () => {
  // const { favourites } = useFavourite();
  const { favourites } = useSelector(
    (state: RootState) => state.favouriteMeals
  );
  const favouriteMeals = MEALS.filter((meal) => favourites.includes(meal.id));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {favouriteMeals.length === 0 ? (
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}
        >
          There are no favourites yet!
        </Text>
      ) : (
        <FlatList
          data={favouriteMeals}
          renderItem={(itemData) => <MealItem meal={itemData.item} />}
          keyExtractor={(item) => item.id}
        />
      )}
      {/* <Button
        title='Open drawer'
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      /> */}
    </View>
  );
};

export default FavouriteScreen;
