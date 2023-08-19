'use client'

import { laptop } from "@/app/screens";
import { styled } from "styled-components";


interface TextWrapperProps {
    children: React.ReactNode
}

const ContentWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 20px 0;

    padding: 10px;
    height: auto;
    width: 100%;

    @media only screen and (min-width: ${laptop}) {
        position: relative;
        left: 2%;
        width: 75%;
    }
`

const TextWrapper: React.FC<TextWrapperProps> = ({ children }) => {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    );
}
 
export default TextWrapper;
