import { expenses } from '@/data/expense';
import { ExpenseProps } from '@/utils/UI.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { expenses: ExpenseProps[] } = {
  expenses,
};

const expenseSlice = createSlice({
  name: 'Expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateExpense: (state, action) => {
      state.expenses = state.expenses.map((exp) =>
        exp.id === action.payload.id
          ? { ...exp, ...action.payload.newExpense }
          : exp
      );
    },
  },
});

export default expenseSlice.reducer;

export const { removeExpense, addExpense, updateExpense } =
  expenseSlice.actions;
