import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@providers/auth-provider';

export default function AuthLayout() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={'/'} />;
  }

  return <Stack />;
}
