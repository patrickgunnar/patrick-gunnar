import { styled } from "styled-components";


const NavbarContainer = styled.nav`
    background: linear-gradient(to top, var(--background-007) 0%, var(--background-008) 100%);
    filter: drop-shadow(0 0 1px var(--background-006));

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    height: 9%;
    width: 79%;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            Navbar
        </NavbarContainer>
    );
}
 
export default Navbar;
