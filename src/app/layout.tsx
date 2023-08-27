// sytle
import "./layout.module.scss";
// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { GoogleAnalytics } from "@/components/atoms/GoogleAnalytics";

export const metadata = {
    title: "TFTFans",
    description: "TFT（チームファイトタクティクス）のファンサイトです。自由気ままに構築記事を作成できます。",
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
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
