import ExpenseOutput from '@/components/expenseOutput/ExpenseOutput';
import { expenses } from '@/data/expense';
import { commonStyles } from '@/utils/globalStyles';
import React from 'react';
import { View } from 'react-native';

const RecentScreen = () => {
  const isWithing7days = (date: Date) => {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    return date >= sevenDaysAgo && date <= today;
  };

  const recentExpenses = expenses.filter(
    (item) => isWithing7days(item.date) === true
  );

  return (
    <View style={commonStyles.rootContainer}>
      <ExpenseOutput expenses={recentExpenses} />
    </View>
  );
};

export default RecentScreen;
