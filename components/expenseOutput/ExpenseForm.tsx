import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../UI/Input';

interface Props {
  amount: string;
  date: string;
  description: string;
  setAmount: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  errors: any;
}

const ExpenseForm = ({
  amount,
  date,
  description,
  setAmount,
  setDate,
  setDescription,
  errors,
}: Props) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}> Your Expense</Text>
      <View style={styles.flexInput}>
        <Input
          label='Amount'
          placeholder='Enter amount'
          keyboardType='decimal-pad'
          value={amount}
          onChangeText={setAmount}
          style={styles.input}
          error={!errors.amount}
        />
        <Input
          label='Date'
          placeholder='YYYY-MM-DD'
          maxLength={10}
          value={date}
          onChangeText={setDate}
          style={styles.input}
          error={!errors.date}
        />
      </View>

      <Input
        label='Description'
        placeholder='Enter description'
        value={description}
        onChangeText={setDescription}
        multiline={true}
        error={!errors.description}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 30,
    fontFamily: 'Roboto_500Medium',
  },

  form: {
    marginTop: 40,
    marginBottom: 20,
  },

  flexInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
  },
});
