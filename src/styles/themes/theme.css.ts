import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { tokens } from './tokens.css';

// Define our theme contract - an interface that all themes must implement
export const themeContract = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
    secondary: null,
    accent: null,
    muted: null,
    border: null,
    error: null,
    success: null,

    // UI elements
    cardBackground: null,
    buttonBackground: null,
    buttonText: null,
    inputBackground: null,
    inputBorder: null,
    tooltipBackground: null,
    tooltipText: null,
  },
  shadow: {
    normal: null,
  }
});

// Light theme implementation
export const lightTheme = createTheme(themeContract, {
  color: {
    background: tokens.color.white,
    text: tokens.color.black,
    primary: tokens.color.primary,
    secondary: tokens.color.secondary,
    accent: tokens.color.accent,
    muted: tokens.color.muted,
    border: tokens.color.border,
    error: tokens.color.error,
    success: tokens.color.success,

    // UI elements
    cardBackground: tokens.color.cardBackground,
    buttonBackground: tokens.color.buttonBackground,
    buttonText: tokens.color.buttonText,
    inputBackground: tokens.color.inputBackground,
    inputBorder: tokens.color.inputBorder,
    tooltipBackground: tokens.color.tooltipBackground,
    tooltipText: tokens.color.tooltipText,
  },
  shadow: {
    normal: tokens.shadow.md,
  }
});

// Dark theme implementation
export const darkTheme = createTheme(themeContract, {
  color: {
    background: tokens.color.black,
    text: tokens.color.white,
    primary: tokens.color.primary,
    secondary: tokens.color.secondary,
    accent: tokens.color.accent,
    muted: '#333333',
    border: tokens.color.white,
    error: tokens.color.error,
    success: tokens.color.success,

    // UI elements
    cardBackground: '#222222',
    buttonBackground: '#222222',
    buttonText: tokens.color.white,
    inputBackground: '#222222',
    inputBorder: tokens.color.white,
    tooltipBackground: tokens.color.white,
    tooltipText: tokens.color.black,
  },
  shadow: {
    normal: '4px 4px 0px rgba(255, 255, 255, 1)',
  }
});