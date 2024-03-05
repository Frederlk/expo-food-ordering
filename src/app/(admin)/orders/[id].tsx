import { Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';

import { cn } from '@utils';

export default function OrderDetailsScreen() {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);

  // const { data: order, isLoading, error } = useOrderDetails(id);
  // const { mutate: updateOrder } = useUpdateOrder();

  // const updateStatus = async (status: string) => {
  //   await updateOrder({
  //     id: id,
  //     updatedFields: { status },
  //   });
  //   if (order) {
  //     await notifyUserAboutOrderUpdate({ ...order, status });
  //   }
  // };

  // if (isLoading) {
  //   return <ActivityIndicator />;
  // }
  // if (error || !order) {
  //   return <Text>Failed to fetch</Text>;
  // }

  return (
    <View className="flex-1 gap-[20px] p-[10px]">
      <Stack.Screen options={{ title: `Order #${id}` }} />

      {/* <FlatList
        data={order.order_items}
        className="gap-[10px]"
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        ListHeaderComponent={() => <OrderListItem order={order} />}
        ListFooterComponent={() => (
          <>
            <Text className="font-bold">Status</Text>
            <View className="flex-row gap-[5px]">
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => updateStatus(status)}
                  className={cn(
                    'my-[10px] rounded-[5px] border border-blue-400  p-[10px]',
                    order.status === status ? 'bg-blue-400' : 'bg-transparent',
                  )}
                >
                  <Text className={cn(order.status === status ? 'text-white' : 'text-blue-400')}>
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
      /> */}
    </View>
  );
}
