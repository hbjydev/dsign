import * as React from 'react';
import ThemeContext, { DefaultTheme, ThemeWrapper, Theme } from './ThemeContext';

const root = (theme: Theme) => `
  :root {
    /* Colour Pallette */
    --color-primary-fg: ${theme.color.primary.foreground};
    --color-primary-bg: ${theme.color.primary.background};

    --color-accent-fg: ${theme.color.accent.foreground};
    --color-accent-bg: ${theme.color.accent.background};

    --color-neutral-fg: ${theme.color.neutral.foreground};
    --color-neutral-bg: ${theme.color.neutral.background};

    --color-warning-fg: ${theme.color.warning.foreground};
    --color-warning-bg: ${theme.color.warning.background};

    --color-success-fg: ${theme.color.success.foreground};
    --color-success-bg: ${theme.color.success.background};

    --color-info-fg: ${theme.color.info.foreground};
    --color-info-bg: ${theme.color.info.background};

    /* Text Styles */
    --text-small: ${theme.text.small};
    --text-base: ${theme.text.base};
    --text-large: ${theme.text.large};
    --text-xl: ${theme.text.extraLarge};

    --text-light: ${theme.text.light};
    --text-primary: ${theme.text.primary};
    --text-secondary: ${theme.text.secondary};

    /* Shadow Styles */
    --shadow-small: ${theme.shadow.small};
    --shadow-medium: ${theme.shadow.medium};
    --shadow-large: ${theme.shadow.large};
  }
`;

type Props = {
  children: React.ReactNode | React.ReactNode[];
  theme?: ThemeWrapper;
}
export default ({ children, theme = DefaultTheme }: Props) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
      <style jsx global>{`
        ${root(theme.light)}
        ${theme.dark ? root(theme.dark) : ''}

        * { box-sizing: border-box; }

        body {
          color: var(--text-primary);
          font-size: var(--text-base);
          font-family: sans-serif;
        }

        h1,h2,h3,h4,h5,h6 {
          margin: 0;
        }
      `}</style>
    </ThemeContext.Provider>
  )
}