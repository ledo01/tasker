import React from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

export const colors = {
  dark: {
    background: 'black',
    card: 'gray',
    text: 'white',
  },
  light: { background: 'white', card: 'gray', text: 'black' },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.background};
    display: flex;
    flex-direction: column;
  }

  #root {
    width: 100vw;
  }
`;

type ThemeProviderProps = { darkMode: boolean };

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  darkMode,
  children,
}) => {
  return (
    <StyledThemeProvider theme={darkMode ? colors.dark : colors.light}>
      {children}
    </StyledThemeProvider>
  );
};

export const Page = styled.div`
  width: 100%auto;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`;
