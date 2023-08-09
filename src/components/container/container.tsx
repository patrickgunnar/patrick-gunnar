'use client'

import { styled } from "styled-components";


interface ContainerProps {
    children: React.ReactNode
}

const ContainerContent = styled.div`
    background: var(--background-002);
    backdrop-filter: blur(4px);
    border-top: 1.5px solid var(--background-003);
    border-left: 1px solid var(--background-003);
    border-right: 1px solid var(--background-003);
    border-bottom: 2px solid var(--background-003);
    border-radius: 12px;
    clip-path: polygon(0% 15%, 0 0, 15% 0%, 71% 0, 79% 9%, 100% 9%, 100% 85%, 100% 100%, 85% 100%, 8% 100%, 0 89%, 0 89%);

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    padding: 15px;

    height: 75%;
    width: 70%;
    overflow: hidden;
`

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <ContainerContent>
            {children}
        </ContainerContent>
    );
}
 
export default Container;
