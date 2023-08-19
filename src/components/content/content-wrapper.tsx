'use client'

import { laptop } from "@/app/screens";
import { styled } from "styled-components";


interface ContentWrapperProps {
    children: React.ReactNode
}

const ContentContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    position: relative;
    height: 100%;
    width: 100%;

    overflow: hidden;
    overflow-y: auto;

    @media only screen and (min-width: ${laptop}) {
        flex-direction: row;
        justify-content: start;
        align-items: start;
    }
`

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
    return (
        <ContentContainer data-testid="contentWrapper">
            {children}
        </ContentContainer>
    );
}
 
export default ContentWrapper;
