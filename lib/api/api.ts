import { ExpenseProps } from '@/utils/UI.types';
import api from './axios';

export const postExpense = async (newExpense: ExpenseProps) => {
  try {
    const res = await api.post('/expenses.json', newExpense);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getExpenses = async () => {
  const res = await api.get('/expenses.json');
  const expenses = [];

  for (const key in res.data) {
    const expenseObj: ExpenseProps = {
      id: key,
      amount: res.data[key].amount,
      date: res.data[key].date,
      title: res.data[key].title,
    };

    expenses.push(expenseObj);
  }
  return expenses;
};

export const deleteExpense = async (id: string) => {
  try {
    return await api.delete(`/expenses/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = async (id: string, newExpense: ExpenseProps) => {
  try {
    return await api.put(`/expenses/${id}.json`, newExpense);
  } catch (error) {
    console.log(error);
  }
};
