import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';

import RemoteImage from '@components/remote-image';
import { Button } from '@components/ui/button';
import { Text } from '@components/ui/text';

import { useProduct } from '@hooks/useProducts';

import { useCart } from '@providers/cart-provider';

import { defaultPizzaImage, sizes } from '@constants';

import { PizzaSize } from '@customTypes';

import { cn } from '@utils';

const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
  const { data: product, error, isLoading } = useProduct(id);

  const { addItem } = useCart();

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error || !product) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <View className="flex-1 bg-white p-[10px]">
      <Stack.Screen options={{ title: product.name }} />

      <RemoteImage
        path={product?.image}
        className="aspect-square w-full"
        fallback={defaultPizzaImage}
        resizeMode="contain"
      />

      <Text>Select Text</Text>

      <View className="my-[10px] flex flex-row justify-around">
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => setSelectedSize(size)}
            className={cn(
              'flex aspect-square w-[50px] items-center justify-center rounded-full',
              size === selectedSize ? 'bg-gray-200' : 'bg-transparentgray-200',
            )}
          >
            <Text
              className={cn(
                'text-[20px] font-medium',
                size === selectedSize ? 'text-black' : 'text-gray-400',
              )}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text className="native: mt-auto text-[18px] font-bold">${product.price}</Text>
      <Button onPress={addToCart}>
        <Text>Add to cart</Text>
      </Button>
    </View>
  );
};

export default ProductDetailsScreen;
