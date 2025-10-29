import AuthProvider, { useAuth } from '@/lib/context/auth-context';
import { Stack, useRouter, useSegments } from 'expo-router';
import { ReactNode, useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <RouteGaurd>
                <StatusBar barStyle={'dark-content'} backgroundColor={'red'} />
                <Stack>
                  <Stack.Screen
                    name='(tabs)'
                    options={{ headerShown: false }}
                  ></Stack.Screen>
                  <Stack.Screen
                    name='auth'
                    options={{ headerShown: false }}
                  ></Stack.Screen>
                </Stack>
              </RouteGaurd>
            </SafeAreaView>
          </SafeAreaProvider>
        </PaperProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
