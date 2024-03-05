import { ActivityIndicator, FlatList, Text } from 'react-native';

import ProductListItem from '@components/product-list-item';

import { useProductList } from '@hooks/useProducts';

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => <ProductListItem key={item.id} product={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
