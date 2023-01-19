import styled from "styled-components"
import React from 'react';
import '../style/style.css';
interface Props{
    id?:string,
    children?:React.ReactNode,
}

export const PageContainer = (props:Props) => {
    const {id,children} = props;
    return(
        <RootContainer id={id}>
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

