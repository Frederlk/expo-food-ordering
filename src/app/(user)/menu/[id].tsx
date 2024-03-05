import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import Button from '@components/button';

import { useCart } from '@providers/cart-provider';

import { defaultPizzaImage } from '@constants';

import { PizzaSize } from '@types';

import { cn } from '@utils';

import products from '@data/products';

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  // const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
  const product = products.find((p) => p.id.toString() === id);

  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

  const router = useRouter();

  const addToCart = () => {
    if (!product) {
      return;
    } else {
      addItem(product, selectedSize);
      router.push('/cart');
    }
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View className="flex-1 bg-white p-[10px]">
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        alt={product.name}
        className="aspect-square w-full"
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

      <Text className="mt-auto text-[18px] font-bold">${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetailsScreen;