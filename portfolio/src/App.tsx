import React from 'react';
import './style/style.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import GlobalStyles from './style/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyles />
    <RootContainer>
      <Header></Header>
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
`
