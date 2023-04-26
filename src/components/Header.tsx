/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Yuji_Boku } from "next/font/google";
import styled from "styled-components";
import logoImage from "./../images/logo.png";
import MenuIconImage from "./../images/icon-menu.png";
import { NavigationList } from "./organisms/NavigationList";
import { TwitterButton } from "./atoms/TwitterButton";

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto",
    });
};

export const navList = [
    { link: "/", isImage: false, body: "ホーム" },
    { link: "/information", isImage: false, body: "お知らせ" },
    { link: "/about", isImage: false, body: "当山について" },
    { link: "/contact", isImage: false, body: "お問い合わせ" },
];

const yuji_boku = Yuji_Boku({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const logoBtnToggle = () => {
        scrollToTop();
    };

    const menuBtnToggle = () => {
        setMenuActive(!menuActive);
        scrollToTop();
    };

    return (
        <SHeader>
            <SHeaderInner>
                <SLogoContainer>
                    <SLogoImage>
                        <Link href="/" onClick={logoBtnToggle}>
                            <img src={logoImage.src} alt="logo" width={50} height={50} />
                        </Link>
                    </SLogoImage>
                    <SLogoTextDenomination className={yuji_boku.className}>浄土宗</SLogoTextDenomination>
                    <SLogoTextTemple className={yuji_boku.className}>善福寺</SLogoTextTemple>
                </SLogoContainer>
                <SButton onClick={menuBtnToggle}></SButton>
                {menuActive ? (
                    <SMenuActive>
                        <NavigationList navList={navList} callback={menuBtnToggle} />
                        <SMenuSNSArea>
                            <TwitterButton />
                        </SMenuSNSArea>
                    </SMenuActive>
                ) : (
                    <SMenu>
                        <NavigationList navList={navList} callback={() => {}} />
                    </SMenu>
                )}
                <SSNSArea>
                    <TwitterButton />
                </SSNSArea>
            </SHeaderInner>
        </SHeader>
    );
};

const SHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    height: 70px;
    z-index: 10;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 767px) {
    }
`;

const SHeaderInner = styled.div`
    max-width: 1200px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 767px) {
        padding-left: 0px;
        padding-right: 0px;
        position: relative;
    }
`;

const SLogoContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
    }
`;

const SLogoImage = styled.p`
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px;
    @media screen and (max-width: 767px) {
    }
`;

const SLogoTextDenomination = styled.p`
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #2c2c2c;
`;

const SLogoTextTemple = styled.p`
    font-size: 40px;
    letter-spacing: 0.3em;
    color: #2c2c2c;
    margin-left: 10px;
`;

const SButton = styled.button`
    display: none;
    @media screen and (max-width: 767px) {
        display: block;
        width: 44px;
        height: 34px;
        background-image: url(${MenuIconImage.src});
        background-size: 50%;
        background-position: center;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        border-radius: 0;
        outline: none;
    }
`;

const SMenu = styled.div`
    @media screen and (max-width: 767px) {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        color: #ffffff;
        background-color: #1b813e;
        padding-top: 30px;
        padding-bottom: 50px;
    }
`;

const SMenuActive = styled(SMenu)`
    @media screen and (max-width: 767px) {
        display: block;
    }
`;

const SSNSArea = styled.div`
    display: block;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const SMenuSNSArea = styled.div`
    width: 32px;
    height: 32px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;
