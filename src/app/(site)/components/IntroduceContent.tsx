'use client'

import { laptop } from "@/app/screens";
import { styled } from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";


const ContentWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 100%;
    width: 100%;

    overflow: hidden;
    overflow-y: auto;

    @media only screen and (min-width: ${laptop}) {
        flex-direction: row;
        justify-content: center;
    }
`

const TextWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    padding: 10px;
    height: auto;
    width: 100%;

    @media only screen and (min-width: ${laptop}) {
        width: 75%;
    }
`

const TitleWrapper = styled.h3`
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 700;
    font-size: larger;

    height: auto;
    width: 100%;
`

const ParagraphWrapper = styled.p`
    box-sizing: border-box;
    padding: 0 10px;
    margin: .5rem;

    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 400;
    font-size: larger;

    height: auto;
    width: 100%;
`

const DockWrapper = styled.div`
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
        width: 20%;
    }
`

const TitleFrame = styled.label`
    background: linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border: none;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;

    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 700;
    text-align: center;

    padding: 15px;
    height: auto;
    width: 100%;
`

const ProfileWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    align-items: center;

    padding: 10px;
    height: 100%;
    width: 92%;

    overflow: hidden;
    overflow-y: auto;

    @media only screen and (min-width: ${laptop}) {
        margin: 10px 0;
        height: auto;
    }
`

const ProfileButton = styled.button`
    background: linear-gradient(to top, var(--background-007) 0%, var(--background-008) 100%);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;
    border: none;

    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    color: var(--background-006);
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
        height: 4rem;
        width: 100%;
    }
`

const ProfileLabel = styled.label`
    font-family: inherit;
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
    cursor: pointer;

    height: auto;
    width: auto;
`

const IntroduceContent = () => {
    // open profile in new window handler
    const handleProfileOpen = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <ContentWrapper>
            <TextWrapper>
                <TitleWrapper>
                    Salutations, kindred explorer of the digital realm,
                </TitleWrapper>
                <ParagraphWrapper>
                    Within this ethereal sanctuary, I am the architect of intricate code and boundless imagination. Armed with a palette of cutting-edge technologies, I embark on a voyage to shape enchanting digital landscapes that captivate the curious and beckon the inquisitive.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    As a fervent advocate of innovation, I meld artistry and precision, using the likes of Next.js and React.js to breathe life into ideas. This sacred space is where I unite the tangible and the intangible, crafting not just websites, but captivating experiences that linger in the realm of the extraordinary.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Let us traverse this expanse together, igniting pixels with wonder and forging a symphony of ingenuity.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Amidst the rhythmic dance of pixels and code, I am driven by a thirst for mastery. TypeScript flows through my veins, empowering me to transform visions into reality with graceful efficiency. Each line of code becomes a brushstroke on the canvas of the digital cosmos, a manifestation of my dedication to precision and creativity.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    As we embark on this collaborative journey, envision the virtual tapestries we shall weave. With every click, scroll, and interaction, we shall unveil worlds where technology harmonizes with imagination, creating moments of awe that transcend the ordinary. Join me, and together, let&apos;s sculpt a narrative where innovation knows no bounds and every pixel pulsates with the heartbeat of a captivating tale.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    In this realm of endless possibilities, I extend my hand to you, fellow explorer. Let curiosity guide our steps as we craft, create, and conjure the future of the digital landscape.
                </ParagraphWrapper>
            </TextWrapper>
            <DockWrapper>
                <TitleFrame>Harmonizing Tunes</TitleFrame>
                <ProfileWrapper>
                    <ProfileButton onClick={() => handleProfileOpen('https://www.linkedin.com/in/patrickgunnar/')}>
                        <BsLinkedin size={35} />
                        <ProfileLabel>Connect: LinkedIn Journey</ProfileLabel>
                    </ProfileButton>
                    <ProfileButton onClick={() => handleProfileOpen('https://github.com/patrickgunnar')}>
                        <FaGithubSquare size={35} />
                        <ProfileLabel>Explore: My GitHub Odyssey</ProfileLabel>
                    </ProfileButton>
                    <ProfileButton onClick={() => handleProfileOpen('https://www.instagram.com/patrickgunnar')}>
                        <FaInstagramSquare size={35} />
                        <ProfileLabel>Code Chronicles: Instagram</ProfileLabel>
                    </ProfileButton>
                    <ProfileButton onClick={() => handleProfileOpen('https://www.tiktok.com/@patrickgunnar')}>
                        <FaTiktok size={35} />
                        <ProfileLabel>Coding Adventures: TikTok</ProfileLabel>
                    </ProfileButton>
                </ProfileWrapper>
            </DockWrapper>
        </ContentWrapper>
    );
}
 
export default IntroduceContent;
