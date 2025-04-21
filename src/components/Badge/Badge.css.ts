import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const badge = recipe({
  base: {
    display: 'inline-block',
    padding: `${tokens.space.xs} ${tokens.space.sm}`,
    fontSize: tokens.fontSize.sm,
    fontWeight: tokens.fontWeight.bold,
    borderRadius: tokens.borderRadius.sm,
    border: tokens.border.thin,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: themeContract.color.primary,
        color: themeContract.color.buttonText,
        borderColor: themeContract.color.border,
      },
      secondary: {
        backgroundColor: themeContract.color.secondary,
        color: themeContract.color.buttonText,
        borderColor: themeContract.color.border,
      },
      outline: {
        backgroundColor: 'transparent',
        color: themeContract.color.text,
        borderColor: themeContract.color.border,
      },
      success: {
        backgroundColor: themeContract.color.success,
        color: themeContract.color.buttonText,
        borderColor: themeContract.color.border,
      },
      error: {
        backgroundColor: themeContract.color.error,
        color: themeContract.color.buttonText,
        borderColor: themeContract.color.border,
      },
    },
    size: {
      small: {
        fontSize: tokens.fontSize.xs,
        padding: `${tokens.space.xs} ${tokens.space.xs}`,
      },
      medium: {
        fontSize: tokens.fontSize.sm,
        padding: `${tokens.space.xs} ${tokens.space.sm}`,
      },
      large: {
        fontSize: tokens.fontSize.md,
        padding: `${tokens.space.sm} ${tokens.space.md}`,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;