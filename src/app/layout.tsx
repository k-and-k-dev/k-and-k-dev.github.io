import "./layout.css";
import { Zen_Old_Mincho } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/atoms/GoogleAnalytics";

const zen_old_mincho = Zen_Old_Mincho({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "浄土宗善福寺",
    description:
        "千葉県八千代市米本にある浄土宗のお寺「善福寺」の公式サイトです。最譽貞庵上人を開基開山として、天正18年（1590年）に創建されました。",
    themeColor: "#000000",
    formatDetection: {
        telephone: false,
    },
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="ja" className={zen_old_mincho.className}>
                <GoogleAnalytics />
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
