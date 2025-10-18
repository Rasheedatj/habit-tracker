import AuthProvider, { useAuth } from '@/lib/context/auth-context';
import { Stack, useRouter, useSegments } from 'expo-router';
import { ReactNode, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function RouteGaurd({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const isAuthGroup = segments[0] === 'auth';
    if (!user && !isAuthGroup && !isLoading) {
      router.replace('/auth');
    } else if (user && isAuthGroup && !isLoading) {
      router.push('/');
    }
  }, [user, router, segments, isLoading]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <RouteGaurd>
            <Stack>
              <Stack.Screen
                name='(tabs)'
                options={{ headerShown: false }}
              ></Stack.Screen>
            </Stack>
          </RouteGaurd>
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
  );
}
