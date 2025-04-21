import React, { forwardRef, HTMLAttributes, useState } from 'react';
import { avatar, avatarImage, AvatarVariants } from './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement>, AvatarVariants {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      fallback,
      size,
      shape,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    // Generate initials from the fallback text
    const getInitials = () => {
      if (!fallback) return '';
      
      return fallback
        .split(' ')
        .map(part => part[0])
        .join('')
        .substring(0, 2);
    };

    const handleImageError = () => {
      setImageError(true);
    };

    const showFallback = !src || imageError;

    return (
      <div
        ref={ref}
        className={avatar({ size, shape, className })}
        {...props}
      >
        {!showFallback ? (
          <img
            src={src}
            alt={alt || 'Avatar'}
            className={avatarImage()}
            onError={handleImageError}
          />
        ) : (
          getInitials()
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;