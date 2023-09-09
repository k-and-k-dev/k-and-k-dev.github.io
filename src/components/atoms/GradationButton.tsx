"use client";
import styles from "./GradationButton.module.scss";

interface Props {
    /**
     * 背景色（左）
     */
    leftColor?: string;
    /**
     * 背景色（右）
     */
    rightColor?: string;
    /**
     * 大きさ
     */
    size?: "small" | "medium" | "large";
    /**
     * ラベル
     */
    label: string;
    /**
     * クリックハンドラ
     */
    onClick?: () => void;
}

export const GradationButton = ({ leftColor, rightColor, size = "medium", label, ...props }: Props) => {
    let buttonSizeClassName;
    switch (size) {
        case "small":
            buttonSizeClassName = styles.small;
            break;
        case "medium":
            buttonSizeClassName = styles.medium;
            break;
        case "large":
            buttonSizeClassName = styles.large;
            break;
    }
    const backgroundColorStyle = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    return (
        <button type="button" className={`${styles.button} ${buttonSizeClassName}`} {...props}>
            {label}
            <style jsx>{`
                button {
                    background: ${backgroundColorStyle};
                }
            `}</style>
        </button>
    );
};
