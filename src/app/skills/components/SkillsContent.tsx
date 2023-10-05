'use client'

import { laptop, laptopL } from "@/app/screens";
import ContentWrapper from "@/components/content/content-wrapper";
import { styled } from "styled-components";
import { 
    SiCss3, SiCypress, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNextdotjs, 
    SiPrisma, SiPusher, SiReact, SiStylelint, SiSupabase, SiTailwindcss, 
    SiTestinglibrary, SiTypescript, SiRedux, SiPython
} from "react-icons/si";


const InnerContainer = styled.div`
    box-sizing: border-box;
    background: var(--background-001);
    filter: drop-shadow(0 0 1px var(--background-006));
    border: none;
    border-radius: 12px;

    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    position: relative;
    margin-top: 10px;

    height: 95%;
    width: 95%;

    @media only screen and (min-width: ${laptop}) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin-top: 0;

        height: 90%;
        width: 90%;
    }

    @media only screen and (min-width: ${laptopL}) {
        gap: 50px;
    }
`

const SkillsTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    margin-bottom: 0;

    height: auto;
    width: 100%;
`

const ContentContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;

    padding: 15px;
    padding-top: 5px;
    height: auto;
    width: 90%;

    overflow: hidden;
    overflow-y: auto;
`

const ListItem = styled.div`
    background: linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;
    border: none;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;
    position: relative;

    height: auto;
    width: 250px;
`

const StrongContainer = styled.strong`
    display: inline;

    height: 100%;
    width: auto;
`

const skills = [
    { name: 'Next.js', icon: SiNextdotjs }, { name: 'React.js', icon: SiReact }, { name: 'TypeScript', icon: SiTypescript },
    { name: 'Redux', icon: SiRedux }, { name: 'Tailwind', icon: SiTailwindcss }, { name: 'styled-components', icon: SiStylelint }, 
    { name: 'JavaScript', icon: SiJavascript }, { name: 'Python', icon: SiPython }, { name: 'CSS', icon: SiCss3 }, 
    { name: 'HTML5', icon: SiHtml5 }, { name: 'MongoDB', icon: SiMongodb }, { name: 'Supabase', icon: SiSupabase }, 
    { name: 'Prisma', icon: SiPrisma }, { name: 'Pusher', icon: SiPusher }, { name: 'Jest', icon: SiJest }, 
    { name: 'Testing Library', icon: SiTestinglibrary }, { name: 'Cypress', icon: SiCypress },
]

const SkillsContent = () => {
    return (
        <ContentWrapper>
            <InnerContainer>
                <SkillsTitle>Technical Wizardry</SkillsTitle>
                <ContentContainer>
                    {
                        skills.map(({ name, icon: Icon }) => (
                            <ListItem key={name}>
                                <Icon size={50} />
                                <StrongContainer>{name}</StrongContainer>
                            </ListItem>
                        ))
                    }
                </ContentContainer>
            </InnerContainer>
        </ContentWrapper>
    );
}

export default SkillsContent;
