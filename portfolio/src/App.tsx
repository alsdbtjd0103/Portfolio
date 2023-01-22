import React, { useEffect, useRef, useState } from 'react';
import './style/style.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import GlobalStyles from './style/GlobalStyle';
import { PageContainer } from './components/PageContainer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AnimatePresence } from 'framer-motion';


function App() {



  return (
    <>
      <GlobalStyles />
      <AnimatePresence onExitComplete={() => {
                    console.log('asd')
                    return true}}>
      <RootContainer >
        <Header></Header>
        <PageContainer id="Home">
          <Home />
        </PageContainer>
        <PageContainer id='About'>
          <About />
        </PageContainer>
        <PageContainer id='Skills'>
          <Skills />
        </PageContainer>
        <PageContainer id='Qualifications'>
          
        </PageContainer>
        <PageContainer id='Projects'>
          <Projects />
        </PageContainer>
        <PageContainer id='Contact'>
          
        </PageContainer>
        
      </RootContainer>
      </AnimatePresence>
    </>
  );
}

export default App;

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 100px 0px 100px;
  background-color:white;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  
  
  
`
