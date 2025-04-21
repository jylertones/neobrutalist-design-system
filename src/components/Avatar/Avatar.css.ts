import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const avatar = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: themeContract.color.muted,
    color: themeContract.color.text,
    fontWeight: tokens.fontWeight.bold,
    textTransform: 'uppercase',
    border: tokens.border.thick,
    borderColor: themeContract.color.border,
    boxShadow: tokens.shadow.sm,
  },
  variants: {
    size: {
      small: {
        width: '32px',
        height: '32px',
        fontSize: tokens.fontSize.xs,
      },
      medium: {
        width: '48px',
        height: '48px',
        fontSize: tokens.fontSize.sm,
      },
      large: {
        width: '64px',
        height: '64px',
        fontSize: tokens.fontSize.md,
      },
      xl: {
        width: '96px',
        height: '96px',
        fontSize: tokens.fontSize.lg,
      },
    },
    shape: {
      square: {
        borderRadius: tokens.borderRadius.sm,
      },
      rounded: {
        borderRadius: tokens.borderRadius.lg,
      },
      circle: {
        borderRadius: '50%',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    shape: 'circle',
  },
});

export const avatarImage = recipe({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export type AvatarVariants = RecipeVariants<typeof avatar>;