import KeyFeaturesBlock from "@/Components/Landing/Sections/KeyFeatures/KeyFeaturesBlock.jsx";
import BorderGradient from "@/Components/Landing/ui/BorderGradient.jsx";
import SectionHeader from "@/Components/Landing/ui/SectionHeader.jsx";

export default function KeyFeatures() {
    return (
        <div
            id={"key-features"}
            className="flex flex-col gap-[30px] mt-[120px] items-center w-full max-w-[1250px] z-50"
            data-aos="fade-up"
            data-aos-duration="900"
        >
            <SectionHeader section={"Key Features"} title={"Core features that make Valen stand out"} dataAosDelay="80"/>

            <div className="flex gap-[20px] flex-wrap justify-center w-full">
                <KeyFeaturesBlock maxWidth={403} number={"1"} firstText={"Telegram Alerts"} secondText={"Real-time updates directly to your Telegram: every profit fix, reload, or milestone — fully transparent."}
                img={<img src="/img/key-features-1.png" className={"absolute bottom-0 right-0"} alt=""/>} dataAosDelay="120"
                />
                <KeyFeaturesBlock maxWidth={404} number={"2"} firstText={"Profit Vault"} secondText={"A built-in savings layer that sets aside a small percentage of every fixed profit — building stability over time."}
                                 img={<img src="/img/key-features-2.png" className={"absolute bottom-0 right-0"} alt=""/>} dataAosDelay="170"
                />
                <KeyFeaturesBlock maxWidth={403} number={"3"} firstText={"Manual or AI control"} secondText={"Choose how Valen works: define your own parameters, or let AI handle it based on your behavior."}
                                 img={<img src="/img/key-features-3.png" className={"absolute top-0 right-0"} alt=""/>} dataAosDelay="220"
                />
                <KeyFeaturesBlock maxWidth={615} number={"4"} firstText={"AI Mode"} secondText={"Valen learns your trading rhythm — when you take profits, how often you trade, and how you react to the market. It adapts automatically, fixing profits at the right moments without overtrading."}
                                 img={<img src="/img/key-features-4.png" className={"absolute bottom-0 right-0"} alt=""/>} dataAosDelay="270"
                />
                <KeyFeaturesBlock maxWidth={615} number={"5"} firstText={"Seamless Integration"} secondText={"Works directly with your Solana wallet — no custody, no friction, no hidden steps."}
                                 img={<img src="/img/key-features-5.png" className={"absolute bottom-0 right-0"} alt=""/>} dataAosDelay="320"
                />
            </div>
        </div>
    )
}
