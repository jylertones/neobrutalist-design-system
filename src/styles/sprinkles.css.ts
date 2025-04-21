import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { tokens } from './themes/tokens.css';
import { themeContract } from './themes/theme.css';

// Define responsive conditions
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-flex', 'grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    padding: tokens.space,
    paddingTop: tokens.space,
    paddingRight: tokens.space,
    paddingBottom: tokens.space,
    paddingLeft: tokens.space,
    margin: tokens.space,
    marginTop: tokens.space,
    marginRight: tokens.space,
    marginBottom: tokens.space,
    marginLeft: tokens.space,
    gap: tokens.space,
    fontSize: tokens.fontSize,
    textAlign: ['left', 'center', 'right'],
    width: ['auto', '100%', '50%', '25%'],
    height: ['auto', '100%', '50%', '25%'],
    borderRadius: tokens.borderRadius,
  },
  shorthands: {
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});

// Define theme-based color properties
const colorProperties = defineProperties({
  properties: {
    color: themeContract.color,
    background: {
      ...themeContract.color
    },
    borderColor: themeContract.color,
    boxShadow: themeContract.shadow,
  },
});

// Define other properties
const otherProperties = defineProperties({
  properties: {
    fontWeight: tokens.fontWeight,
    lineHeight: tokens.lineHeight,
    fontFamily: tokens.fontFamily,
    border: tokens.border,
    borderTop: tokens.border,
    borderRight: tokens.border,
    borderBottom: tokens.border,
    borderLeft: tokens.border,
  },
});

// Create the sprinkles function by combining all property definitions
export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  otherProperties
);

// Export the type for our sprinkles
export type Sprinkles = Parameters<typeof sprinkles>[0];