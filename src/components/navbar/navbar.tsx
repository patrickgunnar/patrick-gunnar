'use client'

import { styled } from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { laptop } from "@/app/screens";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5"


const NavbarContainer = styled.section`
    background: linear-gradient(to top, var(--background-007) 0%, var(--background-008) 100%);
    filter: drop-shadow(0 0 1px var(--background-006));

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    height: 9%;
    width: 79%;
`

const DesktopNav = styled.nav`
    display: none;
    grid-template-columns: repeat(auto-fit, minmax(0, calc(92% / 6)));

    height: 100%;
    width: 100%;

    > :last-child {
        padding-right: 75%;
        width: 160%;
    }

    @media only screen and (min-width: ${laptop}) {
        display: grid;
    }
`

const NavbarOpt = styled.button<{ disabled: boolean }>`
    background: ${(props) => props.disabled ? (
        'linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);'
    ) : (
        'transparent'
    )
    };
    border: none;

    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    color: inherit;
    font-weight: 400;
    font-family: 'Tektur', cursive;
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

const MobileContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;

    @media only screen and (min-width: ${laptop}) {
        display: none;
    }
`

const MobileMenu = styled.button<{ open: boolean }>`
    background: ${(props) => props.open ? (
        'linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);'
    ) : (
        'transparent'
    )
    };
    border: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    color: inherit;
    font-weight: 400;
    font-family: inherit;
    font-size: .85rem;

    position: relative;
    height: 100%;
    aspect-ratio: 1/1;

    &:focus {
        background: transparent;
    }

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

const MobileLabel = styled.label`
    padding: 0 5px;
    padding-right: 20px;

    text-align: start;
    font-size: .8rem;
    font-weight: 400;
    font-family: 'Orbitron', sans-serif;

    white-space: nowrap;      
    overflow: hidden;         
    text-overflow: ellipsis;

    height: fit-content;
    width: 75%;
`

const MobileNav = styled.nav`
    background: linear-gradient(180.2deg, var(--background-017) 6.8%, var(--background-016) 131%);
    border: none;

    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(0, calc(100% / 6)));

    position: absolute;
    z-index: 100;
    top: 9%;

    height: 91%;
    width: 100%;

    @media only screen and (min-width: ${laptop}) {
        display: none;
    }
`

const options = ['Home', 'Myself', 'Skills', 'Projects', 'Resumé', 'Contact']

const Navbar = () => {
    // get router
    const router = useRouter()
    // current pathname
    const pathname = usePathname()

    // open mobile menu
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

    // route handler
    const handleRouting = (route: string) => {
        router.push(route)

        // if isMobileOpen is true
        if (isMobileOpen) setIsMobileOpen(false)
    }

    // open mobile menu handler
    const handleMobileOpen = (state: boolean) => {
        setIsMobileOpen(!state)
    }

    // remove accents handler
    const handleAccentsRemove = (str: string) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }

    // menu options
    const menuOptions = (
        <>
            {
                options.map(item => {
                    const currentOpt = `/${item !== 'Home' ? handleAccentsRemove(item) : ''}`

                    return (
                        <NavbarOpt key={item} 
                            onClick={() => handleRouting(currentOpt)} disabled={pathname === currentOpt}
                        >
                            {item}
                        </NavbarOpt>
                    )
                })
            }
        </>
    )

    return (
        <>
            <NavbarContainer>
                <DesktopNav>
                    {menuOptions}
                </DesktopNav>
                <MobileContainer>
                    <MobileMenu open={isMobileOpen} onClick={() => handleMobileOpen(isMobileOpen)} data-testid="mobileMenuBtn">
                        {
                            isMobileOpen ? (
                                <IoClose size={19} />
                            ) : (
                                <IoMenu size={19} />
                            )
                        }
                    </MobileMenu>
                    <MobileLabel>
                        {pathname === '/' && 'Home: Engaging Introduction'}
                        {pathname === '/myself' && 'Myself: The Web Artisan!'}
                        {pathname === '/skills' && 'Skills: Expert Proficiency'}
                        {pathname === '/projects' && 'Projects: Innovative Showcases'}
                        {pathname === '/resume' && 'Resumé: Accomplishments Summary'}
                        {pathname === '/contact' && 'Contact: Connection Details'}
                    </MobileLabel>
                </MobileContainer>
            </NavbarContainer>
            {
                isMobileOpen && (
                    <MobileNav>
                        {menuOptions}
                    </MobileNav>
                )
            }
        </>
    );
}

export default Navbar;
