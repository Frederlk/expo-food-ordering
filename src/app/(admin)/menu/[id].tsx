import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';

import RemoteImage from '@components/remote-image';

import { useProduct } from '@hooks/useProducts';

import { defaultPizzaImage } from '@constants';
import colors from '@constants/colors';

const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
  const { data: product, error, isLoading } = useProduct(id);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <View className="flex-1 bg-white p-[10px]">
      <Stack.Screen
        options={{
          title: product?.name,
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

      <RemoteImage
        path={product?.image}
        fallback={defaultPizzaImage}
        className="aspect-square w-full"
        resizeMode="contain"
      />

      <Text className="text-[20px] font-bold">{product?.name}</Text>
      <Text className="text-[18px] font-medium">${product?.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
