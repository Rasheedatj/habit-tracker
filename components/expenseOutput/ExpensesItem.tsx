import { appColors } from '@/utils/globalStyles';
import { ExpenseProps } from '@/utils/UI.types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ExpensesItem = ({ expense }: { expense: ExpenseProps }) => {
  const router = useRouter();
  const expensePressHandler = () => {
    router.push({
      pathname: '/ManageExpense',
      params: {
        mode: 'edit',
        id: expense.id,
      },
    });
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => [styles.main, pressed && styles.pressed]}
    >
      <View>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.date}>{new Date(expense.date).toDateString()}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>${expense.amount}</Text>
      </View>
    </Pressable>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: appColors.primary500,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.85,
  },

  title: {
    color: appColors.primary50,
    fontWeight: 600,
    fontSize: 15,
    marginBottom: 6,
  },

  date: {
    color: appColors.primary50,
  },

  price: {
    height: 50,
    width: 70,
    borderRadius: 4,
    backgroundColor: appColors.primary50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceText: {
    fontWeight: 600,
  },
});
