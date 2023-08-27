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
        <nav className={styles.nav}>
            <ul>
                {navList.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} onClick={callback}>
                            {item.body}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
