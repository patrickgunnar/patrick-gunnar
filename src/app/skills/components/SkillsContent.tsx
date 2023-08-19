'use client'

import { laptop } from "@/app/screens";
import ContentWrapper from "@/components/content/content-wrapper";
import { styled } from "styled-components";
import { SiCss3, SiCypress, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNextdotjs, SiPrisma, SiPusher, SiReact, SiStylelint, SiSupabase, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si";


const InnerContainer = styled.div`
    background: var(--background-001);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
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
`

const SkillsTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;

    height: 80%;
    width: 90%;

    overflow: hidden;
    overflow-y: auto;
`

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    align-items: center;
    padding: 0;

    height: 100%;
    width: 100%;
`

const ListItem = styled.li`
    background: linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;
    border: none;

    display: flex;
    justify-content: start;
    align-items: center;

    text-align: left;
    padding: 15px 20px;
    padding-left: 60px;
    position: relative;

    height: auto;
    width: 90%;
`

const ItemIcon = styled.div`
    background: linear-gradient(180.3deg, var(--background-018) 5.5%, var(--background-019) 90.2%);
    border: none;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    color: black;

    margin: 0 10px;
    left: 8px;
    position: absolute;

    height: 24px;
    aspect-ratio: 1/1;

    overflow: hidden;
`

const StrongContainer = styled.strong`
    display: inline;
    margin-right: 5px;

    height: 100%;
    width: auto;
`

const SkillsContent = () => {
    return (
        <ContentWrapper>
            <InnerContainer>
                <SkillsTitle>Technical Wizardry</SkillsTitle>
                <ContentContainer>
                    <ListContainer>
                        <ListItem>
                            <ItemIcon>
                                <SiNextdotjs size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Next.js:</StrongContainer> Crafting dynamic and interactive web applications with enhanced server-side rendering capabilities for seamless user experiences.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiReact size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>React.js:</StrongContainer> Mastering the art of creating component-based user interfaces, fostering reusability and scalability.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiTypescript size={16} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>TypeScript:</StrongContainer> Employing static typing to enhance code reliability, improve development efficiency, and catch errors early.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiTailwindcss size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Tailwind CSS:</StrongContainer> Crafting visually stunning and responsive UIs with the power of utility-first CSS classes.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiStylelint size={18} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>styled-components:</StrongContainer> Weaving styles directly into your components, enhancing modularity and encapsulation.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiJavascript size={16} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>JavaScript:</StrongContainer> Harnessing the core language for web development, enabling interactivity and dynamic functionality.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiCss3 size={16} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>CSS:</StrongContainer> Sculpting the visual aesthetics of web interfaces through cascading stylesheets, ensuring elegance and harmony.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiHtml5 size={16} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>HTML5:</StrongContainer> Building the foundation of web content, harnessing the latest standards for structure and semantics.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiMongodb size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>MongoDB:</StrongContainer> Orchestrating seamless backend operations through the power of this versatile NoSQL database.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiSupabase size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Supabase:</StrongContainer> Leveraging an open-source alternative to Firebase, ensuring real-time interactivity and data synchronization.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiPrisma size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Prisma:</StrongContainer> Streamlining database access and manipulation through an elegant ORM, boosting backend efficiency.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiPusher size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Pusher:</StrongContainer> Conjuring real-time magic with WebSocket technology, infusing dynamic interactivity into user interfaces.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiJest size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Jest:</StrongContainer> Ensuring code reliability through robust testing, building a foundation of trust in your applications.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiTestinglibrary size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Testing Library:</StrongContainer> Creating user-centric tests that mimic real interactions, validating the user experience.
                            </div>
                        </ListItem>
                        <ListItem>
                            <ItemIcon>
                                <SiCypress size={20} />
                            </ItemIcon>
                            <div>
                                <StrongContainer>Cypress:</StrongContainer> Crafting end-to-end tests that simulate user journeys, ensuring flawless functionality across scenarios.
                            </div>
                        </ListItem>
                    </ListContainer>
                </ContentContainer>
            </InnerContainer>
        </ContentWrapper>
    );
}

export default SkillsContent;
