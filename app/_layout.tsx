import { Stack, useRouter } from 'expo-router';
import { ReactNode, useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';

function RouteGaurd({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const isAuthenticated = false;
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      router.replace('/auth');
    }
  }, [isAuthenticated, router, isMounted]);

  if (!isMounted) return null;

  return <>{children}</>;
}

export default function RootLayout() {
  return (
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
  );
}
