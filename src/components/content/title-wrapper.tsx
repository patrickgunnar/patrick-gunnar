'use client'

import { styled } from "styled-components";


interface TitleWrapperProps {
    children: React.ReactNode
}

const TitleContainer = styled.h3`
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 700;
    font-size: larger;

    height: auto;
    width: 100%;
`

const TitleWrapper: React.FC<TitleWrapperProps> = ({ children }) => {
    return (
        <TitleContainer>
            {children}
        </TitleContainer>
    );
}
 
export default TitleWrapper;
