import styled from "styled-components"
import React from "react"
import { ProfileIconContainer } from "./ProfileIconContainer"
import profileImage from '../Image/profile.jpeg';
import { Link } from "react-scroll";



export const Home = () => {
    return (
        <>
            <IconsContainer>
                <ProfileIconContainer />
            </IconsContainer>
            <Container>
                <span style={{
                    fontSize: '30px',
                    marginBottom: '30px',
                }}>민유성</span>
                <div style={{
                    borderStyle: 'solid',
                    borderWidth: '0.001px',
                    borderColor: '#d0d0d0',
                    width: '100%',
                    marginBottom: '20px'
                }}></div>
                <span style={{
                    fontSize: '15px',
                    color: 'gray',
                    marginBottom: '200px'
                }}>
                    언제나 더 나은 미래를 꿈꾸고 있는 개발자입니다!
                </span>

                <StyledButton>연락하기</StyledButton>

            </Container>
            <ImageContainer src={profileImage}>

            </ImageContainer>
        </>
    )
}

const IconsContainer = styled.div`
    width: 5%;
    height:100%;
`

const Container = styled.div`
    display: flex;
    width:40%;
    height: 50%;
    align-items: flex-start;
    flex-direction: column;
    /* border-style: solid;
    border-width: 1px; */
    padding: 20px 50px;
`

const StyledButton = styled.button`
    background-color: black;
    border-style: none;
    border-radius: 10px;
    color:white;
    width:100px;
    height:50px;
    font-size: 17px;
    padding:5px 10px;
    :hover{
        opacity: 0.75;
        box-shadow: 2px 2px 2px gray;

    }
    cursor: pointer;
    
`

const ImageContainer = styled.img`
    width: 250px;
    height:auto;
    
`

