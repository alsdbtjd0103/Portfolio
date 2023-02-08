import React from "react"
import styled from "styled-components"
import { PageContainer } from "./PageContainer"

export const Contact = () => {
    return(
        <PageContainer title='Contact' subtitle="Contact to me" id='Contact' style={{flexDirection:'column'}}>
            <Container>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                <div>E-mail: alsdbtjd0103@korea.ac.kr</div>
                <div>alsdbtjd89@gmail.com</div>
                </div>
                <div>Phone: 010-8983-4927</div>
            </Container>

        </PageContainer>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    
    flex-direction: column;
`