import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import Button from '@components/button';

import { useCart } from '@providers/cart-provider';

import { defaultPizzaImage } from '@constants';
import colors from '@constants/colors';

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
      <Stack.Screen
        options={{
          title: product.name,
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        alt={product.name}
        className="aspect-square w-full"
        resizeMode="contain"
      />

      <Text className="text-[20px] font-bold">{product.name}</Text>
      <Text className="text-[18px] font-medium">${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
