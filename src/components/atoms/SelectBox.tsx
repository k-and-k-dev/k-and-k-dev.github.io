"use client";
import styles from "./SelectBox.module.scss";

interface Props {
    /**
     * アイテムリスト
     */
    itemList: string[];
}

export const SelectBox = ({ itemList }: Props) => {
    return (
        <label className={styles.label}>
            <select>
                {itemList.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
                <option></option>
            </select>
        </label>
    );
};
