import React, { forwardRef, HTMLAttributes } from 'react';
import { badge, BadgeVariants } from './Badge.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeVariants {
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant,
      size,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={badge({ variant, size, className })}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;