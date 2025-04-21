import { globalStyle } from '@vanilla-extract/css';
import { tokens } from './themes/tokens.css';

// Reset and base styles
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  fontFamily: tokens.fontFamily.body,
  fontSize: tokens.fontSize.md,
  lineHeight: tokens.lineHeight.normal,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

// Neo brutalist specific styles
globalStyle('button, input, select, textarea', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: tokens.border.thick,
  borderRadius: tokens.borderRadius.sm,
  background: 'transparent',
});

globalStyle('button', {
  cursor: 'pointer',
  boxShadow: tokens.shadow.md,
  transition: tokens.transition.fast,
});

globalStyle('button:hover', {
  transform: 'translate(-2px, -2px)',
  boxShadow: tokens.shadow.lg,
});

globalStyle('button:active', {
  transform: 'translate(2px, 2px)',
  boxShadow: tokens.shadow.sm,
});