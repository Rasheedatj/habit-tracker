import ExpensesItem from '@/components/expenseOutput/ExpensesItem';
import Summary from '@/components/expenseOutput/Summary';
import { RootState } from '@/store/redux/store';
import { commonStyles } from '@/utils/globalStyles';
import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

const AllExpensesScreen = () => {
  const { expenses } = useSelector((state: RootState) => state.expenses);

  return (
    <View style={commonStyles.rootContainer}>
      <Summary
        periodName='Total'
        amount={expenses.reduce((a, b) => a + b.amount, 0)}
      />
      <FlatList
        data={expenses}
        renderItem={(itemData) => <ExpensesItem expense={itemData.item} />}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllExpensesScreen;
