import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  overlay,
  content,
  closeButton,
  title,
  description,
  ModalVariants,
} from './Modal.css';

export interface ModalProps extends DialogPrimitive.DialogProps, ModalVariants {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  showCloseButton?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      trigger,
      title: titleText,
      description: descriptionText,
      size,
      showCloseButton = true,
      open,
      defaultOpen,
      onOpenChange,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <DialogPrimitive.Root 
        open={open} 
        defaultOpen={defaultOpen} 
        onOpenChange={onOpenChange}
      >
        {trigger && (
          <DialogPrimitive.Trigger asChild>
            {trigger}
          </DialogPrimitive.Trigger>
        )}
        
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className={overlay} />
          <DialogPrimitive.Content 
            ref={forwardedRef} 
            className={content({ size })}
            {...props}
          >
            {showCloseButton && (
              <DialogPrimitive.Close className={closeButton}>
                ✕
              </DialogPrimitive.Close>
            )}
            
            {titleText && (
              <DialogPrimitive.Title className={title}>
                {titleText}
              </DialogPrimitive.Title>
            )}
            
            {descriptionText && (
              <DialogPrimitive.Description className={description}>
                {descriptionText}
              </DialogPrimitive.Description>
            )}
            
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;