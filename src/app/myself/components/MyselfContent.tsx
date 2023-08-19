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
                <TitleWrapper>Title</TitleWrapper>
                <ParagraphWrapper>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Ultrices mi tempus imperdiet nulla malesuada pellentesque. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Dolor sit amet consectetur adipiscing elit. Semper viverra nam libero justo laoreet sit. Diam in arcu cursus euismod. Volutpat ac tincidunt vitae semper quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Feugiat in ante metus dictum at tempor commodo ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Egestas congue quisque egestas diam in arcu cursus euismod. Malesuada bibendum arcu vitae elementum. Quis auctor elit sed vulputate mi sit amet mauris.

                    Urna id volutpat lacus laoreet non. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nisl suscipit adipiscing bibendum est ultricies integer. Congue eu consequat ac felis donec et odio pellentesque diam. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Sed viverra tellus in hac habitasse platea dictumst. Curabitur gravida arcu ac tortor. At urna condimentum mattis pellentesque id nibh. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Mauris in aliquam sem fringilla. Aenean sed adipiscing diam donec adipiscing tristique risus. Feugiat scelerisque varius morbi enim. Justo nec ultrices dui sapien. Magna eget est lorem ipsum dolor. Ipsum faucibus vitae aliquet nec ullamcorper. Ullamcorper eget nulla facilisi etiam dignissim.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Ultrices gravida dictum fusce ut placerat orci nulla. Ultrices mi tempus imperdiet nulla malesuada pellentesque. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Dolor sit amet consectetur adipiscing elit. Semper viverra nam libero justo laoreet sit. Diam in arcu cursus euismod. Volutpat ac tincidunt vitae semper quis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Feugiat in ante metus dictum at tempor commodo ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Egestas congue quisque egestas diam in arcu cursus euismod. Malesuada bibendum arcu vitae elementum. Quis auctor elit sed vulputate mi sit amet mauris.

                    Urna id volutpat lacus laoreet non. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nisl suscipit adipiscing bibendum est ultricies integer. Congue eu consequat ac felis donec et odio pellentesque diam. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Sed viverra tellus in hac habitasse platea dictumst. Curabitur gravida arcu ac tortor. At urna condimentum mattis pellentesque id nibh. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Mauris in aliquam sem fringilla. Aenean sed adipiscing diam donec adipiscing tristique risus. Feugiat scelerisque varius morbi enim. Justo nec ultrices dui sapien. Magna eget est lorem ipsum dolor. Ipsum faucibus vitae aliquet nec ullamcorper. Ullamcorper eget nulla facilisi etiam dignissim.
                </ParagraphWrapper>
            </TextWrapper>
        </ContentWrapper>
    );
}
 
export default MyselfContent;
