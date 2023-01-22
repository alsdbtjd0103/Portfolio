import { PageContainer } from "./PageContainer"
import React, { useState } from "react"

import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Nowmeet from '../Image/nowmeet.png';
import { AiOutlinePaperClip } from 'react-icons/ai';

interface TemplateProps{
    title:string,
    explain:string,
    imgSrc:any,
    funcs:string[],
    link:string,
    stacks:string[],
}

const Template = (props:TemplateProps) => {
    const {title,explain,imgSrc,funcs,link,stacks} = props;
    return(
        <>
        <ImageContainer src={imgSrc} alt={title} />
        <TextContainer>
            <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledExplain>
                <AiOutlinePaperClip size={25} color="gray" />
                {explain}
            </StyledExplain>
            <FunctionContainer>
                <FunctionText style={{fontWeight:'bold',fontSize:'18px',marginBottom:'20px'}}>Func.</FunctionText>
                {funcs.map((func,index) => <FunctionText key={index}>{func}</FunctionText>)}
            </FunctionContainer>
            </div>
            <LinkContainer href={link} target={'_blank'}>{'Let\'s Go'}</LinkContainer>
            
            
            
            <StackContainer>
                {stacks.map((stack,index) => <StackText key={index}>{'# '+stack}</StackText>)}
            </StackContainer>


        </TextContainer>
        </>
    )
}

export const Projects = () => {
    const NowMeet:TemplateProps = {
        title:'우리 지금 만나',
        explain:'사람들의 약속을 위한 중간 지점을 찾아주는 서비스',
        imgSrc:Nowmeet,
        funcs:['카카오맵 API를 이용한 중간 지점 거리순 TOP 5 제공','카카오톡 API를 이용하여 친구에게 공유하기','각 장소별로 거리 제공'],
        link:'www.nowmeet.xyz',
        stacks:['ReactJs','AWS Amplify','Javascript','HTML','Css']
    }
    return (
        <PageContainer title="Projects" subtitle="My Projects" style={{ flexDirection: 'column'}} titleStyle={{}}>
            <SliderContainer>
                <Slider>
                <Template {...NowMeet}/>
        

                </Slider>

            </SliderContainer>

        </PageContainer>
    )
}


const SliderContainer = styled.div`
    display: flex;
    width:80%;
    min-width:700px;
    height: auto;
    align-items: center;
    justify-content: center;
`

const Slider = styled(motion.div)`
    display: flex;
    align-items: center;
    width: inherit;
    height:400px;
    border-style: solid;
    border-color: #e6e6e6;
    border-width: 1px;
    background-color: white;
    border-radius: 15px;
    justify-content: space-around;
`

const ImageContainer = styled.img`
    height: 90%;
    width: auto;
`

const StyledTitle = styled.span`
    font-size: 18px;
    color:black;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: space-around;
    
`

const StyledExplain = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 10px;
`

const FunctionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 15px;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 50px;
`
const FunctionText = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`

const StackContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
`

const StackText=  styled.div`
    font-size: 14px;
    color:gray;
`
const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #e6e6e6;
    cursor: pointer;
`