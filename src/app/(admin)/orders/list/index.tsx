import { ActivityIndicator, FlatList, Text } from 'react-native';

import OrderListItem from '@components/order-list-item';

import { useInsertOrderSubscription } from '@hooks/useOrderSubscription';
import { useAdminOrderList } from '@hooks/useOrders';

export default function OrdersScreen() {
  const { data: orders, isLoading, error } = useAdminOrderList({ archived: false });

  useInsertOrderSubscription();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error || !orders) {
    return <Text>Failed to fetch</Text>;
  }

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
