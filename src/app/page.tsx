// style
import { Accordion } from "@/components/atoms/Accordion";
import styles from "./page.module.scss";
import { Headline } from "@/components/atoms/Headline";
import { SelectBox } from "@/components/atoms/SelectBox";
import { GradationButton } from "@/components/atoms/GradationButton";

export default function Home() {
    return (
        <main className={styles.Main}>
            <div className={styles.headline_comp}>
                <Headline label="構成一覧" borderColor="#ee2560" />
            </div>
            <div className={styles.comp_ui}>
                <div className={styles.filter_sort}>
                    <div className={styles.selectbox_filter}>
                        <SelectBox itemList={["13.17", "13.16b", "13.16", "13.15"]} />
                    </div>
                    <div className={styles.selectbox_sort}>
                        <SelectBox itemList={["新着順", "人気順"]} />
                    </div>
                </div>
                <div className={styles.button_post}>
                    <GradationButton label="構成を投稿" leftColor="#89f7fe" rightColor="#66a6ff" />
                </div>
            </div>
            <Accordion
                label="スレイヤーグウェン"
                content="ああああああああああああああああああああああああああああああああああああああ"
                borderColor="#66a6ff"
                backgroundColor="#f4ffff"
                labelColor="#333333"
            />
        </main>
    );
}
