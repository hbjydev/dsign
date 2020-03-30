import * as React from 'react';
import ThemeContext, { DefaultTheme, ThemeWrapper, Theme } from './ThemeContext';

const root = (theme: Theme) => `
  :root {
    /* Colour Pallette */
    --color-background: ${theme.color.background};
    --color-foreground: ${theme.color.foreground};

    ${theme.color.accents.map(
      (a, i) => `--accent-${i}: ${a};`
    ).join('\n')}

    --color-base-fg: var(--color-foreground);
    --color-base-light: var(--color-background);
    --color-base: var(--color-background);
    --color-base-dark: var(--accent-1);

    --color-success-fg: ${theme.color.success.foreground};
    --color-success-light: ${theme.color.success.dark};
    --color-success: ${theme.color.success.base};
    --color-success-dark: ${theme.color.success.dark};

    --color-warning-fg: ${theme.color.warning.foreground};
    --color-warning-light: ${theme.color.warning.dark};
    --color-warning: ${theme.color.warning.base};
    --color-warning-dark: ${theme.color.warning.dark};

    --color-error-fg: ${theme.color.error.foreground};
    --color-error-light: ${theme.color.error.dark};
    --color-error: ${theme.color.error.base};
    --color-error-dark: ${theme.color.error.dark};

    /* Text Styles */
    --text-sans: ${theme.text.sans};
    --text-serif: ${theme.text.serif};
    --text-mono: ${theme.text.mono};

    --text-small: ${theme.text.small};
    --text-base: ${theme.text.base};
    --text-large: ${theme.text.large};
    --text-xl: ${theme.text.extraLarge};

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
        ${theme.dark ? `
          @media (prefers-color-scheme: dark) {
            ${root(theme.dark)}
          }
        ` : ''}

        * { box-sizing: border-box; }

        body {
          padding: 0;
          margin: 0;
          color: var(--foreground);
          font-size: var(--text-base);
          font-family: var(--text-sans);
        }

        h1,h2,h3,h4,h5,h6 {
          margin: 0;
        }

        h1 {
          font-family: var(--text-sans);
          color: inherit;
          line-height: 1.5;
          font-size: 3rem;
          letter-spacing: -.066875rem;
          font-weight: 700;
        }

        h3 {
          font-family: var(--text-sans);
          color: inherit;
          line-height: 1.5;
          font-size: 1.5rem;
          letter-spacing: -.029375rem;
          font-weight: 600;
        }

        p {
          color: inherit;
          font-family: var(--text-sans);
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
        }

        a {
          color: var(--color-success);
          text-decoration: none;
        }
      `}</style>
    </ThemeContext.Provider>
  )
}