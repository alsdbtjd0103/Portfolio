import React from 'react';
import styled from "styled-components";

export const Header: React.FC = () => {
    type Item = {
        title: string;
        href?: string;
        icon?: string
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
                <a href=''>
                    Developer
                </a>
                <StyledNav>
                    <StyledItems>
                    {navItemList.map((item: Item, index: number) => {
                        return <StyledItem key={index}>{item.title}</StyledItem>
                    })}
                    </StyledItems>
                </StyledNav>
            </StyledNav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: var(--z-fixed);
`

const StyledNav = styled.nav`
    

`

const StyledItems = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

const StyledItem = styled.li`
    :hover{
        background-color: hsl(0, 0%, 20%);
        color: white;
        border-radius: 0.5rem;
        cursor:pointer;
        
    }
    -webkit-transition-property: all; /* Safari */
    -webkit-transition-duration: 0.7s; /* Safari */
    transition-property: all;
    transition-duration: 0.7s;

`