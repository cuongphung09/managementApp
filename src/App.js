import React, { Component, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Menu, Burger } from './components';
import { GlobalStyles } from './global';
import { theme } from './theme'
import { useOnClickOutside } from './hooks.js'
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  // const menuId = "main-menu";
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img src="https://media.giphy.com/media/xTiTnwj1LUAw0RAfiU/giphy.gif" alt="animated burger" />
        </div>


        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>

  );
}

export default App;
