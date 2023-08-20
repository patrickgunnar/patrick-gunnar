'use client'

import { laptop, laptopL } from "@/app/screens";
import { styled } from "styled-components";


const ContentContainer = styled.div`
    box-sizing: border-box;
    background: var(--background-001);
    filter: drop-shadow(0 0 1px var(--background-006));
    border: none;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: auto;
    width: auto;

    max-height: 95%;
    max-width: 95%;

    @media only screen and (min-width: ${laptop}) {
        max-height: 80%;
        max-width: 80%;
    }
`

const InnerContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    padding: 30px;
    height: 95%;
    width: 95%;

    overflow: hidden;
    overflow-y: auto;
`

const ResumeTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;

    height: auto;
    width: 100%;
`

const TextWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 20px 0;

    padding: 10px;
    position: relative;

    height: auto;
    width: 100%;

    @media only screen and (min-width: ${laptop}) {
        overflow: hidden;
        overflow-y: auto;
    }
`

const ResumeButton = styled.button`
    background: linear-gradient(to top, var(--background-007) 0%, var(--background-008) 100%);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;
    border: none;

    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    color: var(--background-006);
    font-weight: bold;
    padding: 10px;

    height: 3.5rem;
    width: 90%;

    &:hover {
        background: linear-gradient(
            109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%
        );
    }

    @media only screen and (min-width: ${laptop}) {
        padding: 15px;
        width: 100%;
    }

    @media only screen and (min-width: ${laptopL}) {
        height: 4rem;
    }
`

const cvUrl = 'https://drive.google.com/file/d/11aCm-uq8FNzILcX0IMPZLSaOWEtMJZ5s/view?usp=sharing'

const ResumeContent = () => {
    // cv page open handler
    const handleCVOpen = () => {
        window.open(cvUrl, '_blank')
    }

    return (
        <ContentContainer>
            <InnerContainer>
                <ResumeTitle>Digital Craftsmanship Envisioned</ResumeTitle>
                <TextWrapper>
                    Step into the realm of my digital journey, where meticulous lines of code dance in harmony with boundless creativity. As you venture through the virtual tapestry I've woven, you'll find a fusion of precision and artistry that defines my path as a seasoned web artisan. With a toolkit that encompasses the elegance of Next.js, React.js, and Tailwind CSS, I've conjured digital experiences that resonate with an enigmatic allure. As you navigate this repository of my aspirations, allow me to extend an invitation for you to uncover the symphony of my skills and passions encapsulated within my meticulously crafted curriculum vitae. Download it now, and let my journey unfold before you—a testament to the marriage of technical prowess and imaginative finesse.
                </TextWrapper>
                <ResumeButton onClick={handleCVOpen}>Uncover Brilliance</ResumeButton>
            </InnerContainer>
        </ContentContainer>
    );
}
 
export default ResumeContent;
