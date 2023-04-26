"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { scrollToTop } from "../Header";
import { BaseButton } from "./BaseButton";

type Props = {
    page: string;
    children: React.ReactNode;
};

export const LinkButton = ({ page, children }: Props) => {
    const menuBtnToggle = () => {
        scrollToTop();
    };

    return (
        <SButton>
            <Link href={page} onClick={menuBtnToggle}>
                {children}
            </Link>
        </SButton>
    );
};

const SButton = styled(BaseButton)``;
