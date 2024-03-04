import { zodResolver } from '@hookform/resolvers/zod';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Alert, Image, Text, View } from 'react-native';
import { z } from 'zod';

import Button from '@components/button';
import { FormTextInput } from '@components/form-text-input';

import { defaultPizzaImage } from '@constants';

import { getReadableValidationErrorMessage } from '@utils/forms';

const FIELD_REQUIRED_STR = 'This field is required';

export const signUpFormSchema = z.object({
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

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

const CreateProductScreen = () => {
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
    defaultValues: {
      image: defaultPizzaImage,
    },
  });

  const {
    control,
    setValue,
    handleSubmit,
    getValues,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignUpFormSchema> = (data) => {
    if (isUpdating) {
      // update
    } else {
      // create
    }

    console.warn(JSON.stringify(data));
  };

  const onError: SubmitErrorHandler<SignUpFormSchema> = (errors, e) => {
    console.log(JSON.stringify(errors));
    Alert.alert('Warning', getReadableValidationErrorMessage(errors));
  };

  const onDelete = () => {
    console.warn('DELETE');
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
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
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
