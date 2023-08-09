'use client'

import { styled } from "styled-components";
import { useRouter } from "next/navigation";


const NavbarContainer = styled.nav`
    background: linear-gradient(to top, var(--background-007) 0%, var(--background-008) 100%);
    filter: drop-shadow(0 0 1px var(--background-006));

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, calc(92% / 7)));

    position: relative;
    height: 9%;
    width: 79%;

    > :last-child {
        padding-right: 75%;
        width: 160%;
    }
`

const NavbarOpt = styled.button`
    background: transparent;
    border: none;

    cursor: pointer;
    color: inherit;
    font-weight: 400;
    font-family: inherit;
    font-size: .85rem;

    position: relative;
    height: 100%;
    width: 100%;

    &:hover {
        background: linear-gradient(
            109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%
        );
    }

    &::after {
        content: " ";

        background: linear-gradient(to bottom, var(--background-009) 0%, var(--background-013) 100%), 
                    radial-gradient(at top center, var(--background-010) 0%, var(--background-010) 120%) 
                    var(--background-011);
        border: none;
        border-radius: 100%;

        position: absolute;
        top: 50%;
        left: 100%;
        transform: translate(-50%, -50%);
        
        height: 50%;
        width: 1px;
    }
`

const Navbar = () => {
    // get router
    const router = useRouter()

    return (
        <NavbarContainer>
            <NavbarOpt onClick={() => router.push('/')}>
                Home
            </NavbarOpt>
            <NavbarOpt onClick={() => router.push('/myself')}>
                Myself
            </NavbarOpt>
            <NavbarOpt onClick={() => router.push('/skills')}>
                Skills
            </NavbarOpt>
            <NavbarOpt onClick={() => router.push('/projects')}>
                Projects
            </NavbarOpt>
            <NavbarOpt onClick={() => router.push('/resume')}>
                Resumé
            </NavbarOpt>
            <NavbarOpt onClick={() => router.push('/contact')}>
                Contact
            </NavbarOpt>
            <NavbarOpt onClick={() => router.push('/articles')}>
                Articles
            </NavbarOpt>
        </NavbarContainer>
    );
}
 
export default Navbar;
