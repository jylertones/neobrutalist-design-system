import React, { forwardRef, HTMLAttributes } from 'react';
import { text, TextVariants } from './Text.css';

export interface TextProps extends HTMLAttributes<HTMLElement>, TextVariants {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children: React.ReactNode;
}

const variantMapping = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  body: 'p',
  small: 'span',
};

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as,
      variant = 'body',
      weight,
      align,
      noMargin,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || variantMapping[variant] || 'p';

    return (
      <Component
        ref={ref as any}
        className={text({ variant, weight, align, noMargin, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export default Text;