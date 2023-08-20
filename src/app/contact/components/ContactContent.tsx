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
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;

    max-height: 95%;

    @media only screen and (min-width: ${laptop}) {
        padding: 30px;
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

const ContactTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    margin-top: 0;

    height: auto;
    width: 100%;
`

const ContactButton = styled.button`
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
    margin: 50px;
    margin-bottom: 0;

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

const InputWrapper = styled.div`
    box-sizing: border-box;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;
`

const Input = styled.input`
    box-sizing: border-box;
    background: linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);

    border: none;
    border-radius: 12px;
    filter: drop-shadow(0 0 1px var(--background-006));

    padding: 10px;
    outline: none;
    caret-color: firebrick;

    font-family: inherit;
    font-weight: 400;
    font-size: medium;
    color: white;

    height: 50px;
    width: 100%;
`

const TextArea = styled.textarea`
    box-sizing: border-box;
    background: linear-gradient(109.6deg, var(--background-015) 11.2%, var(--background-014) 51.2%, var(--background-005) 98.6%);

    border: none;
    border-radius: 12px;
    filter: drop-shadow(0 0 1px var(--background-006));

    padding: 10px;
    resize: none;
    outline: none;
    caret-color: firebrick;

    font-family: inherit;
    font-weight: 400;
    font-size: medium;
    color: white;

    height: 200px;
    width: 100%;
`

const ContactContent = () => {
    return (
        <ContentContainer>
            <InnerContainer>
                <ContactTitle>Enigmatic Convergence: Reach Out</ContactTitle>
                <InputWrapper>
                    <Input type="text" placeholder="Signature Mark (name)" />
                    <Input type="email" placeholder="Cyberink Channel (e-mail)" />
                    <TextArea placeholder="Compose Your Enigma (message)"></TextArea>
                </InputWrapper>
                <ContactButton>Cipher Transmit</ContactButton>
            </InnerContainer>
        </ContentContainer>
    );
}
 
export default ContactContent;
