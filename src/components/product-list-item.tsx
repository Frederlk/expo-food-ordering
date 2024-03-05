import { Link, useSegments } from 'expo-router';
import { Image, Pressable, Text } from 'react-native';

import { defaultPizzaImage } from '@src/constants';
import { Product } from '@src/types';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable className="max-w-[50%] flex-1 rounded-[10px] bg-white p-[10px]">
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          alt={product.name}
          resizeMode="contain"
          className="aspect-square w-full"
        />
        <Text className="my-[10px] text-[18px] font-semibold">{product.name}</Text>
        <Text className="font-bold text-blue-400">${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
