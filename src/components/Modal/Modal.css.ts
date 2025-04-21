import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: tokens.space.md,
  zIndex: 50,
});

export const content = recipe({
  base: {
    backgroundColor: themeContract.color.background,
    border: tokens.border.thick,
    borderColor: themeContract.color.border,
    borderRadius: tokens.borderRadius.md,
    boxShadow: themeContract.shadow.normal,
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '85vh',
    overflow: 'auto',
    padding: tokens.space.lg,
    transform: 'translate(4px, 4px)',
    transition: tokens.transition.normal,
  },
  variants: {
    size: {
      small: {
        width: '300px',
      },
      medium: {
        width: '500px',
      },
      large: {
        width: '800px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const closeButton = style({
  position: 'absolute',
  top: tokens.space.sm,
  right: tokens.space.sm,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: themeContract.color.text,
  fontSize: tokens.fontSize.lg,
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.borderRadius.sm,
  boxShadow: 'none',
  
  ':hover': {
    backgroundColor: themeContract.color.muted,
    transform: 'none',
    boxShadow: 'none',
  },
});

export const title = style({
  margin: 0,
  marginBottom: tokens.space.md,
  fontSize: tokens.fontSize.xl,
  fontWeight: tokens.fontWeight.bold,
  color: themeContract.color.text,
});

export const description = style({
  margin: 0,
  marginBottom: tokens.space.lg,
  fontSize: tokens.fontSize.md,
  color: themeContract.color.text,
});

export type ModalVariants = RecipeVariants<typeof content>;