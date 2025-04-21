import React, { forwardRef, InputHTMLAttributes } from 'react';
import {
  input,
  InputVariants,
  inputContainer,
  label,
  errorMessage,
} from './Input.css';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputVariants {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      error,
      disabled,
      className,
      label: labelText,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div className={inputContainer()}>
        {labelText && <label className={label()}>{labelText}</label>}
        <input
          ref={ref}
          className={input({ size, error: hasError, disabled, className })}
          disabled={disabled}
          {...props}
        />
        {hasError && <div className={errorMessage()}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;