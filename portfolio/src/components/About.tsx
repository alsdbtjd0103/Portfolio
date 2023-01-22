import React from "react"
import styled from "styled-components"
import { PageContainer } from "./PageContainer"
import exampleImage from '../Image/example.png';
interface BoxProps {
    title: string,
    subtext: string,
}

const AboutBoxComponent = (props: BoxProps) => {
    console.log(props.subtext)
    return (
        <AboutBox>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledSubtext>{props.subtext}</StyledSubtext>
        </AboutBox>
    )
}


export const About = () => {
    return (
        <PageContainer style={{ flexDirection: 'column' }} title={'About'} subtitle={'My Introduction'}>
            <div style={{
                display:'flex',
                width:'100%',
                height:'100%',
                justifyContent:'space-between',
            }}>
            <ImageContainer src={exampleImage} />

            <div style={{
                display:'flex',
                justifyContent:'center', 
                alignItems:'flex-start',
                flexDirection:'column',
                paddingLeft:'100px'
            }}>
            <ItemContainer>
                <AboutBoxComponent title='Birthday' subtext="2000-01-03" />
                <AboutBoxComponent title='Air Force' subtext="~2022-07-15"/>
                <AboutBoxComponent title='University' subtext='고려대학교 컴퓨터학과'/>
            </ItemContainer>
            <TextContainer>
                I am a full-stack software engineer that is curious and competent. I see myself as a life-long learner, that is driven to solve complex problems, programming is my choice of medium to stimulate my mind.
            </TextContainer>
            </div>
            </div>
        </PageContainer>
    )
}

const ItemContainer = styled.div`
    display: flex;
`

const AboutBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 150px;
    height:80px;
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #e6e6e6;
    margin: 10px;
    background-color: #fff;
    text-align: center;
    flex-direction: column;
`

const StyledTitle = styled.div`
    font-size: 16px;
    
`
const StyledSubtext = styled.div`
    font-size:12px;
    font-weight: light;
    color:gray;
    
`
const ImageContainer = styled.img`
    width: 40%;
    height: auto;
`

const TextContainer = styled.div`
    width:50%;
    padding: 10px 20px;
    color: gray;
    line-height: 30px;
    font-size: 18px;

`

