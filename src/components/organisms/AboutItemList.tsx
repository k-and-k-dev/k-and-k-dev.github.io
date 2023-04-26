"use client";
import styled from "styled-components";
import { AboutItem } from "../molecules/AboutItem";
import { AboutList } from "../templates/About";

type Props = {
    itemList: typeof AboutList;
    displayNum: number;
};

export const AboutItemList = ({ itemList, displayNum }: Props) => {
    return (
        <SItemList>
            {itemList.slice(0, displayNum).map((item, index) => (
                <AboutItem title={item.title} image={item.image.src} body={item.body} key={index} />
            ))}
        </SItemList>
    );
};

const SItemList = styled.div`
    margin-top: 30px;
`;
