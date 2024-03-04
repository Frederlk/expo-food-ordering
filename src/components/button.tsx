import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Pressable, Text, View } from 'react-native';

type ButtonProps = {
  text: string;
} & ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(({ text, ...pressableProps }, ref) => {
  return (
    <Pressable
      ref={ref}
      {...pressableProps}
      className="my-[10px] items-center rounded-[100px] bg-blue-400 p-[15px]"
    >
      <Text className="text-[16px] font-semibold text-white">{text}</Text>
    </Pressable>
  );
});

export default Button;
