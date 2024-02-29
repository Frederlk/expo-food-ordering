import { FlatList, View } from 'react-native';

import ProductListItem from '@components/product-list-item';

import products from '@data/products';

export default function MenuScreen() {
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
