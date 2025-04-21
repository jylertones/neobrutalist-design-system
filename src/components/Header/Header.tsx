import React, { forwardRef, HTMLAttributes } from 'react';
import {
  header as headerClass,
  logo as logoClass,
  nav as navClass,
  navItem as navItemClass,
  HeaderVariants,
} from './Header.css';
import { useTheme } from '../ThemeProvider';
import Button from '../Button';

export interface HeaderProps extends HTMLAttributes<HTMLElement>, HeaderVariants {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  onThemeToggle?: () => void;
  showThemeToggle?: boolean;
  navItems?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      logo,
      children,
      onThemeToggle,
      showThemeToggle = true,
      navItems = [],
      size,
      sticky,
      className,
      ...props
    },
    ref
  ) => {
    const { theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
      if (onThemeToggle) {
        onThemeToggle();
      } else {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    };

    return (
      <header
        ref={ref}
        className={headerClass({ size, sticky, className })}
        {...props}
      >
        <div className={logoClass()}>{logo || 'Neo-Brutalist'}</div>
        
        <nav className={navClass()}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={navItemClass({ active: item.active })}
            >
              {item.label}
            </a>
          ))}
          
          {showThemeToggle && (
            <Button 
              variant="outline" 
              size="small" 
              onClick={handleThemeToggle}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          )}
          
          {children}
        </nav>
      </header>
    );
  }
);

Header.displayName = 'Header';

export default Header;