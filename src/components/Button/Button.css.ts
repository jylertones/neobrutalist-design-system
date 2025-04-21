import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles/sprinkles.css';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${tokens.space.sm} ${tokens.space.lg}`,
    border: tokens.border.thick,
    borderColor: themeContract.color.border,
    borderRadius: tokens.borderRadius.sm,
    fontWeight: tokens.fontWeight.bold,
    cursor: 'pointer',
    background: themeContract.color.buttonBackground,
    color: themeContract.color.buttonText,
    boxShadow: themeContract.shadow.normal,
    transition: tokens.transition.fast,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    position: 'relative',
    ':hover': {
      transform: 'translate(-2px, -2px)',
      boxShadow: tokens.shadow.lg,
    },
    ':active': {
      transform: 'translate(2px, 2px)',
      boxShadow: tokens.shadow.sm,
    }
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: themeContract.color.primary,
        borderColor: themeContract.color.border,
        color: themeContract.color.buttonText,
      },
      secondary: {
        backgroundColor: themeContract.color.secondary,
        borderColor: themeContract.color.border,
        color: themeContract.color.buttonText,
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: themeContract.color.border,
        color: themeContract.color.text,
      },
    },
    size: {
      small: {
        fontSize: tokens.fontSize.sm,
        padding: `${tokens.space.xs} ${tokens.space.md}`,
      },
      medium: {
        fontSize: tokens.fontSize.md,
        padding: `${tokens.space.sm} ${tokens.space.lg}`,
      },
      large: {
        fontSize: tokens.fontSize.lg,
        padding: `${tokens.space.md} ${tokens.space.xl}`,
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        ':hover': {
          transform: 'none',
          boxShadow: themeContract.shadow.normal,
        },
        ':active': {
          transform: 'none',
          boxShadow: themeContract.shadow.normal,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    fullWidth: false,
    disabled: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;