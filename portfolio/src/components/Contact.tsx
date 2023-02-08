import React from "react"
import styled from "styled-components"
import { PageContainer } from "./PageContainer"

export const Contact = () => {
    return(
        <PageContainer title='Contact' subtitle="Contact to me" id='Contact' style={{flexDirection:'column'}}>
            <Container>
                
                <div>E-mail: alsdbtjd0103@korea.ac.kr</div>
                
                
                <div>Phone: 010-8983-4927</div>
            </Container>

        </PageContainer>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    color: gray;
    font-size: 20px;
    height: 100px;
    flex-direction: column;
`