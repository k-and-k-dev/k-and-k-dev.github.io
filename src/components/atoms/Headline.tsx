"use client";
import styles from "./Headline.module.scss";

interface Props {
    /**
     * 枠色
     */
    borderColor?: string;
    /**
     * ラベル
     */
    label: string;
}

export const Headline = ({ borderColor, label }: Props) => {
    return (
        <h2 className={`${styles.headline}`}>
            {label}
            <style jsx>{`
                h2 {
                    border-color: ${borderColor};
                }
            `}</style>
        </h2>
    );
};
