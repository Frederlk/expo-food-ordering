import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Pressable, Text, View } from 'react-native';

import { cn } from '@utils';

type ButtonProps = {
  text: string;
} & ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, className, disabled, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(
          'my-[10px] items-center rounded-[100px] bg-blue-400 p-[15px]',
          disabled ? 'pointer-events-none bg-gray-400' : '',
          className,
        )}
        {...pressableProps}
      >
        <Text className="text-[16px] font-semibold text-white">{text}</Text>
      </Pressable>
    );
  },
);

export default Button;
