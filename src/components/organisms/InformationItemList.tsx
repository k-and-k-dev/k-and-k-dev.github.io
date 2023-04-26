"use client";
import styled from "styled-components";
import { InformationItem } from "../molecules/InformationItem";
import { InformationList } from "../templates/Information";

type Props = {
    itemList: typeof InformationList;
    displayNum: number;
};

export const InformationItemList = ({ itemList, displayNum }: Props) => {
    return (
        <SItemList>
            {itemList.slice(0, displayNum).map((item, index) => (
                <InformationItem title={item.title} body={item.body} key={index} />
            ))}
        </SItemList>
    );
};

const SItemList = styled.div`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;
