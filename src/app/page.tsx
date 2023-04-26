"use client";
import styled from "styled-components";
import { Information } from "../components/templates/Information";
import { About } from "../components/templates/About";
import { Contact } from "../components/templates/Contact";
import { Access } from "../components/templates/Access";
import { LinkButton } from "../components/atoms/LinkButton";
import mainImage from "./../images/main.webp";

export default function Home() {
    return (
        <SMain>
            <SMainImage src={mainImage.src} alt="mainImage" />
            <Information marginTop="" displayNum={3} />
            {/* <LinkButton page="/Information">もっと見る</LinkButton> */}
            <About marginTop="" displayNum={1} />
            <LinkButton page="/about">もっと見る</LinkButton>
            <Access marginTop="" />
            <Contact marginTop="" />
        </SMain>
    );
}

const SMain = styled.main`
    margin-top: 70px;
    text-align: center;
    @media screen and (max-width: 767px) {
    }
`;

const SMainImage = styled.img`
    width: 100%;
`;
