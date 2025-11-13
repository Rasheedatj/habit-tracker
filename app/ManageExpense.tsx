import Button from '@/components/Button';
import ExpenseForm from '@/components/expenseOutput/ExpenseForm';
import IconButton from '@/components/IconButton';
import {
  deleteExpense,
  getExpenses,
  postExpense,
  updateExpense,
} from '@/lib/api/api';
import { appColors } from '@/utils/globalStyles';
import { ExpenseProps } from '@/utils/UI.types';
import { useGlobalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

type valueType = 'amount' | 'title' | 'date';

const ManageExpenseScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getExpenses();
      setExpenses(data);
    }
    getData();
  }, []);
  // const { expenses } = useSelector((state: RootState) => state.expenses);

  const [isValid, setIsValid] = useState({
    amount: true,
    description: true,
    date: true,
  });
  const { mode, id } = useGlobalSearchParams<{
    mode: 'add' | 'edit';
    id?: string;
  }>();

  const isEditing = mode === 'edit';
  const toBeEdited = expenses.find((item) => item.id === id);
  const isFormValid = isValid.amount && isValid.date && isValid.description;

  // const handleSetInput = (valueKey: valueType, value: string) => {
  //   setInputValues((curInput) => {
  //     return { ...curInput, [valueKey]: value };
  //   });
  // };

  useEffect(() => {
    if (toBeEdited) {
      setAmount(toBeEdited.amount.toString());
      setDate(toBeEdited.date);
      setDescription(toBeEdited.title);
    }
  }, [toBeEdited]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Edit Expense #${id}` : 'Add New Expense',
    });
  }, [navigation, isEditing, id]);

  const closeModal = () => navigation.goBack();

  const cancelHandler = () => closeModal();

  const submitHandler = () => {
    const amountIsValid = !isNaN(+amount) && +amount > 0;
    const dateIsValid = new Date(date).toString() !== 'Invalid Date';
    const descriptionIsValid = description.trim().length > 0;

    if (amountIsValid && dateIsValid && descriptionIsValid) {
      if (isEditing) {
        updateExpense(id!, {
          amount: +amount,
          date,
          title: description,
        });
        // dispatch(
        //   updateExpense({
        //     id,
        //     newExpense: {
        //       title: description,
        //       date,
        //       amount: amount && +amount,
        //     },
        //   })
        // );
      } else {
        postExpense({
          date,
          amount: +amount,
          title: description,
        });
        // dispatch(
        //   addExpense({
        //     id: description + Math.floor(Math.random()),
        //     date,
        //     amount,
        //     title: description,
        //   })
        // );
      }
      closeModal();
    } else {
      setIsValid({
        amount: amountIsValid,
        date: dateIsValid,
        description: descriptionIsValid,
      });
    }
  };

  const deleteHandler = () => {
    deleteExpense(id!);
    // dispatch(removeExpense({ id }));
    closeModal();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        amount={amount}
        setAmount={setAmount}
        date={date}
        setDate={setDate}
        description={description}
        setDescription={setDescription}
        errors={isValid}
      />
      {isFormValid || (
        <Text style={styles.errorText}>
          Invalid input values - Please check entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name='trash'
            color={appColors.error500}
            size={24}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: appColors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: appColors.primary200,
    alignItems: 'center',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  errorText: {
    textAlign: 'center',
    color: appColors.error500,
    marginHorizontal: 8,
    marginBottom: 20,

    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
