import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, Text, View } from 'react-native';

import CartListItem from '@components/cart-list-item';
import { Button } from '@components/ui/button';

import { useCart } from '@providers/cart-provider';

const CartScreen = () => {
  const { items, total, checkout } = useCart();

  return (
    <View className="flex-1 p-[10px]">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text className="mt-auto text-[20px] font-medium">Total: ${total}</Text>
      <Button onPress={checkout} label="Checkout" />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;
