import { useAuth } from '@/lib/context/auth-context';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.view}>
      <Text>Hello world from Rasheedat&apos;s app updated</Text>
      <Button mode='text' onPress={signOut} icon={'logout'}>
        Sign out
      </Button>
      {/* <Link href={'/login'} style={styles.login}>
        Login
      </Link> */}
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
