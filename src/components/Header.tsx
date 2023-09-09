/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
// react
import React, { useEffect, useState } from "react";
// next.js
import Link from "next/link";
import Image from "next/image";
// style
import styles from "./Header.module.scss";
// images
import LogoImage from "../images/logo_transparent.png";
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

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuActive]);

    return (
        <header className={styles.Header}>
            <Image
                src={LogoImage.src}
                width={180}
                height={60}
                alt="logo"
                priority={true}
                className={styles.LogoImage}
            />
            {menuActive ? (
                // メニューオープン時
                <>
                    <button onClick={toggleMenu} className={styles.ButtonIsOpen}>
                        <div className={styles.ButtonLineTop}></div>
                        <div className={styles.ButtonLineMedium}></div>
                        <div className={styles.ButtonLineBottom}></div>
                    </button>
                    <nav className={styles.MenuIsOpen}>
                        <div className={styles.MenuHeader}>MENU</div>
                        <ul className={styles.MenuList}>
                            <li className={styles.MenuListItem}>
                                <Link href={"/"} onClick={() => {}} className={styles.MenuListItemLink}>
                                    構成一覧
                                </Link>
                            </li>
                            <li className={styles.MenuListItem}>
                                <Link href={"/"} onClick={() => {}} className={styles.MenuListItemLink}>
                                    構成投稿
                                </Link>
                            </li>
                            <li className={styles.MenuListItem}>
                                <Link href={"/"} onClick={() => {}} className={styles.MenuListItemLink}>
                                    問い合わせ
                                </Link>
                            </li>
                            {/* {navList.map((item, index) => (
                        <li key={index} className={styles.MenuListItem}>
                            <Link href={item.link} onClick={menuBtnToggle} className={styles.MenuListItemLink}>
                                {item.body}
                            </Link>
                        </li>
                    ))} */}
                        </ul>
                    </nav>
                    <div className={styles.OverlayIsOpen} />
                </>
            ) : (
                // メニュークローズ時
                <>
                    <button onClick={toggleMenu} className={styles.Button}>
                        <div className={styles.ButtonLineTop}></div>
                        <div className={styles.ButtonLineMedium}></div>
                        <div className={styles.ButtonLineBottom}></div>
                    </button>
                    <nav className={styles.Menu}>
                        <div className={styles.MenuHeader}>MENU</div>
                        <ul className={styles.MenuList}>
                            <li className={styles.MenuListItem}>
                                <Link href={"/"} onClick={() => {}} className={styles.MenuListItemLink}>
                                    構成一覧
                                </Link>
                            </li>
                            <li className={styles.MenuListItem}>
                                <Link href={"/"} onClick={() => {}} className={styles.MenuListItemLink}>
                                    構成投稿
                                </Link>
                            </li>
                            <li className={styles.MenuListItem}>
                                <Link href={"/"} onClick={() => {}} className={styles.MenuListItemLink}>
                                    問い合わせ
                                </Link>
                            </li>
                            {/* {navList.map((item, index) => (
                        <li key={index} className={styles.MenuListItem}>
                            <Link href={item.link} onClick={menuBtnToggle} className={styles.MenuListItemLink}>
                                {item.body}
                            </Link>
                        </li>
                    ))} */}
                        </ul>
                    </nav>
                    <div className={styles.Overlay} />
                </>
            )}
        </header>
    );
};
