import styled from "styled-components"
import React from 'react';
import '../style/style.css';
interface Props{
    children?:React.ReactNode,
}

export const PageContainer = (props:Props) => {
    const {children} = props;
    console.log(window.innerHeight);
    return(
        <RootContainer>
            {children}
        </RootContainer>
    )
}

const RootContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;  //한 페이지 당 한 컴포넌트
    align-items: center;
    justify-content: center;
`

