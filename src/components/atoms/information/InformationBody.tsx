"use client";
import React from "react";
import styled from "styled-components";

type Props = {
    children: React.ReactNode;
};

export const InformationBody = ({ children }: Props) => {
    return <SBody>{children}</SBody>;
};

const SBody = styled.p`
    margin-top: 5px;
    font-size: 16px;
    line-height: 1.5;
`;
