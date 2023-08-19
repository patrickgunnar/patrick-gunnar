'use client'

import { styled } from "styled-components";


interface ParagraphWrapperProps {
    children: React.ReactNode
}

const ParagraphContainer = styled.p`
    box-sizing: border-box;
    padding: 0 10px;
    margin: .5rem;

    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 400;
    font-size: larger;

    height: auto;
    width: 100%;
`

const ParagraphWrapper: React.FC<ParagraphWrapperProps> = ({ children }) => {
    return (
        <ParagraphContainer>
            {children}
        </ParagraphContainer>
    );
}
 
export default ParagraphWrapper;
