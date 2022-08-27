import React, { Component, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Menu from './components/Menu/Menu';
import { GlobalStyles } from './global';
import { theme } from './theme'
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Menu />
      </>
    </ThemeProvider>
  );
}

export default App;
