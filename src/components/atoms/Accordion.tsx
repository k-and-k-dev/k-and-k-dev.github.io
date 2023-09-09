"use client";
import styles from "./Accordion.module.scss";

interface Props {
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ラベル
     */
    label: string;
    /**
     * コンテンツ
     */
    content: string;
    /**
     * クリックハンドラ
     */
    onClick?: () => void;
}

/*
export const Accordion = ({ backgroundColor, label, content, ...props }: Props) => {
    return (
        <details>
            <summary>
                <span className={styles.summary_inner}>
                    概要<span className={styles.icon}></span>
                </span>
            </summary>
            <div className={styles.content}>折りたたまれている部分です。</div>
        </details>
    );
};
*/

export const Accordion = ({ backgroundColor, label, content, ...props }: Props) => {
    return (
        <details className={`${styles.details}`} {...props}>
            <summary>{label}</summary>
            <p>{content}</p>
            <style jsx>{`
                details {
                    background-color: ${backgroundColor};
                }
            `}</style>
        </details>
    );
};
