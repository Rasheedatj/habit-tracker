import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Hello world from Rasheedat&apos;s app updated</Text>
      <Link href={'/login'} style={styles.login}>
        Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    borderRadius: 8,
    backgroundColor: 'coral',
    padding: 10,
    marginTop: 10,
  },
});
