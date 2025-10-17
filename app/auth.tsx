import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleAuth = async () => {
    if (!email && !password) {
      return setError('Email and password are required');
    }

    if (password.length < 6) {
      return setError('Password must not be less than 6 characters');
    }

    setError('');
  };

  const handleSwitch = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title} variant='headlineMedium'>
          {isSignUp ? 'Create an account' : 'Welcome back!'}
        </Text>
        <TextInput
          style={styles.input}
          label='Email'
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='example@gmail.com'
          mode='outlined'
          onChangeText={setEmail}
        />
         
        <TextInput
          style={styles.input}
          label='Password'
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='******'
          mode='outlined'
          onChangeText={setPassword}
        />
        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}
        <Button onPress={handleAuth} mode='contained' style={styles.button}>
          {isSignUp ? 'Sign up' : 'Sign In'}
        </Button>
        <Button mode='text' onPress={handleSwitch} style={styles.switchButton}>
          {isSignUp
            ? 'Already have an account? Sign In'
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  },
  switchButton: {
    marginTop: 24,
  },
});
