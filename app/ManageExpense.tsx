import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import { appColors } from '@/utils/globalStyles';
import { useGlobalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const ManageExpenseScreen = () => {
  const navigation = useNavigation();
  const { mode, id } = useGlobalSearchParams<{
    mode: 'add' | 'edit';
    id?: string;
  }>();

  const isEditing = mode === 'edit';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Edit Expense #${id}` : 'Add New Expense',
    });
  }, [navigation, isEditing, id]);

  const closeModal = () => {
    navigation.goBack();
  };

  const cancelHandler = () => {
    closeModal();
  };
  const confirmHandler = () => {
    closeModal();
  };
  const deleteHandler = () => {
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
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
});
