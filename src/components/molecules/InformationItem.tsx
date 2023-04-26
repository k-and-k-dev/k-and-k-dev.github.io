"use client";
import styled from "styled-components";
import { InformationTitle } from "../atoms/information/InformationTitle";
import { InformationHr } from "../atoms/information/InformationHr";
import { InformationBody } from "../atoms/information/InformationBody";
import { useState } from "react";

type Props = {
    title: string;
    body: string;
};

export const InformationItem = ({ title, body }: Props) => {
    const [isShowBody, setIsShowBody] = useState(false);

    const handleClick = () => {
        setIsShowBody(!isShowBody);
    };

    return (
        <SItem onClick={handleClick} draggable="true">
            <InformationTitle>{title}</InformationTitle>
            <InformationHr />
            {/* アコーディオンいったんオフ */}
            {/* {isShowBody ? (
                <SBody>
                    <InformationBody>{body}</InformationBody>
                </SBody>
            ) : (
                <></>
            )} */}
            <SBody>
                <InformationBody>{body}</InformationBody>
            </SBody>
        </SItem>
    );
};

const SItem = styled.div`
    width: 90%;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    border-radius: 5px;
    background-color: #dbf0d0;
    padding: 15px;
    color: #2c2c2c;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

const SBody = styled.div`
    margin-top: 10px;
    transition: height 0.2s linear, opacity 0.2s ease-in;
    white-space: pre-wrap;
    text-align: left;
    /* overflow: hidden; */
`;
