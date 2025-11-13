import ExpenseOutput from '@/components/expenseOutput/ExpenseOutput';
import { getExpenses } from '@/lib/api/api';
import { commonStyles } from '@/utils/globalStyles';
import { ExpenseProps } from '@/utils/UI.types';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const isWithin7days = (date: string) => {
  const formattedDate = new Date(date);
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  return formattedDate >= sevenDaysAgo && formattedDate <= today;
};

const RecentScreen = () => {
  const [loading, setLoading] = useState(false);
  // Local state
  // const { expenses } = useSelector((state: RootState) => state.expenses);

  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await getExpenses();
      setExpenses(data);
      setLoading(false);
    }
    getData();
  }, []);

  const recentExpenses = expenses.filter(
    (item) => isWithin7days(item.date) === true
  );

  if (loading)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='white' />
        {/* <Text style={styles.loadinText}>Loading...</Text> */}
      </View>
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

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000050',
    // opacity: 0.5,
  },

  loadinText: {
    fontSize: 24,
    color: 'white',
  },
});
