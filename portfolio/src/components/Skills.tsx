import { PageContainer } from "./PageContainer";
import React from 'react';
import styled from "styled-components";
import {AiOutlineHtml5} from 'react-icons/ai';
import {BsCheck2Circle} from 'react-icons/bs';
type Title = {
    title:string,
    stacks:string[],
}

type Item = {
    name:string,
    icon:any,
}

const StackBox = (props:Title) => {
    const {title,stacks} = props;
    const size=25;
    const StyledCom = styled.div`
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns:1fr 1fr;
        place-items: center;
    `
    return(
        <StyledBox>
            <StyledTitle>{title}</StyledTitle>

            <StyledCom>
            {stacks.map((stack,index) => {
                return <Items key={index} name={stack} icon = {<BsCheck2Circle size={size} />} />
            })}
            </StyledCom>

        </StyledBox>
    )
}
const Items = (props:Item) => {
    const {name,icon} = props;
    return(
        <StyledItem>
            <span>
                {icon}
            </span>
            <span>
                {name}
            </span>
        </StyledItem>
    )

}
export const Skills = () => {
    const FrontStacks = ['React Native','Javascript','ReactJS','Typescript'];
    const BackStacks = ['NodeJS','Flask','Firebase','MySQL']
    return(
        <PageContainer title='Skills' subtitle="My Stacks" style={{flexDirection:'column'}}>
            <div style={{
                display:'flex',
                width:'80%',
                justifyContent:'space-evenly',
                
            }}>
            <StackBox title="Frontend" stacks = {FrontStacks}/>
            <StackBox title="Backend" stacks = {BackStacks}/>
            </div>

        </PageContainer>
    )
}

const StyledBox = styled.div`
    display: flex;
    width:400px;
    height:200px;
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    border-color: #e6e6e6;
    flex-direction: column;
`

const StyledTitle = styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 18px;
`

const StyledItem = styled.div`
    width:40%;
    text-align: center;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    

`