import { createContext, forwardRef, useContext } from 'react';
import { Text as RNText } from 'react-native';

import * as Slot from '@components/primitives/slot';
import { SlottableTextProps, TextRef } from '@components/primitives/types';

import { cn } from '@utils';

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn('text-foreground web:select-text text-base', textClass, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = 'Text';

export { Text, TextClassContext };
