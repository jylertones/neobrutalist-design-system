import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const card = recipe({
  base: {
    background: themeContract.color.cardBackground,
    border: tokens.border.thick,
    borderColor: themeContract.color.border,
    borderRadius: tokens.borderRadius.sm,
    padding: tokens.space.lg,
    boxShadow: themeContract.shadow.normal,
    transition: tokens.transition.normal,
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {
    variant: {
      default: {},
      elevated: {
        transform: 'translate(-4px, -4px)',
        boxShadow: tokens.shadow.lg,
      },
      outlined: {
        boxShadow: 'none',
      },
    },
    interactive: {
      true: {
        cursor: 'pointer',
        ':hover': {
          transform: 'translate(-4px, -4px)',
          boxShadow: tokens.shadow.lg,
        },
        ':active': {
          transform: 'translate(2px, 2px)',
          boxShadow: tokens.shadow.sm,
        },
      },
    },
    padding: {
      none: { padding: 0 },
      small: { padding: tokens.space.md },
      medium: { padding: tokens.space.lg },
      large: { padding: tokens.space.xl },
    },
  },
  defaultVariants: {
    variant: 'default',
    interactive: false,
    padding: 'medium',
  },
});

export type CardVariants = RecipeVariants<typeof card>;