"use client";
import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <SFooter>
            <SCopy>
                <small>&copy;善福寺 All Rights Reserved.</small>
            </SCopy>
        </SFooter>
    );
};

const SFooter = styled.footer`
    color: #ffffff;
    background-color: #1b813e;
    margin-top: 60px;
`;

const SCopy = styled.p`
    text-align: center;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
`;
