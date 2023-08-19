'use client'

import { laptop } from "@/app/screens";
import { styled } from "styled-components";


interface DockWrapperProps {
    children: React.ReactNode
}

const DockContainer = styled.div`
    background: var(--background-001);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
    height: auto;
    width: 90%;

    @media only screen and (min-width: ${laptop}) {
        margin-bottom: 0;
        align-self: center;
        position: fixed;
        right: 2%;
        width: 20%;
    }
`

const DockWrapper: React.FC<DockWrapperProps> = ({ children }) => {
    return (
        <DockContainer>
            {children}
        </DockContainer>
    );
}
 
export default DockWrapper;
