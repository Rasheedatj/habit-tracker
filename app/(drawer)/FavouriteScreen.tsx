import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Button, Text, View } from 'react-native';

const FavouriteScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to favourites page</Text>
      <Button
        title='Open drawer'
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};

export default FavouriteScreen;
