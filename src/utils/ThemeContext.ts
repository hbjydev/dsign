import { createContext } from 'react';

export type ColorType = 'base' | 'success' | 'warning' | 'error';

export type Color = {
  dark: string;
  base: string;
  light: string;

  foreground: string;
}

export type Theme = {
  color: {
    background: string;
    foreground: string;

    accents: string[];

    success: Color;
    warning: Color;
    error: Color;
  },
  text: {
    sans: string;
    serif?: string;
    mono: string;

    small: string;
    base: string;
    large: string;
    extraLarge: string;
  },
  shadow: {
    small: string;
    medium: string;
    large: string;
  }
}

export type ThemeWrapper = {
  light: Theme;
  dark?: Theme;
}

export const DefaultTheme: ThemeWrapper = {
  light: {
    color: {
      background: '#fff',
      foreground: '#000',

      accents: [
        '#fafafa',
        '#eaeaea',
        '#999',
        '#888',
        '#666',
        '#444',
        '#333',
        '#111'
      ],

      success: {
        foreground: '#fff',

        dark: '#0366d6',
        base: '#0070f3',
        light: '#3291ff'
      },
      error: {
        foreground: '#fff',

        dark: '#c00',
        base: '#e00',
        light: '#ff1a1a'
      },
      warning: {
        foreground: '#fff',

        dark: '#f49b0b',
        base: '#f5a623',
        light: '#f7b955'
      }
    },
    text: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      serif: 'serif',
      mono: 'monospace',
      small: '0.875em',
      base: '1em',
      large: '2em',
      extraLarge: '3em'
    },
    shadow: {
      small: '0 5px 24px rgba(0, 0, 0, 0.12)',
      medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      large: '0 30px 60px rgba(0,0,0,0.12)'
    }
  }
}

export default createContext({ theme: DefaultTheme });