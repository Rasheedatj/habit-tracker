import { appColors } from '@/utils/globalStyles';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = (props: any) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.label, props.error && styles.errorLabel]}>
        {props.label}
      </Text>
      <TextInput
        {...props}
        style={[
          styles.input,
          props.error && styles.errorInput,
          props.multiline && styles.inputMultiline,
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    margin: 4,
  },
  label: {
    fontWeight: 500,
    fontSize: 12,
    color: appColors.primary100,
    marginBottom: 4,
  },

  input: {
    padding: 6,
    borderRadius: 6,
    color: appColors.primary700,
    fontSize: 18,
    backgroundColor: appColors.primary100,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  errorLabel: {
    color: appColors.error500,
  },

  errorInput: {
    borderWidth: 1,
    borderColor: appColors.error500,
    backgroundColor: appColors.error50,
  },
});
