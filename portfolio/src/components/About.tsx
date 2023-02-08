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
        <PageContainer style={{ flexDirection: 'column' }} title={'About'} subtitle={'My Introduction'} id='About'>
            <div style={{
                display: 'flex',
                width: '100%',
                height: '50%',
            }}>
                <ImageContainer src={exampleImage} />

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    paddingLeft: '100px'
                }}>
                    <ItemContainer>
                        <AboutBoxComponent title='Birthday' subtext="2000-01-03" />
                        <AboutBoxComponent title='Air Force' subtext="~2022-07-15" />
                        <AboutBoxComponent title='University' subtext='고려대학교 컴퓨터학과' />
                    </ItemContainer>
                    <TextContainer>
                        안녕하세요 항상 더 나은 미래를 꿈꾸는 개발자 민유성입니다.
                        저는 웹 프론트를 주로 공부했지만 백엔드에도 관심을 가지고 여러 분야를 공부하고 있습니다.
                        비록 아직 실무 경험도 없고 부족하지만 개인 프로젝트들을 꾸준히 진행하면서 실력을 향상시키기 위해 노력하고 있습니다.
                        새로운 것을 시도하는 것에 두려움을 느끼기보다는 오히려 설렘을 느끼며 한번 맡은 일은 완벽하진 않더라도 어떻게든 해내려고 노력합니다.
                        감사합니다!
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
    width:60%;
    padding: 10px 20px;
    color: gray;
    line-height: 30px;
    font-size: 18px;

`

