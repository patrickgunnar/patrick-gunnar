'use client'

import { styled } from "styled-components";
import { useRouter, usePathname } from "next/navigation";


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

const NavbarOpt = styled.button<{ disabled: boolean }>`
    background: ${
        (props) => props.disabled ? (
            'linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);'
        ) : (
            'transparent'
        )
    };
    border: none;

    cursor: ${ (props) => props.disabled ? 'default' : 'pointer' };
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
    // current pathname
    const pathname = usePathname()

    // route handler
    const handleRouting = (route: string) => {
        router.push(route)
    }

    return (
        <NavbarContainer>
            <NavbarOpt onClick={() => handleRouting('/')} disabled={pathname === '/'}>
                Home
            </NavbarOpt>
            <NavbarOpt onClick={() => handleRouting('/myself')} disabled={pathname === '/myself'}>
                Myself
            </NavbarOpt>
            <NavbarOpt onClick={() => handleRouting('/skills')} disabled={pathname === '/skills'}>
                Skills
            </NavbarOpt>
            <NavbarOpt onClick={() => handleRouting('/projects')} disabled={pathname === '/projects'}>
                Projects
            </NavbarOpt>
            <NavbarOpt onClick={() => handleRouting('/resume')} disabled={pathname === '/resume'}>
                Resumé
            </NavbarOpt>
            <NavbarOpt onClick={() => handleRouting('/contact')} disabled={pathname === '/contact'}>
                Contact
            </NavbarOpt>
            <NavbarOpt onClick={() => handleRouting('/articles')} disabled={pathname === '/articles'}>
                Articles
            </NavbarOpt>
        </NavbarContainer>
    );
}
 
export default Navbar;
