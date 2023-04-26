"use client";
import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";
import { AboutItemList } from "../organisms/AboutItemList";
import mainHall from "./../../images/mainHall.webp";
// import receptionHall from "./../../images/receptionHall.webp";
import bellTower from "./../../images/bellTower.webp";
// import cemetery from "./../../images/cemetery.webp";

export const AboutList = [
    {
        title: "本堂",
        image: mainHall,
        body: "大正5年（1916年）に火災に遭い、それまで建っていた本堂が全焼したため、当時の阿曽村神野区（現在の八千代市神野）の養蚕場の建造物を購入し、移築改装して仮本堂としておりました。その後、多くの方のご協力を得て、平成12年5月に現在の本堂を再建いたしました。",
    },
    // {
    //     title: "客殿",
    //     image: "",
    //     body: "本堂の再建と共に、この客殿も併せて建立いたしました。当山での法事の際にはこちらにお越しいただき、法要の準備が整うまでお待ちいただきます。",
    // },
    {
        title: "鐘楼堂",
        image: bellTower,
        body: "本堂の再建と共に、鐘楼堂も併せて建立いたしました。毎年大晦日には御参詣の方々にご自由に鐘を撞いていただいております。",
    },
    // {
    //     title: "墓地",
    //     image: "",
    //     body: "本堂の裏手には墓地を有しております。墓地の一角には立ち地蔵と呼ばれるお地蔵様が鎮座しており、当山から少し離れた場所にある坐り地蔵（八千代市指定有形文化財）と競い合ったという伝説が、現在でも語り継がれています。",
    // },
];

type Props = {
    marginTop: string;
    displayNum: number;
};

export const About = ({ marginTop, displayNum }: Props) => {
    return (
        <>
            <Spacer size={marginTop} />
            <SAbout>
                <Title>当山について</Title>
                <STitleParagraph>
                    当山は、千葉県八千代市米本にある浄土宗の寺院です。
                    <br />
                    正式名称は、光明山攝取院善福寺です。
                    <br />
                    最譽貞庵上人を開基開山として、安土桃山時代である天正18年（1590年）に創建されました。
                </STitleParagraph>
                <AboutItemList itemList={AboutList} displayNum={displayNum} />
            </SAbout>
        </>
    );
};

const SAbout = styled.section`
    width: 90%;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
    align-items: center;
    text-align: center;
`;

const STitleParagraph = styled.p`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`;
