import styled from "styled-components"
import React from 'react';
import '../style/style.css';
interface Props {
    id?: string,
    children?: React.ReactNode,
    title?: string,
    subtitle?: string,
    style?: any,
}

export const PageContainer = (props: Props) => {
    const { id, children, title, subtitle, style } = props;
    return (
        <RootContainer id={id} style={style}>
            <div style={{ textAlign: 'center' }}>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle>{subtitle}</StyledSubTitle>
            </div>
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
const StyledTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
`
const StyledSubTitle = styled.div`
    font-size: 20px;
    color: gray;
`
