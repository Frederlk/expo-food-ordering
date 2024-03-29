import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Stack } from 'expo-router';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { z } from 'zod';

import { FormTextInput } from '@components/form-text-input';
import { Button } from '@components/ui/button';

import { FIELD_REQUIRED_STR } from '@constants';
import { passwordRegex } from '@constants/regex';

import { getReadableValidationErrorMessage } from '@utils/forms';

import { supabase } from '@lib/supabase';

const signInFormSchema = z.object({
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

type SignInFormSchema = z.infer<typeof signInFormSchema>;

const SignInScreen = () => {
  const methods = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    mode: 'all',
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignInFormSchema> = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
  };

  const onError: SubmitErrorHandler<SignInFormSchema> = (errors, e) => {
    console.log(JSON.stringify(errors));
    Alert.alert('Warning', getReadableValidationErrorMessage(errors));
  };

  return (
    <View className="flex-1 justify-center p-[20px]">
      <Stack.Screen options={{ title: 'Sign in' }} />

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
        label={isSubmitting ? 'Signing in...' : 'Sign in'}
      />
      <Link href="/sign-up" className="my-[10px] self-center font-bold text-blue-400">
        Create an account
      </Link>
    </View>
  );
};

export default SignInScreen;
