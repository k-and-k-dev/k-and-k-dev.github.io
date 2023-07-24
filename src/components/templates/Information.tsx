"use client";
import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";
import { InformationItemList } from "../organisms/InformationItemList";

export const InformationList = [
    {
        title: "2023.7.19 令和5年施餓鬼会のご案内",
        body: `下記の通り施餓鬼会を執り行います。
ご回向・お塔婆をご希望の方は、お電話、FAX、WEBお問い合わせ等にてお申し込み下さい。
お越しになる方は、感染防止の観点からマスク着用をお願いいたします。
【日付】8月19日(土)
【時間】
       13:30～  受付
       14:00～  法要
       15:00  解散
【場所】善福寺本堂
【備考】感染対策のため、例年行っていた昼食と法話は省略といたします`,
    },
    {
        title: "2023.4.20 令和5年こどもの日のお知らせ",
        body: `こどもの日に下記の通りささやかながらお菓子と御朱印を配布します。
お近くまで来られる方はぜひお立ち寄り下さい。
【日時】5月5日(金) 09:00～15:00
【場所】善福寺本堂前
【内容】お菓子配布、こどもの日限定の御朱印配布
※数が無くなり次第終了`,
    },
    {
        title: "2023.2.18 令和5年春季彼岸会のお知らせ",
        body: `下記の通り春季彼岸会を執り行います。
ご回向・お塔婆をご希望の方は、お電話、FAX、WEBお問い合わせ等にてお申し込み下さい。
【日時】3月21日(火) 13:00～14:00
【場所】善福寺本堂
【内容】13:00より法要、13:45より法話を行います`,
    },
    {
        title: "2023.1.1 ホームページを作成しました",
        body: `この度、当山のホームページを作成しました。寺院のお知らせなどを掲載していきます。引き続きよろしくお願いいたします。`,
    },
];

type Props = {
    marginTop: string;
    displayNum: number;
};

export const Information = ({ marginTop, displayNum }: Props) => {
    return (
        <>
            <Spacer size={marginTop} />
            <SInformation>
                <Title>お知らせ</Title>
                <InformationItemList itemList={InformationList} displayNum={displayNum} />
            </SInformation>
        </>
    );
};

const SInformation = styled.section`
    margin-top: 60px;
`;
