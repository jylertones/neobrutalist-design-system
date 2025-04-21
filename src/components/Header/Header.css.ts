import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const header = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${tokens.space.md} ${tokens.space.lg}`,
    backgroundColor: themeContract.color.background,
    borderBottom: tokens.border.thick,
    borderColor: themeContract.color.border,
    boxShadow: themeContract.shadow.normal,
    position: 'relative',
    zIndex: 10,
  },
  variants: {
    size: {
      small: {
        padding: `${tokens.space.sm} ${tokens.space.md}`,
      },
      medium: {
        padding: `${tokens.space.md} ${tokens.space.lg}`,
      },
      large: {
        padding: `${tokens.space.lg} ${tokens.space.xl}`,
      },
    },
    sticky: {
      true: {
        position: 'sticky',
        top: 0,
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    sticky: false,
  },
});

export const logo = recipe({
  base: {
    fontSize: tokens.fontSize.xl,
    fontWeight: tokens.fontWeight.bold,
    color: themeContract.color.text,
    textDecoration: 'none',
  },
});

export const nav = recipe({
  base: {
    display: 'flex',
    gap: tokens.space.lg,
    alignItems: 'center',
  },
});

export const navItem = recipe({
  base: {
    textDecoration: 'none',
    color: themeContract.color.text,
    fontWeight: tokens.fontWeight.medium,
    position: 'relative',
    transition: tokens.transition.fast,
    
    ':hover': {
      color: themeContract.color.primary,
    },
    
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: 'transparent',
      transition: tokens.transition.fast,
    },
    
    ':hover:after': {
      backgroundColor: themeContract.color.primary,
    },
  },
  variants: {
    active: {
      true: {
        fontWeight: tokens.fontWeight.bold,
        
        ':after': {
          backgroundColor: themeContract.color.primary,
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export type HeaderVariants = RecipeVariants<typeof header>;