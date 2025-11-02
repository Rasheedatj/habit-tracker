import { Link } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>Welcome to this menu app</Text>
      <Link href={'/categoriesScreen'} asChild>
        <Button title='Go to categories' />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
});
