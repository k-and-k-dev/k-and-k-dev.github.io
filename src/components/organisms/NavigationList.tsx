// next
import Link from "next/link";
// style
import styles from "./NavigationList.module.scss";
// components
import { navList } from "../Header";

type Props = {
    navList: typeof navList;
    callback: React.MouseEventHandler;
};

export const NavigationList = ({ navList, callback }: Props) => {
    return (
        <nav className={styles.Menu}>
            <div className={styles.MenuHeader}>
                <ul className={styles.MenuList}>
                    {navList.map((item, index) => (
                        <li key={index} className={styles.MenuListItem}>
                            <Link href={item.link} onClick={callback} className={styles.MenuListItemLintk}>
                                {item.body}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
