import { createGlobalTheme } from '@vanilla-extract/css';

// Define our design tokens
export const tokens = createGlobalTheme(':root', {
  space: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  color: {
    // Base colors
    white: '#ffffff',
    black: '#000000',
    
    // Light theme colors
    background: '#ffffff',
    text: '#000000',
    primary: '#ff3333',
    secondary: '#3333ff',
    accent: '#ffcc00',
    muted: '#f5f5f5',
    border: '#000000',
    error: '#ff0000',
    success: '#00cc66',

    // UI elements
    cardBackground: '#ffffff',
    buttonBackground: '#ffffff',
    buttonText: '#000000',
    inputBackground: '#ffffff',
    inputBorder: '#000000',
    tooltipBackground: '#000000',
    tooltipText: '#ffffff',
  },
  border: {
    none: 'none',
    thin: '1px solid',
    thick: '3px solid',
    xthick: '5px solid',
  },
  borderRadius: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    pill: '999px',
  },
  fontFamily: {
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    heading: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: 'monospace',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    bold: '700',
    black: '900',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    loose: '1.75',
  },
  shadow: {
    none: 'none',
    sm: '2px 2px 0px rgba(0, 0, 0, 1)',
    md: '4px 4px 0px rgba(0, 0, 0, 1)', 
    lg: '6px 6px 0px rgba(0, 0, 0, 1)',
    xl: '8px 8px 0px rgba(0, 0, 0, 1)',
  },
  transition: {
    fast: '0.1s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
});