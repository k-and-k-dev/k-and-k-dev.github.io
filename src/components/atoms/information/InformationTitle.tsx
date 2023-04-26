"use client";
import React from "react";
import styled from "styled-components";

type Props = {
    children: React.ReactNode;
};

export const InformationTitle = ({ children }: Props) => {
    return <STitle>{children}</STitle>;
};

const STitle = styled.p`
    line-height: 1.8;
`;
