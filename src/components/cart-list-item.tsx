import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { useCart } from '@providers/cart-provider';

import { defaultPizzaImage } from '@constants';

import { CartItem } from '@types';

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateQuantity } = useCart();

  return (
    <View className="flex-1 flex-row items-center rounded-[10px] bg-white p-[5px]">
      {/* <RemoteImage
        path={cartItem.product.image}
        fallback={defaultPizzaImage}
        resizeMode="contain"
        className="aspect-squarea mr-[10px] w-[75px] align-middle"
      /> */}

      <View className="flex-1 ">
        <Text className="mb-[5px] text-[16px] font-medium">{cartItem.product.name}</Text>
        <View className="flex-row gap-[5px]">
          <Text className="font-bold text-blue-500">${cartItem.product.price.toFixed(2)}</Text>
          <Text>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View className="my-[10px] flex-row items-center gap-[10px]">
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />

        <Text className="text-[18px] font-medium">{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};

export default CartListItem;
