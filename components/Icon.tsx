import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

const Icon = ({ children }: { children: ReactNode }) => {
  return <View style={styles.iconContainer}>{children}</View>;
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ebe6e6',
    borderRadius: 22.5,
  },
});
