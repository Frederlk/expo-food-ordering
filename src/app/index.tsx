import { Link } from 'expo-router';
import { View } from 'react-native';

import Button from '@components/button';

const index = () => {
  return (
    <View className="flex-1 justify-center p-[10px]">
      <Link href={'/(user)'} asChild>
        <Button text="User" />
      </Link>
      <Link href={'/(admin)'} asChild>
        <Button text="Admin" />
      </Link>
    </View>
  );
};

export default index;
