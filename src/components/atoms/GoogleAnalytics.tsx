import Script from "next/script";

const ANALYTICS_ID = "G-JQHXTWX271";

export const GoogleAnalytics = () => {
    if (process.env.NODE_ENV !== "production") {
        return <></>;
    }

    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${ANALYTICS_ID}');
                `}
            </Script>
        </>
    );
};
