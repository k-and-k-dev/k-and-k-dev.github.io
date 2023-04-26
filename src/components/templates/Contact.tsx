"use client";
import React, { MouseEventHandler, useRef } from "react";
import styled from "styled-components";
import { Spacer } from "../atoms/Spacer";
import { Title } from "../atoms/Title";

const sendMailApiUrl = "https://0cl8izsuwe.execute-api.ap-northeast-1.amazonaws.com/v1/send";

type Props = {
    marginTop: string;
};

export const Contact = ({ marginTop }: Props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const nameKanjiRef = useRef<HTMLInputElement>(null);
    const nameHuriganaRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const submitBtnToggle: MouseEventHandler = async (e) => {
        if (document.forms[0].reportValidity()) {
            // 入力検証成功時にリロードさせない
            e.preventDefault();
        } else {
            // 入力検証失敗時は何もしない
            return;
        }

        // 送信確認ダイアログ表示
        if (!window.confirm("送信してよろしいですか？")) {
            return;
        }

        // Nullチェック
        if (!formRef.current) throw Error("formRef is not assigned");
        if (!nameKanjiRef.current) throw Error("nameKanjiRef is not assigned");
        if (!nameHuriganaRef.current) throw Error("nameHuriganaRef is not assigned");
        if (!emailRef.current) throw Error("emailRef is not assigned");
        if (!subjectRef.current) throw Error("subjectRef is not assigned");
        if (!messageRef.current) throw Error("messageRef is not assigned");

        // API Gateway経由でSESメール送信
        const res = await fetch(sendMailApiUrl, {
            method: "POST",
            body: JSON.stringify({
                form: {
                    name_kanji: nameKanjiRef.current.value,
                    name_hurigana: nameHuriganaRef.current.value,
                    email: emailRef.current.value,
                    subject: subjectRef.current.value,
                    message: messageRef.current.value,
                },
            }),
        });
        const resJson = await res.json();
        console.log(resJson);

        // フォームの入力をリセット
        formRef.current.reset();
    };

    return (
        <>
            <Spacer size={marginTop} />
            <SContact>
                <Title>お問い合わせ</Title>
                <SContactContent>
                    葬儀、法要、その他お問い合わせにつきましては、下記の通りお電話かメールにてご連絡下さい。
                </SContactContent>
                <SContactTell>
                    <SContactTellTitle>お電話でのお問い合わせ</SContactTellTitle>
                    <SContactTellHr></SContactTellHr>
                    <SContactTellContent>
                        <a href="tel:047-488-5809">
                            <u>047-488-5809</u>
                        </a>
                    </SContactTellContent>
                </SContactTell>
                <SContactMail>
                    <SContactMailTitle>メールでのお問い合わせ</SContactMailTitle>
                    <SContactMailHr></SContactMailHr>
                    <SContactMailContent>
                        下記専用フォームにて必要事項を入力後、送信ボタンを押して下さい。
                        <br />
                        数日中にご回答差し上げますが、万が一返信のない場合には再度送信いただくか、お電話にてご連絡ください。
                    </SContactMailContent>
                </SContactMail>
                <SContactForm action="#" name="contactForm" ref={formRef}>
                    <SContactFormArea>
                        <SContactFormAreaRequiredDt>
                            <span>お名前（漢字）</span>
                        </SContactFormAreaRequiredDt>
                        <SContactFormAreaDd>
                            <SContactFormInput type="text" ref={nameKanjiRef} required></SContactFormInput>
                        </SContactFormAreaDd>
                        <SContactFormAreaRequiredDt>
                            <span>お名前（フリガナ）</span>
                        </SContactFormAreaRequiredDt>
                        <SContactFormAreaDd>
                            <SContactFormInput type="text" ref={nameHuriganaRef} required></SContactFormInput>
                        </SContactFormAreaDd>
                        <SContactFormAreaRequiredDt>
                            <span>メールアドレス</span>
                        </SContactFormAreaRequiredDt>
                        <SContactFormAreaDd>
                            <SContactFormInput type="email" ref={emailRef} required></SContactFormInput>
                        </SContactFormAreaDd>
                        <SContactFormAreaOptionDt>
                            <span>件名</span>
                        </SContactFormAreaOptionDt>
                        <SContactFormAreaDd>
                            <SContactFormInput type="text" ref={subjectRef}></SContactFormInput>
                        </SContactFormAreaDd>
                        <SContactFormAreaRequiredDt>
                            <span>お問い合わせ内容</span>
                        </SContactFormAreaRequiredDt>
                        <SContactFormAreaDd>
                            <SContactFormTextArea name="message" ref={messageRef} required></SContactFormTextArea>
                        </SContactFormAreaDd>
                        <SContactFormConfirm>
                            ご入力内容をご確認の上、お間違いがなければ送信ボタンを押してください。
                        </SContactFormConfirm>
                        <SContactFormSubmitBtn type="submit" onClick={submitBtnToggle}>
                            送信
                        </SContactFormSubmitBtn>
                    </SContactFormArea>
                </SContactForm>
            </SContact>
        </>
    );
};

const SContact = styled.section`
    width: 90%;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

const SContactContent = styled.p`
    width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    /* text-align: left; */
    text-align: center;
    line-height: 1.5;
    color: #2c2c2c;
`;

const SContactTell = styled.div`
    margin-top: 30px;
`;

const SContactTellTitle = styled.p``;

const SContactTellHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const SContactTellContent = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    color: #0000ff;
`;

const SContactMail = styled.div`
    margin-top: 30px;
`;

const SContactMailTitle = styled.p``;

const SContactMailHr = styled.hr`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`;

const SContactMailContent = styled.p`
    width: 90%;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    /* text-align: left; */
    text-align: center;
    font-size: 16px;
    line-height: 1.8em;
`;

const SContactForm = styled.form`
    max-width: 90%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    @media screen and (max-width: 767px) {
        max-width: 100%;
    }
`;

const SContactFormArea = styled.dl`
    background-color: #f8f8f8;
    border: 1px solid #aaaaaa;
    padding: 10px 30px;
    display: flex;
    flex-wrap: wrap;
`;

const SContactFormAreaRequiredDt = styled.dt`
    width: 200px;
    padding: 15px 0;
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
    &::after {
        content: "必須";
        font-size: 11px;
        color: #eb4f32;
        margin-left: 10px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        padding-bottom: 0;
    }
`;

const SContactFormAreaOptionDt = styled.dt`
    width: 200px;
    padding: 15px 0;
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
    &::after {
        content: "";
        font-size: 11px;
        /* color: #eb4f32; */
        margin-left: 10px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        padding-bottom: 0;
    }
`;

const SContactFormAreaDd = styled.dd`
    width: calc(100% - 200px);
    padding: 15px 0;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

const SContactFormInput = styled.input`
    width: 100%;
    max-width: 280px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
`;

const SContactFormTextArea = styled.textarea`
    width: 100%;
    height: 260px;
    padding: 10px;
    line-height: 1.5;
`;

const SContactFormConfirm = styled.p`
    width: 100%;
    font-size: 16px;
    line-height: 22px;
    /* margin-top: 30px; */
    text-align: center;
    @media screen and (max-width: 767px) {
        /* text-align: left; */
    }
`;

const SContactFormSubmitBtn = styled.button`
    width: 30%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: #f4dd64;
    display: inline-block;
    min-width: 180px;
    line-height: 48px;
    border-radius: 24px;
    /* font-family: "Montserat", sans-serif; */
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: #d8b500;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
