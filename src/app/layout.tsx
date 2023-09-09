// sytle
import "./global.css";
import styles from "./layout.module.scss";
// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { GoogleAnalytics } from "@/components/atoms/GoogleAnalytics";

export const metadata = {
    title: "TFTFans",
    description:
        "TFT FANSは、チームファイト タクティクス（TFT）の構成をユーザーが投稿・閲覧できるサイトです。これこそ最強だと思う構成を是非投稿してみて下さい。",
    themeColor: "#000000",
    icons: {
        icon: "./favicon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="ja">
                <head>{/* <GoogleAnalytics /> */}</head>
                <body className={styles.body}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
