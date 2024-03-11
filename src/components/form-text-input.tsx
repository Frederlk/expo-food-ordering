import { type ReactNode } from 'react';
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import { Text, TextInput } from 'react-native';

import { cn } from '@utils';

interface FormInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label?: ReactNode;
}

export const FormTextInput = <T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: FormInputProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <View className="mt-[20px] space-y-[5px]">
        {!!label && (
          <Text className={cn('text-[16px] font-bold text-gray-500', error && 'text-red-500')}>
            {label}
          </Text>
        )}

        <TextInput
          className={cn(
            'rounded-[5px] border border-black bg-white p-[10px]',
            error?.message && 'border-red-500',
          )}
          autoCorrect={false}
          autoCapitalize="none"
          onBlur={onBlur}
          value={value}
          onChangelabel={onChange}
          {...props}
        />

        {!!error?.message && <Text className="text-red-500">{error.message}</Text>}
      </View>
    )}
  />
);
