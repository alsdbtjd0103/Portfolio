import React from 'react';
import styled from 'styled-components';
import {AiFillGithub,AiOutlineMail,AiOutlinePhone} from 'react-icons/ai';

export const ProfileIconContainer = () => {
    return(
        <Container>
            <Item href='https://github.com/alsdbtjd0103' target={'_blank'}>
            <AiFillGithub size={25}/>
            </Item>
            <Item href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=alsdbtjd0103@korea.ac.kr' target='_blank'>
                <AiOutlineMail size={25}/>
            </Item>
            <Item title='010-8983-4927'>
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

const Item = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px 0px;
    cursor: pointer;
`