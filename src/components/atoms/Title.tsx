"use client";
import React from "react";
import styled from "styled-components";

type Props = {
    children: React.ReactNode;
};

export const Title = ({ children }: Props) => {
    return <STitle>{children}</STitle>;
};

const STitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.17em;
    line-height: 1.8;
    color: #2c2c2c;
`;
