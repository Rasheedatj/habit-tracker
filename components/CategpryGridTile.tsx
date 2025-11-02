import { useRouter } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  color: string;
  title: string;
  id: string;
}

const CategpryGridTile = ({ color, title, id }: Props) => {
  const router = useRouter();
  return (
    <View style={[styles.outerView]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() =>
          router.push({
            pathname: '/mealsOverview/[categoryId]',
            params: {
              categoryId: id,
            },
          })
        }
      >
        <View style={[styles.innerView, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategpryGridTile;

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
  },
});
