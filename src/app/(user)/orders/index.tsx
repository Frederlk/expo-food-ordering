import { ActivityIndicator, FlatList, Text } from 'react-native';

import OrderListItem from '@components/order-list-item';

export default function OrdersScreen() {
  // const { data: orders, isLoading, error } = useMyOrderList();

  // if (isLoading) {
  //   return <ActivityIndicator />;
  // }
  // if (error) {
  //   return <Text>Failed to fetch</Text>;
  // }

  return (
    <FlatList
      data={[]}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}