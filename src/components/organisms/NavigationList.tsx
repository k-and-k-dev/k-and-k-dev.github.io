"use client";
import styled from "styled-components";
import { navList } from "../Header";
import Link from "next/link";

type Props = {
    navList: typeof navList;
    callback: React.MouseEventHandler;
};

export const NavigationList = ({ navList, callback }: Props) => {
    return (
        <SNav>
            <ul>
                {navList.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} onClick={callback}>
                            {item.body}
                        </Link>
                    </li>
                ))}
            </ul>
        </SNav>
    );
};

const SNav = styled.nav`
    ul {
        display: flex;
        @media screen and (max-width: 767px) {
            display: block;
            text-align: center;
        }
    }
    li {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: auto;
        margin-bottom: auto;
        @media screen and (max-width: 767px) {
            margin-top: 20px;
        }
    }
`;
