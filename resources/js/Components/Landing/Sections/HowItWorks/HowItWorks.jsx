import HowItWorksBlock from "@/Components/Landing/Sections/HowItWorks/HowItoWorksBlock.jsx";
import BorderGradient from "@/Components/Landing/ui/BorderGradient.jsx";
import SectionHeader from "@/Components/Landing/ui/SectionHeader.jsx";

export default function HowItWorks(){
    return (
        <div id={"how-it-works"} className="flex flex-col gap-[30px] mt-[120px] items-center w-full max-w-[1250px] z-50">
            <SectionHeader section={"How it works"} title={"Simple steps. Real control"} />
            <div className="flex gap-[20px] flex-wrap justify-center w-full">
                <HowItWorksBlock maxWidth={332} number={"1"} firstText={"Connect"} secondText={"Connect your Solana wallet."}
                img={<img src="/img/how-it-works-1.png" className={"absolute bottom-0 right-0"} alt=""/>}
                />
                <HowItWorksBlock maxWidth={513} number={"2"} firstText={"Set your baseline & mode"} secondTextWidth={339} secondText={"Choose your baseline in SOL and pick Manual or AI mode."}
                                 img={<img src="/img/how-it-works-2.png" className={"absolute bottom-0 right-0"} alt=""/>}
                />
                <HowItWorksBlock maxWidth={365} number={"3"} firstText={"Detect profit"} secondText={"Valen monitors your balance and spots realized profit in SOL."}
                                 img={<img src="/img/how-it-works-3.png" className={"absolute bottom-0 right-0"} alt=""/>}
                />
                <HowItWorksBlock maxWidth={419} number={"4"} firstText={"Secure it"} secondText={"A chosen percentage auto-converts to USDC; your core capital stays untouched."}
                                 img={<img src="/img/how-it-works-4.png" className={"absolute bottom-0 right-0"} alt=""/>}
                />
                <HowItWorksBlock maxWidth={360} number={"5"} firstText={"Optional: Auto Reload"} secondText={"On price dips, Valen can buy SOL back from USDC — intelligently."}
                                 img={<img src="/img/how-it-works-5.png" className={"absolute bottom-0 right-0"} alt=""/>}
                />
                <HowItWorksBlock maxWidth={431} number={"6"} firstText={"Transparency & control"} secondText={"Everything runs on-chain with clear receipts and instant Telegram alerts."}
                                 img={<img src="/img/how-it-works-6.png" className={"absolute bottom-0 right-0"} alt=""/>}
                />
            </div>
            <BorderGradient text={"You trade. Valen protects."}/>
        </div>
    )
}
