'use client'

import { laptop } from "@/app/screens";
import ContentWrapper from "@/components/content/content-wrapper";
import DockWrapper from "@/components/content/dock-wrapper";
import ParagraphWrapper from "@/components/content/paragraph-wrapper";
import TextWrapper from "@/components/content/text-wrapper";
import TitleWrapper from "@/components/content/title-wrapper";
import Image from "next/image";
import { styled } from "styled-components";


const DockContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
    height: auto;
    width: auto;

    @media only screen and (min-width: ${laptop}) {
        margin: 0;
        height: 100%;
    }
`

const ImageContainer = styled.div`
    filter: drop-shadow(0 0 1px var(--background-006));
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 100%;
    margin: 15px auto;
    margin-top: 25px;

    aspect-ratio: 1/1;
    height: 130px;

    overflow: hidden;
`

const NameContainer = styled.h3`
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 700;
    text-align: center;

    margin-top: 0;
    margin-bottom: 5px;
    height: auto;
    width: 100%;
`

const LabelContainer = styled.label`
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 400;
    text-align: center;

    margin-top: 0;
    height: auto;
    width: 100%;
`

const BioContainer = styled.p`
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    text-align: center;

    height: auto;
    width: 100%;

    overflow: hidden;
    overflow-y: auto;
`

const MyselfContent = () => {
    return (
        <ContentWrapper>
            <DockContainer>
                <DockWrapper margin="left: 2%;">
                    <ImageContainer>
                        <Image
                            src="/image/patrick-gunnar.png"
                            alt="Patrick Gunnar"
                            style={{ objectFit: 'cover' }}
                            width={130}
                            height={130}
                        />
                    </ImageContainer>
                    <NameContainer>Patrick Gunnar</NameContainer>
                    <LabelContainer>Masterful Full-Stack Web Artisan</LabelContainer>
                    <BioContainer>
                        🌌 Transmuting Dreams into Code | ✨ Fusing Tech with Creative Essence | 🚀 Navigating Algorithms, Stroke by Stroke | 🌟 Sculpting Exquisite Digital Solutions
                    </BioContainer>
                </DockWrapper>
            </DockContainer>
            <TextWrapper margin="left: 22%;">
                <TitleWrapper>
                    A warm embrace, fellow traveler of the digital ether,
                </TitleWrapper>
                <ParagraphWrapper>
                    kindred soul who walks the labyrinth of words. As I guide your steps through the corridors of my existence, allow me to unveil the enigmatic tapestry that is my world, one imbued with precision, creativity, mystique, and intelligence.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Picture a man of introverted essence, whose thirst for knowledge is rivaled only by his love for the craft of programming. A conjurer of digital realms, I seamlessly weave the threads of Next.js, React.js, TypeScript, and more, creating experiences that resonate with a mysteriously intelligent allure.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Let me share a secret—I'm an autodidact, a seeker of truths who embraces the languages of the web and the languages of the soul. Through my own effort, I've harnessed the power of English speech and the symphony of website creation. Like a modern-day mage, I've summoned knowledge from the depths of my being.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Fantasy, oh how it dances in the alcoves of my mind! "Lord of the Rings," a cherished tome, takes me on journeys to realms unknown. But the silver screen also beckons, with "O Auto da Compadecida" and "Cruella" whispering tales of shadows and light, mirroring my own intricate nature.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Ah, music—a language that needs no translation. From Britney Spears' ethereal melodies to Guns 'n' Roses' thunderous crescendos, my playlist echoes with the diversity of my soul. Yet, my heart beats to the indie and MPB rhythms, a realm where Rita Lee reigns as the queen of Brazilian rock. Cássia Eller, Pitty, Renato Russo, Raul Seixas, and Manu Gavassi add layers of melody to my existence, a symphony of sonic exploration.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    From the heart of Brazil's embrace, I emerge, a steward of the Mineiro culture. In the kitchen, I am both alchemist and artisan, summoning flavors that pay homage to my roots. Pão de Queijo, a delicacy that embodies the essence of Minas Gerais, captivates my palate with its enchanting blend of cheese, particularly the smoky allure of Mineiro cheese.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    And to you, dear reader, I extend an invitation to partake in the symphony of my existence. With precision and creativity, I craft digital wonders that resonate with your deepest desires. As you traverse this labyrinth of words, may you feel the warmth of my narrative embrace, a connection woven with threads of intimacy and intelligence.
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Thus, I stand before you—an artisan of the web, an explorer of realms both real and virtual, a guardian of culture, and a purveyor of the mystique that makes life an enigmatic masterpiece.
                </ParagraphWrapper>
            </TextWrapper>
        </ContentWrapper>
    );
}

export default MyselfContent;
