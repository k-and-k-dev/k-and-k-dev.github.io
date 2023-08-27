/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
// react
import React, { useState } from "react";
// next.js
import Link from "next/link";
import Image from "next/image";
// style
import styles from "./Header.module.scss";
// images
import IconImage from "../images/icon.png";
import BannerImage from "../images/banner.png";
import MenuIconImage from "../images/icon-menu.png";
// components
import { NavigationList } from "./organisms/NavigationList";

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto",
    });
};

export const navList = [
    { link: "/", isImage: false, body: "構成一覧" },
    { link: "/comp", isImage: false, body: "構成投稿" },
];

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
        <header className={styles.header}>
            <div className={styles.header_container}>
                <button className={styles.menu_button} onClick={menuBtnToggle}>
                    <Image src={MenuIconImage.src} width={44} height={34} alt="メニュー" />
                </button>
            </div>
            {menuActive ? (
                <div className={styles.menu_active}>
                    <NavigationList navList={navList} callback={menuBtnToggle} />
                </div>
            ) : (
                <div className={styles.menu}>
                    <NavigationList navList={navList} callback={() => {}} />
                </div>
            )}
        </header>
    );
};
