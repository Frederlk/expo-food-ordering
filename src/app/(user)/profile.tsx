import { useRouter } from 'expo-router';
import { Alert, Button, View } from 'react-native';

import { supabase } from '@lib/supabase';

const ProfileScreen = () => {
  const router = useRouter();

  const onSignOut = () => async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert(error.message);
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <View className="p-[10px]">
      <Button title="Sign out" onPress={onSignOut()} />
    </View>
  );
};

export default ProfileScreen;
