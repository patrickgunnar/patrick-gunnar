'use client'

import { laptop } from "@/app/screens";
import { styled } from "styled-components";


interface TextWrapperProps {
    children: React.ReactNode
    margin: string
}

const ContentWrapper = styled.div<{ margin: string }>`
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
        width: 75%;

        ${ props => props.margin }
    }
`

const TextWrapper: React.FC<TextWrapperProps> = ({ children, margin }) => {
    return (
        <ContentWrapper margin={margin}>
            {children}
        </ContentWrapper>
    );
}
 
export default TextWrapper;
