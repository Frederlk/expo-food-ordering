import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Stack } from 'expo-router';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { z } from 'zod';

import Button from '@components/button';
import { FormTextInput } from '@components/form-text-input';

import { FIELD_REQUIRED_STR } from '@constants';
import { passwordRegex } from '@constants/regex';

import { getReadableValidationErrorMessage } from '@utils/forms';

const signUpFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(1, { message: 'Must have at least 1 character' })
    .email({
      message: 'Must be a valid email',
    }),

  password: z
    .string({
      invalid_type_error: 'Password must be a string',
      required_error: FIELD_REQUIRED_STR,
    })
    .min(1, { message: 'Must have at least 1 character' })
    .regex(passwordRegex, {
      message:
        'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    }),
});

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

const SignUpScreen = () => {
  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignUpFormSchema> = (data) => {
    // const { error } = await supabase.auth.signUp({ email, password });

    // if (error) Alert.alert(error.message);
    console.warn(JSON.stringify(data));
  };

  const onError: SubmitErrorHandler<SignUpFormSchema> = (errors, e) => {
    console.log(JSON.stringify(errors));
    Alert.alert('Warning', getReadableValidationErrorMessage(errors));
  };

  return (
    <View className="flex-1 justify-center p-[20px]">
      <Stack.Screen options={{ title: 'Sign up' }} />

      <FormTextInput control={control} label="Email" name="email" placeholder="jon@gmail.com" />

      <FormTextInput
        control={control}
        label="Password"
        name="password"
        placeholder=""
        secureTextEntry
      />

      <Button
        disabled={!(isValid && isDirty) || isSubmitting}
        onPress={handleSubmit(onSubmit, onError)}
        text={isSubmitting ? 'Creating account...' : 'Create account'}
      />

      <Link href="/sign-in" className="my-[10px] self-center font-bold text-blue-400">
        Sign in
      </Link>
    </View>
  );
};

export default SignUpScreen;
