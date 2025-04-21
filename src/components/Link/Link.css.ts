import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const link = recipe({
  base: {
    position: 'relative',
    color: themeContract.color.primary,
    textDecoration: 'none',
    fontWeight: tokens.fontWeight.medium,
    transition: tokens.transition.fast,
    display: 'inline-block',
    cursor: 'pointer',
    borderBottom: '3px solid',
    borderColor: themeContract.color.primary,
    
    ':hover': {
      transform: 'translate(-2px, -2px)',
      boxShadow: tokens.shadow.sm,
      color: themeContract.color.secondary,
      borderColor: themeContract.color.secondary,
    },
    
    ':active': {
      transform: 'translate(1px, 1px)',
      boxShadow: 'none',
    },
  },
  variants: {
    variant: {
      default: {},
      underlined: {
        borderBottom: '3px solid',
        paddingBottom: tokens.space.xs,
      },
      button: {
        padding: `${tokens.space.xs} ${tokens.space.md}`,
        border: tokens.border.thick,
        borderColor: themeContract.color.primary,
        borderRadius: tokens.borderRadius.sm,
        textAlign: 'center',
        boxShadow: tokens.shadow.sm,
        
        ':hover': {
          boxShadow: tokens.shadow.md,
        },
      },
    },
    size: {
      small: { fontSize: tokens.fontSize.sm },
      medium: { fontSize: tokens.fontSize.md },
      large: { fontSize: tokens.fontSize.lg },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
    disabled: false,
  },
});

export type LinkVariants = RecipeVariants<typeof link>;