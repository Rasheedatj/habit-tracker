import ExpensesItem from '@/components/expenseOutput/ExpensesItem';
import Summary from '@/components/expenseOutput/Summary';
import { getExpenses } from '@/lib/api/api';
import { commonStyles } from '@/utils/globalStyles';
import { ExpenseProps } from '@/utils/UI.types';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

const AllExpensesScreen = () => {
  // const { expenses } = useSelector((state: RootState) => state.expenses);

  // getExpenses();
  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getExpenses();
      setExpenses(data);
    }
    getData();
  }, []);

  return (
    <View style={commonStyles.rootContainer}>
      <Summary
        periodName='Total'
        amount={expenses.reduce((a, b) => a + b.amount, 0)}
      />
      <FlatList
        data={expenses}
        renderItem={(itemData) => <ExpensesItem expense={itemData.item} />}
        // keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllExpensesScreen;
