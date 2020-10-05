import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Theme } from './styles/Theme';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainContent>
        <Nav />
        <Switch>
          <Content>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                exact
                key={index}
                render={(props) =>
                  React.createElement(route.component, {
                    ...props,
                  })
                }
              />
            ))}
          </Content>
        </Switch>
      </MainContent>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

const MainContent = styled.div`
  display: flex;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.footerHeight});

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      flex-direction: column;
    }
  `};
`;

const Content = styled.div`
  display: flex;
  width: calc(100vw - ${({ theme }) => theme.sizes.navWidth});
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      width: 100%;
    }
  `};
`;
