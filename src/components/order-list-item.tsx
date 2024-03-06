import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link, useSegments } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Tables } from '../types';

dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Tables<'orders'>;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable className="flex-row items-center justify-between rounded-[10px] bg-white p-[10px]">
        <View>
          <Text className="my-[5px] font-bold">Order #{order.id}</Text>
          <Text className="text-gray-400">{dayjs(order.created_at).fromNow()}</Text>
        </View>

        <Text className="font-medium">{order.status}</Text>
      </Pressable>
    </Link>
  );
};

export default OrderListItem;
