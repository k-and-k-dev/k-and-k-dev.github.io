"use client";
import styles from "./Accordion.module.scss";

interface Props {
    /**
     * 枠色
     */
    borderColor?: string;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ラベルカラー
     */
    labelColor?: string;
    /**
     * ラベル
     */
    label: string;
    /**
     * コンテンツ
     */
    content: string;
}

export const Accordion = ({ borderColor, backgroundColor, labelColor, label, content, ...props }: Props) => {
    return (
        <details className={`${styles.details}`} {...props}>
            <summary>{label}</summary>
            <p>{content}</p>
            <style jsx>{`
                details {
                    border-color: ${borderColor};
                    background-color: ${backgroundColor};
                    color: ${labelColor};
                }
            `}</style>
        </details>
    );
};
