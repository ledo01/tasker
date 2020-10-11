import React from 'react';
import { Page, ThemeProvider, GlobalStyles } from './components/theme';

function App() {
  return (
    <ThemeProvider darkMode={true}>
      <GlobalStyles />
      <Page>Test</Page>
    </ThemeProvider>
  );
}

export default App;
