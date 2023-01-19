import React, { useState } from 'react';
import styled from "styled-components";
import { BsSun, BsFillMoonFill } from 'react-icons/bs'

export const Header: React.FC = () => {
    type Item = {
        title: string;
        href?: string;
        icon?: string
    }

    const [toggle, setToggle] = useState<boolean>(false);

    const DarkMode = () => {
        setToggle((previous) => !previous)
        console.log(toggle);
    }

    const navItemList: Item[] = [
        {
            title: 'Home'
        },
        {
            title: 'About'
        },
        {
            title: 'Skills'
        },
        {
            title: 'Qualifications'
        },
        {
            title: 'Projects'
        },
        {
            title: 'Contact'
        }
    ]
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLogo href=''>
                    Developer
                </StyledLogo>
                <StyledItems>
                    {navItemList.map((item: Item, index: number) => {
                        return <StyledItem key={index}>{item.title}</StyledItem>
                    })}
                </StyledItems>
                <DarkModeContainer>
                    <BsSun size={25} color={'#e7e100'} />
                    <DarkModeButtonContainer>
                        <DarkModeButton onClick={DarkMode} toggle={toggle}/>
                    </DarkModeButtonContainer>
                    <BsFillMoonFill size={25} color={'gray'} />
                </DarkModeContainer>

            </StyledNav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: var(--z-fixed);
    height:80px;
    background-color: white;
    padding: 0px 100px;


`
const StyledLogo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0px 100px;
    height:100%;

`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:100%;
`
const DarkModeContainer = styled.div`
    display: flex;
    height:100%;
    align-items: center;
    padding:0px 30px;
`

const DarkModeButtonContainer = styled.span`
    background-color: gray;
    width:70px;
    height:30px;
    border-radius: 20px;
    padding:3px 5px;
    position: relative;
    margin:0px 30px;
    
`
const DarkModeButton = styled.button<{toggle:boolean}>` 
    position:absolute;
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: black;
    :hover{
        cursor:pointer
    }
    border-style: none;
    right:${({toggle}) => toggle ? '45px' : '5px'};
    
    transition-property: right;
    transition-duration: 0.7s;
    
    
`

const StyledItems = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
    


`

const StyledItem = styled.li`
    :hover{
        background-color: hsl(0, 0%, 20%);
        color: white;
        border-radius: 0.5rem;
        cursor:pointer;
        
    }
    text-align: center;
    -webkit-transition-property: all; /* Safari */
    -webkit-transition-duration: 0.7s; /* Safari */
    transition-property: all;
    transition-duration: 0.7s;
    padding: 10px 0px;
`