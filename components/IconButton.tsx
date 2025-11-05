import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface Props {
  onPress: () => void;
  name: any;
  color: string;
  size: number;
}

const IconButton = ({ onPress, name, color, size }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <View>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  iconContainer: {},
});
