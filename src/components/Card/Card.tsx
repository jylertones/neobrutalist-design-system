import React, { forwardRef, HTMLAttributes } from 'react';
import { card, CardVariants } from './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement>, CardVariants {
  children: React.ReactNode;
  as?: 'div' | 'article' | 'section';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      as = 'div',
      variant,
      interactive,
      padding,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        className={card({ variant, interactive, padding, className })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export default Card;