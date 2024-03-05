import { zodResolver } from '@hookform/resolvers/zod';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Alert, Image, Text, View } from 'react-native';
import { z } from 'zod';

import Button from '@components/button';
import { FormTextInput } from '@components/form-text-input';

import {
  useDeleteProduct,
  useInsertProduct,
  useProduct,
  useUpdateProduct,
} from '@hooks/useProducts';

import { FIELD_REQUIRED_STR, defaultPizzaImage } from '@constants';

import { getReadableValidationErrorMessage } from '@utils/forms';

const createProductFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters')
    .trim(),

  price: z
    .string({
      invalid_type_error: 'Price must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(1, 'Minimum 1 character'),

  image: z.string({
    invalid_type_error: 'Image URI must be a string',
    required_error: FIELD_REQUIRED_STR,
  }),
});

type CreateProductFormSchema = z.infer<typeof createProductFormSchema>;

const CreateProductScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === 'string' ? idString : idString?.[0]);
  const isUpdating = !!id;

  const { mutate: insertProduct } = useInsertProduct();
  const { mutate: updateProduct } = useUpdateProduct();
  const { data: updatingProduct } = useProduct(id);
  const { mutate: deleteProduct } = useDeleteProduct();

  const router = useRouter();

  const methods = useForm<CreateProductFormSchema>({
    resolver: zodResolver(createProductFormSchema),
    mode: 'onBlur',
    defaultValues: {
      image: updatingProduct?.image || defaultPizzaImage,
      price: isUpdating ? updatingProduct?.price.toString() : '',
      name: isUpdating ? updatingProduct?.name : '',
    },
  });

  const {
    control,
    setValue,
    handleSubmit,
    getValues,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;

  const onDelete = () => {
    deleteProduct(id, {
      onSuccess: () => {
        router.push('/(admin)/menu');
      },
    });
  };

  const confirmDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete this product', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: onDelete,
      },
    ]);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    if (!result.canceled) {
      setValue('image', result.assets[0].uri, {
        shouldValidate: true,
      });
    }
  };
  const image = getValues('image');

  const onSubmit: SubmitHandler<CreateProductFormSchema> = async ({ image, name, price }) => {
    if (isUpdating) {
      updateProduct(
        { id, name, price: parseFloat(price), image },
        {
          onSuccess: () => {
            router.back();
          },
        },
      );
    } else {
      insertProduct(
        { name, price: parseFloat(price), image },
        {
          onSuccess: () => {
            router.back();
          },
        },
      );
    }
  };

  const onError: SubmitErrorHandler<CreateProductFormSchema> = (errors, e) => {
    console.log(JSON.stringify(errors));
    Alert.alert('Warning', getReadableValidationErrorMessage(errors));
  };

  return (
    <FormProvider {...methods}>
      <View className="p-[10px]">
        <Stack.Screen options={{ title: isUpdating ? 'Update Product' : 'Create Product' }} />

        <Image source={{ uri: image }} className="aspect-square w-[50%] self-center" />
        <Text onPress={pickImage} className="self-center font-bold text-blue-400">
          Select Image
        </Text>

        <FormTextInput control={control} name="name" label="Name" placeholder="Name" />

        <FormTextInput
          control={control}
          name="price"
          label="Price ($)"
          placeholder="9.99"
          keyboardType="numeric"
        />

        <Button
          text={isUpdating ? 'Update' : 'Create'}
          disabled={!(isValid && isDirty) || isSubmitting}
          className="mt-[20px]"
          onPress={handleSubmit(onSubmit, onError)}
        />
        {isUpdating && (
          <Button
            text="Delete"
            disabled={isSubmitting}
            className="mt-[20px]"
            onPress={confirmDelete}
          />
        )}
      </View>
    </FormProvider>
  );
};

export default CreateProductScreen;
