import styles from "./Button.module.scss";

interface Props {
    /**
     * 背景色
     */
    backgroundColor?: string;
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

export const Button = ({ backgroundColor, size = "medium", label, ...props }: Props) => {
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
    return (
        <button type="button" className={`${styles.button} ${buttonSizeClassName}`} {...props}>
            {label}
            <style jsx>{`
                button {
                    background-color: ${backgroundColor};
                }
            `}</style>
        </button>
    );
};
