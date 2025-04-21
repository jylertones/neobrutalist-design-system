import React, { forwardRef, AnchorHTMLAttributes } from 'react';
import { link, LinkVariants } from './Link.css';

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    LinkVariants {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      href,
      variant,
      size,
      disabled,
      external,
      className,
      ...props
    },
    ref
  ) => {
    const externalProps = external
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

    return (
      <a
        ref={ref}
        href={href}
        className={link({ variant, size, disabled, className })}
        {...externalProps}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';

export default Link;