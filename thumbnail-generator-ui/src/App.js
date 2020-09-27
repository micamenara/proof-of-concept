import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import FilesSection from './components/FilesSection';
import Nav from './components/Nav';
import { Theme } from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <Nav />
        {/* Icons made by
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>
        from
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a> */}
        <Content>
          <FilesSection />
        </Content>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Content = styled.div`
  height: 100vh;
  width: calc(100vw - ${({ theme }) => theme.sizes.navWidth});
  margin-left: ${({ theme }) => theme.sizes.navWidth};
`;
