import { Link, Redirect, useRouter } from 'expo-router';
import { Alert, View } from 'react-native';
import { ActivityIndicator } from 'react-native';

import Button from '@components/button';

import { useAuth } from '@providers/auth-provider';

import { supabase } from '@lib/supabase';

const index = () => {
  const { session, loading, isAdmin } = useAuth();
  const router = useRouter();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={'/sign-in'} />;
  }

  if (!isAdmin) {
    return <Redirect href={'/(user)'} />;
  }

  const onSignOut = () => async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert(error.message);
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <View className="flex-1 justify-center p-[10px]">
      <Link href={'/(user)'} asChild>
        <Button text="User" />
      </Link>
      <Link href={'/(admin)'} asChild>
        <Button text="Admin" />
      </Link>

      <Button onPress={onSignOut()} text="Sign out" />
    </View>
  );
};

export default index;
