import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/themes/tokens.css';
import { themeContract } from '../../styles/themes/theme.css';

export const text = recipe({
  base: {
    margin: 0,
    padding: 0,
    color: themeContract.color.text,
  },
  variants: {
    variant: {
      heading1: {
        fontSize: tokens.fontSize.xxxl,
        fontWeight: tokens.fontWeight.black,
        lineHeight: tokens.lineHeight.tight,
        fontFamily: tokens.fontFamily.heading,
      },
      heading2: {
        fontSize: tokens.fontSize.xxl,
        fontWeight: tokens.fontWeight.bold,
        lineHeight: tokens.lineHeight.tight,
        fontFamily: tokens.fontFamily.heading,
      },
      heading3: {
        fontSize: tokens.fontSize.xl,
        fontWeight: tokens.fontWeight.bold,
        lineHeight: tokens.lineHeight.tight,
        fontFamily: tokens.fontFamily.heading,
      },
      heading4: {
        fontSize: tokens.fontSize.lg,
        fontWeight: tokens.fontWeight.bold,
        lineHeight: tokens.lineHeight.tight,
        fontFamily: tokens.fontFamily.heading,
      },
      body: {
        fontSize: tokens.fontSize.md,
        fontWeight: tokens.fontWeight.normal,
        lineHeight: tokens.lineHeight.normal,
        fontFamily: tokens.fontFamily.body,
      },
      small: {
        fontSize: tokens.fontSize.sm,
        fontWeight: tokens.fontWeight.normal,
        lineHeight: tokens.lineHeight.normal,
        fontFamily: tokens.fontFamily.body,
      },
    },
    weight: {
      light: { fontWeight: tokens.fontWeight.light },
      normal: { fontWeight: tokens.fontWeight.normal },
      medium: { fontWeight: tokens.fontWeight.medium },
      bold: { fontWeight: tokens.fontWeight.bold },
      black: { fontWeight: tokens.fontWeight.black },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    noMargin: {
      true: { margin: 0 },
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'normal',
    align: 'left',
    noMargin: false,
  },
});

export type TextVariants = RecipeVariants<typeof text>;