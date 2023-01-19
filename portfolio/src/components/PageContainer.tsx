import styled from "styled-components"
import React from 'react';
import '../style/style.css';
interface Props{
    children?:React.ReactNode,
}

export const PageContainer = (props:Props) => {
    const {children} = props;
    return(
        <RootContainer>
            {children}
        </RootContainer>
    )
}

const RootContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

