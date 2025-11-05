import ExpenseOutput from '@/components/expenseOutput/ExpenseOutput';
import { RootState } from '@/store/redux/store';
import { commonStyles } from '@/utils/globalStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const RecentScreen = () => {
  const { expenses } = useSelector((state: RootState) => state.expenses);
  const isWithin7days = (date: string) => {
    const formattedDate = new Date(date);
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    return formattedDate >= sevenDaysAgo && formattedDate <= today;
  };

  console.log(isWithin7days('2025-10-31'));

  const recentExpenses = expenses.filter(
    (item) => isWithin7days(item.date) === true
  );

  return (
    <View style={commonStyles.rootContainer}>
      {expenses.length === 0 ? (
        <Text style={styles.empty}>No expenses yet!</Text>
      ) : (
        <ExpenseOutput expenses={recentExpenses} />
      )}
    </View>
  );
};

export default RecentScreen;

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    color: 'white',
    margin: 'auto',
    marginTop: 30,
    fontSize: 16,
    fontWeight: 500,
  },
});
