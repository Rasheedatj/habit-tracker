import AuthProvider, { useAuth } from '@/lib/context/auth-context';
import { Stack, useRouter, useSegments } from 'expo-router';
import { ReactNode, useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';

function RouteGaurd({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const isAuthGroup = segments[0] === 'auth';
    if (isMounted && !user && !isAuthGroup && !isLoading) {
      router.replace('/auth');
    } else if (user && isAuthGroup && !isLoading) {
      router.push('/');
    }
  }, [user, router, isMounted, segments, isLoading]);

  if (!isMounted) return null;

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <RouteGaurd>
          <Stack>
            <Stack.Screen
              name='(tabs)'
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack>
        </RouteGaurd>
      </PaperProvider>
    </AuthProvider>
  );
}
