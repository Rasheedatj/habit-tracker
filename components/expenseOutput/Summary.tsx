import { appColors } from '@/utils/globalStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SumaaryProps {
  periodName: string;
  amount: number;
}

const Summary = ({ periodName, amount }: SumaaryProps) => {
  return (
    <View style={styles.container}>
      <Text>{periodName}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 13,
    backgroundColor: appColors.primary100,
    borderRadius: 10,
  },

  amount: {
    fontSize: 16,
    fontWeight: 500,
  },
});
