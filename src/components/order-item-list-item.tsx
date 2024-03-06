import { Text, View } from 'react-native';

import { defaultPizzaImage } from '@constants';

import { Tables } from '@customTypes';

import RemoteImage from './remote-image';

type OrderItemListItemProps = {
  item: { products: Tables<'products'> | null } & Tables<'order_items'>;
};

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {
  return (
    <View className="flex-1 flex-row items-center rounded-[10px] bg-white p-[5px]">
      <RemoteImage
        path={item.products?.image || undefined}
        fallback={defaultPizzaImage}
        className="mr-[10px] aspect-square w-[75px] self-center"
        resizeMode="contain"
      />

      <View className="flex-1">
        <Text className="font-500 mb-[5px] text-[16px]">{item.products?.name}</Text>
        <View className="flex-row gap-[5px]">
          <Text className="font-bold text-blue-400">${item.products?.price.toFixed(2)}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      </View>
      <View className="my-[10px] flex-row items-center gap-[10px]">
        <Text className="text-[18px] font-medium">{item.quantity}</Text>
      </View>
    </View>
  );
};

export default OrderItemListItem;
