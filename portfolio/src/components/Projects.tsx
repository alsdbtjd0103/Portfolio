import { PageContainer } from "./PageContainer"
import React, { useState } from "react"

import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import NowmeetImage from '../Image/nowmeet.png';
import PonyoImage from '../Image/Ponyo.png';
import TrashImage from '../Image/trash.jpeg';
import { AiOutlinePaperClip,AiFillGithub } from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi'

import { wrap } from "popmotion";
import PortfolioImage from '../Image/portfolio.png';

interface TemplateProps {
    title: string,
    explain: string,
    imgSrc: any,
    funcs: string[],
    link?: string,
    github:string,
    stacks: string[],
    price?:string[],
}

const NowMeet: TemplateProps = {
    title: '우리 지금 만나',
    explain: '사람들의 약속을 위한 중간 지점을 찾아주는 서비스',
    imgSrc: NowmeetImage,
    funcs: ['카카오맵 API를 이용한 중간 지점 거리순 TOP 5 제공', '카카오톡 API를 이용하여 친구에게 공유하기', '각 장소별로 거리 제공'],
    link: 'https://www.nowmeet.xyz',
    github:'https://github.com/alsdbtjd0103/Middle',
    stacks: ['ReactJs', 'AWS Amplify', 'Javascript', 'HTML', 'CSS']
}
const Ponyo: TemplateProps = {
    title: 'PONYO',
    explain: '당뇨병 환자들을 위한 식단 관리 서비스',
    imgSrc: PonyoImage,
    funcs: ['Object Detection을 통한 간편한 식단 등록', '각 영양분 섭취량과 등록한 혈당량들을 체크하는 월별 리포트 제공', '간단한 당뇨병 예측 알고리즘 제공'],
    link: 'www.github.com',
    github:'https://github.com/alsdbtjd0103/Ponyo',
    stacks: ['React Native', 'Javascript', 'NodeJS', 'Flask', 'YOLOv3', 'Firebase', 'Faster-Rcnn'],
    price:['고려대학교 캡스톤 디자인 경진대회 최우수상']
}

const TrashClassification: TemplateProps = {
    title: '분리수거를 위한 Object Detection',
    explain: '분리수거를 위한 쓰레기 종류 분류',
    imgSrc: TrashImage,
    funcs: ['YOLOv5 모델을 이용하여 구축한 Object Detection', '쓰레기 촬영 시, 물질 분석', 'React Native Expo를 이용하여 실제 카메라로 테스트 가능'],
    link: '',
    github:'https://github.com/alsdbtjd0103/COSE474_Final_Project',
    stacks: ['React Native', 'Javascript', 'YOLOv5', 'Flask']
}

const MyPortfolio: TemplateProps={
    title:'포트폴리오 만들기',
    explain:'React & Typescript를 이용한 포트폴리오 웹페이지 제작',
    imgSrc:PortfolioImage,
    funcs:['다크 모드 기능','상단 네비게이셔 바 클릭 시, 해당 영역으로 이동'],
    link:'/',
    github:'https://github.com/alsdbtjd0103/Portfolio',
    stacks:['ReactJS','Typescript','Github Hosting']
}

const Template = (props: TemplateProps) => {
    const { title, explain, imgSrc, funcs, link, stacks,github,price } = props;
    return (
        <>
            <ImageContainer src={imgSrc} alt={title} />
            <TextContainer>
                
                    <StyledTitle>{title}</StyledTitle>
                    <StyledExplain>
                        <AiOutlinePaperClip size={25} color="gray" />
                        {explain}
                    </StyledExplain>
                    <FunctionContainer>
                        <FunctionText style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>Func.</FunctionText>
                        {funcs.map((func, index) => <FunctionText key={index}>{func}</FunctionText>)}
                        {price?.map((p,index) => {
                            return <FunctionText key={index} style={{fontSize:'12px',marginTop:'10px'}}>{'P.S '+p}</FunctionText>
                        })}
                    </FunctionContainer>

                    <div style={{display:'flex',marginTop:'10px'}}>
                
                    <LinkContainer href={link} target={'_blank'}>
                    <AiFillGithub size={25}/>
                    </LinkContainer>
                    <LinkContainer style={{marginLeft:'20px'}}>
                    <BiLinkExternal size={25} href={github} target={'_blank'}/>
                    </LinkContainer>
                    </div>



                <StackContainer>
                    {stacks.map((stack, index) => <StackText key={index}>{'# ' + stack}</StackText>)}
                </StackContainer>


            </TextContainer>
        </>

    )
}

export const Projects = () => {
    const Datas: TemplateProps[] = [NowMeet, Ponyo, TrashClassification,MyPortfolio];
    const [visible, setVisible] = useState(0);
    const [back, setBack] = useState(false);
    //박스마다 이미지 적용
    const dataIndex = wrap(0, Datas.length, visible);

    const nextPlease = () => {
        setBack(false);
        setVisible((prev) =>
            prev === Datas.length - 1 ? Datas.length - 1 : prev + 1
        );
    };
    const prevPlease = () => {
        setBack(true);
        setVisible((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const boxVariants = {
        entry: (back: boolean) => ({
            x: back ? -500 : 500,
            opacity: 0,

        }),
        center: {
            opacity: 1,
            x: 0,

            transition: { duration: 0.5 }
        },
        exit: (back: boolean) => ({
            x: back ? 500 : -500,
            opacity: 0,

            transition: { duration: 0.5 }
        })
    };



    return (

        <PageContainer title="Projects" subtitle="My Projects" style={{ flexDirection: 'column' }} titleStyle={{}}>
            <div style={{ display: 'flex' }}>
                <PrevButton style={{ left: '0px' }} onClick={prevPlease} dataIndex={dataIndex}>{'<'}</PrevButton>

                <SliderContainer >
                    <Slider
                        custom={back}
                        variants={boxVariants}
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key={visible}
                    >
                        <Template {...Datas[dataIndex]} />
                    </Slider>

                </SliderContainer>

                <NextButton onClick={nextPlease} dataIndex={dataIndex}>{'>'}</NextButton>
            </div>


        </PageContainer>

    )
}


const SliderContainer = styled.div`
    display: flex;
    width:90%;
    min-width:700px;
    height: auto;
    align-items: center;
    justify-content: center;
`
const NextButton = styled.div<{dataIndex:number}>`
    position: relative;
    display: flex;
    cursor:pointer;
    font-size: 50px;
    top:180px;
    color:${({dataIndex}) => dataIndex===3 ? '#bcbcbc' : 'black'};
`
const PrevButton = styled.div<{dataIndex:number}>`
    position: relative;
    display: flex;
    cursor:pointer;
    font-size: 50px;
    top:180px;
    color:${({dataIndex}) => dataIndex===0 ? '#bcbcbc' : 'black'};
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
    max-width: 220px;
    overflow: hidden;
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
    padding:5px 20px 5px 0px;
    
`

const StyledExplain = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0px;
    margin-top: 10px;
    
`

const FunctionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 15px;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 30px;
`
const FunctionText = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`

const StackContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:10px;
`

const StackText = styled.div`
    font-size: 14px;
    color:gray;
`
const LinkContainer = styled.a`
    display: flex;
    cursor: pointer;
    margin-bottom: 40px;
    
`