import styled from "styled-components"
import React from 'react';
import '../style/style.css';
interface Props {
    id?: string,
    children?: React.ReactNode,
    title?: string,
    subtitle?: string,
    style?: any,
    titleStyle?:any,
}

export const PageContainer = (props: Props) => {
    const { id, children, title, subtitle, style,titleStyle} = props;
    return (
        <RootContainer id={id} style={style}>
            <div style={{ textAlign: 'center',marginTop:'30px',marginBottom:'100px' }}>
                <div style={titleStyle}>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubTitle>{subtitle}</StyledSubTitle>
                </div>
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
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 25px;
`
const StyledSubTitle = styled.div`
    font-size: 15px;
    color: gray;
`
