import { appColors } from '@/utils/globalStyles';
import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Button = ({
  children,
  onPress,
  mode,
  style,
}: {
  children: ReactNode;
  onPress?: () => void;
  mode?: string;
  style?: any;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && mode !== 'flat' && styles.pressed,
        pressed && mode === 'flat' && styles.flatPressed,
        style,
      ]}
    >
      <View style={[styles.innerContainer, mode === 'flat' && styles.flat]}>
        <Text style={[styles.text, mode === 'flat' && styles.flatText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: appColors.primary500,
    padding: 8,
    borderRadius: 4,
  },

  flat: {
    backgroundColor: 'transparent',
  },

  flatText: {
    color: appColors.primary200,
  },

  pressed: {
    opacity: 0.75,
  },

  flatPressed: {
    backgroundColor: appColors.primary100,
    borderRadius: 4,
  },

  text: {
    textAlign: 'center',
    color: 'white',
  },
});
