import React from 'react';
import './style/style.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import GlobalStyles from './style/GlobalStyle';
import { PageContainer } from './components/PageContainer';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <RootContainer>
        <Header></Header>
        <PageContainer>
          <Home />
        </PageContainer>
      </RootContainer>
    </>
  );
}

export default App;

const RootContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height:100vh;
  padding: 0 100px 0px 100px;
  overflow: scroll;
  background-color:white;
  display: flex;
  box-sizing: border-box;
  
  
`
