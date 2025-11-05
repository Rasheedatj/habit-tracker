import { ExpenseProps } from '@/utils/UI.types';
import React from 'react';
import { FlatList, View } from 'react-native';
import ExpensesItem from './ExpensesItem';
import Summary from './Summary';

const ExpenseOutput = ({ expenses }: { expenses: ExpenseProps[] }) => {
  return (
    <View>
      <Summary periodName='Last 7 days' amount={134.53} />

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

export default ExpenseOutput;
