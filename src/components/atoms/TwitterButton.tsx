"use client";
import styled from "styled-components";
import IconImage from "../../images/icon-twitter-square.png";

export const TwitterButton = () => {
    return (
        <SButton target="_blank" href="https://twitter.com/jodo_zempukuji" rel="noopener noreferrer">
            <img src={IconImage.src} alt="Twitter Icon" width={32} height={32} />
        </SButton>
    );
};

const SButton = styled.a`
    display: block;
    width: 32px;
    height: 32px;
`;
