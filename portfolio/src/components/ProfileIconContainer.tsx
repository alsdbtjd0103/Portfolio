import React from 'react';
import styled from 'styled-components';
import {AiFillGithub,AiOutlineMail,AiOutlinePhone} from 'react-icons/ai';

export const ProfileIconContainer = () => {
    return(
        <Container>
            <Item>
            <AiFillGithub size={25}/>
            </Item>
            <Item>
                <AiOutlineMail size={25}/>
            </Item>
            <Item>
                <AiOutlinePhone size={25}/>
            </Item>

        </Container>

    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height:100%;
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px 0px;
    cursor: pointer;
`