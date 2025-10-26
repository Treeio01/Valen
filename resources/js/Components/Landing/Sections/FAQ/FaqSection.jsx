import FaqQuestion from "@/Components/Landing/Sections/FAQ/FaqQuestion.jsx";
import SectionHeader from "@/Components/Landing/ui/SectionHeader.jsx";

export default function FaqSection() {
    const faqsLeft = [
        {
            q: "Is Valen a trading bot?",
            a: "No. Valen doesn’t trade for you — it only manages your profits automatically and adapts to your rhythm.",
        },
        {
            q: "Can I control how Valen acts?",
            a: "Yes. You can set everything manually or switch to AI mode for automatic optimization.",
        },
        {
            q: "How does the token work?",
            a: "Every operation generates a small protocol fee. 50% of bought-back tokens are burned, 50% are airdropped to active users. ",
        },
        {
            q: "Who is Valen for?",
            a: "For Solana traders who want to protect profit, automate discipline, and trade with less emotion.",
        },
    ];

    const faqsRight = [
        {
            q: "Does Valen hold my funds?",
            a: "Never. All actions happen directly on-chain through your wallet. Valen is completely non-custodial.",
        },
        {
            q: "What happens when the market drops?",
            a: "The Auto Reload feature can use part of your USDC to buy SOL back — turning dips into opportunities. ",
        },
        {
            q: "How will I know when Valen acts?",
            a: "You’ll receive instant Telegram alerts for every fix, reload, and milestone.",
        },
        {
            q: "When is the official launch?",
            a: "Valen launches on Solana mainnet in mid-October 2025, with AI Mode and token integration live from day one.",
        },
    ];

    return (
        <div id={"faq"} className="flex flex-col items-center w-full max-w-[1250px] mt-[120px] gap-[30px]" data-aos="fade-up" data-aos-duration="900">
            <SectionHeader section={"FAQ"} title={"Frequently asked questions"} description={"Clear answers for calm trading."} dataAosDelay="80" />
            <div className="flex w-full lg:flex-row flex-col justify-center gap-[20px]">
                <div className="flex flex-col gap-[20px]">
                    {faqsLeft.map((item, index) => (
                        <FaqQuestion
                            key={`left-${index}`}
                            index={index}
                            item={item}
                            dataAosDelay={`${120 + index * 60}`}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-[20px]">
                    {faqsRight.map((item, index) => (
                        <FaqQuestion
                            key={`right-${index}`}
                            index={index}
                            item={item}
                            dataAosDelay={`${150 + index * 60}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
