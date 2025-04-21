import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const inputContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export const label = recipe({
  base: {
    marginBottom: tokens.space.xs,
    fontWeight: tokens.fontWeight.bold,
    color: themeContract.color.text,
  },
});

export const input = recipe({
  base: {
    width: '100%',
    padding: `${tokens.space.sm} ${tokens.space.md}`,
    fontSize: tokens.fontSize.md,
    color: themeContract.color.text,
    backgroundColor: themeContract.color.inputBackground,
    border: tokens.border.thick,
    borderColor: themeContract.color.inputBorder,
    borderRadius: tokens.borderRadius.sm,
    outline: 'none',
    boxShadow: tokens.shadow.sm,
    transition: tokens.transition.fast,
    
    '::placeholder': {
      color: themeContract.color.muted,
    },
    
    ':focus': {
      boxShadow: tokens.shadow.md,
      transform: 'translate(-2px, -2px)',
    },
  },
  variants: {
    size: {
      small: {
        fontSize: tokens.fontSize.sm,
        padding: `${tokens.space.xs} ${tokens.space.sm}`,
      },
      medium: {
        fontSize: tokens.fontSize.md,
        padding: `${tokens.space.sm} ${tokens.space.md}`,
      },
      large: {
        fontSize: tokens.fontSize.lg,
        padding: `${tokens.space.md} ${tokens.space.lg}`,
      },
    },
    error: {
      true: {
        borderColor: themeContract.color.error,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: themeContract.color.muted,
        ':focus': {
          boxShadow: tokens.shadow.sm,
          transform: 'none',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    error: false,
    disabled: false,
  },
});

export const errorMessage = recipe({
  base: {
    color: themeContract.color.error,
    fontSize: tokens.fontSize.sm,
    marginTop: tokens.space.xs,
  },
});

export type InputVariants = RecipeVariants<typeof input>;