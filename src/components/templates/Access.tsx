"use client";
import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";

type Props = {
    marginTop: string;
};

export const Access = ({ marginTop }: Props) => {
    return (
        <>
            <Spacer size={marginTop} />
            <SAccess>
                <Title>アクセス</Title>
                <SAccessMap>
                    <SAccessMapIframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.46028154752884!2d140.11923203357935!3d35.75077893898744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022875e54a13eb3%3A0x85fe3b2e8814c895!2z5rWE5Zyf5a6XIOWWhOemj-Wvug!5e0!3m2!1sja!2sjp!4v1672043172770!5m2!1sja!2sjp"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></SAccessMapIframe>
                </SAccessMap>
                <SAccessAddress>
                    <SAccessAddressTitle>
                        <SAccessAddressTitleSub>浄土宗</SAccessAddressTitleSub>
                        <SAccessAddressTitleMain>善福寺</SAccessAddressTitleMain>
                    </SAccessAddressTitle>
                    <SAccessAddressContent>
                        〒276-0015
                        <br />
                        千葉県八千代市米本2077
                        <br />
                        TEL: 047-488-5809
                        <br />
                        FAX: 047-488-5810
                    </SAccessAddressContent>
                </SAccessAddress>
                <SAccessDirectionPublic>
                    <SAccessDirectionPublicTitle>公共交通機関をご利用の場合</SAccessDirectionPublicTitle>
                    <SAccessDirectionPublicHr></SAccessDirectionPublicHr>
                    <SAccessDirectionPublicContent>
                        京成電鉄「勝田台」駅下車
                        <br />
                        東洋バス「米本団地」行きに乗車し約14分
                        <br />
                        「米本神社前」下車後、徒歩約7分
                    </SAccessDirectionPublicContent>
                </SAccessDirectionPublic>
                <SAccessDirectionCar>
                    <SAccessDirectionCarTitle>お車でお越しの場合</SAccessDirectionCarTitle>
                    <SAccessDirectionCarHr></SAccessDirectionCarHr>
                    <SAccessDirectionCarContent>
                        国道16号線「米本神社前」交差点を
                        <br />
                        千葉北IC方向からお越しの場合は右折
                        <br />
                        柏IC方向からお越しの場合は左折
                        <br />
                        すぐの突き当りを左折し200m
                        <br />
                        ※鐘楼堂より手前の空き場所に駐車願います
                    </SAccessDirectionCarContent>
                </SAccessDirectionCar>
            </SAccess>
        </>
    );
};

const SAccess = styled.section`
    width: 90%;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
`;

const SAccessMap = styled.div`
    max-width: 100%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px) {
        width: 500px;
        max-width: 100%;
    }
`;

const SAccessMapIframe = styled.iframe`
    display: block;
    width: 90%;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    border: 0;
    @media screen and (max-width: 767px) {
        width: 100%;
        /* width: 500px; */
        max-width: 100%;
        height: 240px;
    }
`;

const SAccessAddress = styled.div`
    margin-top: 10px;
`;

const SAccessAddressTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SAccessAddressTitleSub = styled.p`
    letter-spacing: 0.17em;
    line-height: 1.5;
`;

const SAccessAddressTitleMain = styled.p`
    font-size: 24px;
    letter-spacing: 0.17em;
    line-height: 1.5;
    color: #2c2c2c;
    margin-left: 5px;
`;

const SAccessAddressContent = styled.p`
    line-height: 1.5;
    color: #2c2c2c;
`;

const SAccessDirectionPublic = styled.div`
    margin-top: 30px;
`;

const SAccessDirectionPublicTitle = styled.p``;

const SAccessDirectionPublicHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const SAccessDirectionPublicContent = styled.p`
    margin-top: 5px;
    line-height: 1.8em;
`;

const SAccessDirectionCar = styled.div`
    margin-top: 30px;
`;

const SAccessDirectionCarTitle = styled.p``;

const SAccessDirectionCarHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const SAccessDirectionCarContent = styled.p`
    margin-top: 5px;
    line-height: 1.8em;
`;
