import { createContext } from 'react';

export type Color = {
  foreground: string;
  background: string;
}

export type Theme = {
  color: {
    primary: Color;
    accent: Color;
    neutral: Color;
    warning: Color;
    success: Color;
    info: Color;
  },
  text: {
    small: string;
    base: string;
    large: string;
    extraLarge: string;

    primary: string;
    secondary: string;
    light: string;
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
      primary: {
        foreground: '#fff',
        background: '#0070f3'
      },
      accent: {
        foreground: '#fff',
        background: '#0070f3'
      },
      neutral: {
        foreground: '#000',
        background: '#fff'
      },
      warning: {
        foreground: '#fff',
        background: '#0070f3'
      },
      success: {
        foreground: '#fff',
        background: '#0070f3'
      },
      info: {
        foreground: '#fff',
        background: '#0070f3'
      }
    },
    text: {
      small: '0.875em',
      base: '1em',
      large: '2em',
      extraLarge: '3em',

      light: '#666',
      primary: '#111',
      secondary: '#444'
    },
    shadow: {
      small: '0 5px 24px rgba(0, 0, 0, 0.12)',
      medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      large: '0 30px 60px rgba(0,0,0,0.12)'
    }
  }
}

export default createContext({ theme: DefaultTheme });