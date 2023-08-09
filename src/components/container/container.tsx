'use client'

import { styled } from "styled-components";


interface ContainerProps {
    children: React.ReactNode
}

const ContainerContent = styled.div`
    background: linear-gradient(
        109.6deg, var(--background-001) 11.2%, var(--background-002) 51.2%, var(--background-003) 98.6%
    );
    border-top: 1.5px outset var(--background-004);
    border-left: 1px outset var(--background-004);
    border-right: 1px outset var(--background-004);
    border-bottom: 2px outset var(--background-004);
    border-radius: 12px;
    clip-path: polygon(0% 15%, 0 0, 15% 0%, 71% 0, 79% 9%, 100% 9%, 100% 85%, 100% 100%, 85% 100%, 8% 100%, 0 89%, 0 89%);
    filter: drop-shadow(0 0 1px var(--background-006));

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    padding: 15px;
    top: 50%;
    bottom: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);

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
