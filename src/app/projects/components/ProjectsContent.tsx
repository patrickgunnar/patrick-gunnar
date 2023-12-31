"use client";

import { laptop, tablet } from "@/app/screens";
import Image from "next/image";
import { styled } from "styled-components";

const ContentWrapper = styled.div`
    box-sizing: border-box;

    background: var(--background-001);
    filter: drop-shadow(0 0 1px var(--background-006));
    border: none;
    border-radius: 12px;

    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    position: relative;
    padding: 5px;

    height: 95%;
    width: 95%;

    @media only screen and (min-width: ${tablet}) {
        padding: 10px;
    }

    @media only screen and (min-width: ${laptop}) {
        margin-top: 0;
        height: 90%;
        width: 90%;
    }
`;

const ContentContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: start;

    padding: 5px;
    height: 100%;
    width: 100%;

    overflow: hidden;
    overflow-y: auto;

    @media only screen and (min-width: ${tablet}) {
        padding: 10px;
        width: 98%;
    }
`;

const ListItem = styled.div`
    background: linear-gradient(
        109.6deg,
        var(--background-015) 11.2%,
        var(--background-014) 51.2%,
        var(--background-005) 98.6%
    );
    filter: drop-shadow(0 0 1px var(--background-006));
    box-sizing: border-box;
    border-radius: 12px;
    border: none;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    position: relative;

    height: auto;
    width: 100%;

    overflow: hidden;

    @media only screen and (min-width: ${tablet}) {
        padding: 20px;
    }

    @media only screen and (min-width: ${laptop}) {
        width: 45%;
    }
`;

const ProjectTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;
`;

const StrongContainer = styled.strong`
    display: inline;

    height: 100%;
    width: auto;
`;

const Frame = styled.div`
    background: white;
    border: none;
    border-radius: 12px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    aspect-ratio: 4/2;
    width: 100%;

    overflow: hidden;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0;
    margin-bottom: 20px;
    height: auto;
    width: 100%;

    @media only screen and (min-width: ${tablet}) {
        flex-direction: row;
        gap: 30px;
        margin: 40px 0;
        width: 90%;
    }
`;

const Button = styled.button`
    background: linear-gradient(
        to top,
        var(--background-007) 0%,
        var(--background-008) 100%
    );
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
    padding: 10px;

    height: 2.5rem;
    width: 80%;

    &:hover {
        background: linear-gradient(
            109.6deg,
            var(--background-015) 11.2%,
            var(--background-014) 51.2%,
            var(--background-005) 98.6%
        );
    }

    @media only screen and (min-width: ${laptop}) {
        padding: 15px;
    }
`;

const projects = [
    {
        name: "OrionRent",
        url: "https://orionrent.vercel.app/",
        img: "/image/orionrent-app.png",
        github: "https://github.com/patrickgunnar/orion-rent-app",
    },
    {
        name: "Thorpad",
        url: "https://thorpad.vercel.app/",
        img: "/image/thorpad-app.png",
        github: "https://github.com/patrickgunnar/thorpad-app",
    },
    {
        name: "Coralus",
        url: "https://coralus.vercel.app/",
        img: "/image/coralus-app.png",
        github: "https://github.com/patrickgunnar/coralus-app",
    },
    {
        name: "VirgoChat",
        url: "https://virgochat.vercel.app/",
        img: "/image/virgochat-app.png",
        github: "https://github.com/patrickgunnar/virgo-app",
    },
    {
        name: "Atomico",
        url: "https://atomico-todo-app.vercel.app/",
        img: "/image/atomico-app.png",
        github: "https://github.com/patrickgunnar/atomico-todo-app",
    },
    {
        name: "SunTime",
        url: "https://sun-time-app.vercel.app/",
        img: "/image/suntime-app.png",
        github: "https://github.com/patrickgunnar/sun-time-app",
    },
    {
        name: "Spotify Clone",
        url: "https://spt-player.vercel.app/",
        img: "/image/spotify-clone.png",
        github: "https://github.com/patrickgunnar/spotify-clone",
    },
    {
        name: "Airbnb Clone",
        url: "https://rbnb-site.vercel.app/",
        img: "/image/airbnb-clone.png",
        github: "https://github.com/patrickgunnar/airbnb-clone",
    },
];

const ProjectsContent = () => {
    // open in new window handler
    const handleProjectOpen = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <ContentWrapper>
            <ContentContainer>
                {projects.map(async ({ name, url, github, img }) => (
                    <ListItem key={name}>
                        <ProjectTitle>
                            <StrongContainer>{name}</StrongContainer>
                        </ProjectTitle>
                        <Frame>
                            <Image
                                style={{ objectFit: "cover" }}
                                src={img}
                                alt={name}
                                fill
                            />
                        </Frame>
                        <ButtonWrapper>
                            <Button onClick={() => handleProjectOpen(github)}>
                                Github
                            </Button>
                            <Button onClick={() => handleProjectOpen(url)}>
                                Live
                            </Button>
                        </ButtonWrapper>
                    </ListItem>
                ))}
            </ContentContainer>
        </ContentWrapper>
    );
};

export default ProjectsContent;
