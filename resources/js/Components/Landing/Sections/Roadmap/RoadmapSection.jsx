import RoadmapBlock from "@/Components/Landing/Sections/Roadmap/RoadmapBlock.jsx";
import SectionHeader from "@/Components/Landing/ui/SectionHeader.jsx";

export default function RoadmapSection() {



    return (<div id={"roadmap"} className={"flex flex-col items-center w-full max-w-[1250px] mt-[120px] gap-[40px]"}>
        <SectionHeader section={"Roadmap"} title={"Valen’s path forward"} description={"Built steadily. Moving fast."} />
        <div className="flex w-full lg:flex-row flex-col items-center lg:items-start lg:justify-between flex-wrap gap-[20px]">
            <RoadmapBlock number={"1"} title={"Launch of Valen MVP on Solana mainnet"} time={"Q4 2025"} list={[
                {
                    text: "Integration with Phantom and Backpack wallets."
                },
                {
                    text: " Release of AI Mode (Beta)."
                },
                {
                    text: "Activation of the token buyback mechanism."
                },
                {
                    text: "Token launch on pump.fun with initial liquidity setup."
                },
                {
                    text: "First community airdrop for early users and testers."
                },
            ]}/>
            <div className="flex flex-col gap-5">
                <RoadmapBlock number={"2"} title={"Expansion of supported assets (SOL-based and stable pairs)"} time={"Q1 2026"} list={[
                    {
                        text: "Full Auto Reload release with adaptive AI sensitivity."
                    },
                    {
                        text: "Analytics dashboard and profit tracking tools."
                    },
                    {
                        text: "Telegram and wallet-linked performance insights."
                    },
                ]}/>
                <RoadmapBlock number={"4"} title={"Mobile web and lightweight browser extension releases"} time={"Q3 2026"} list={[
                    {
                        text: "Strategic partnerships with Solana-based trading protocols."
                    },
                    {
                        text: " Launch of “Valen Flow” campaign for active traders."
                    },
                ]}/>
            </div>
            <div className="flex flex-col gap-5">
                <RoadmapBlock number={"3"} title={"Integration with DEX APIs (Jupiter, Meteora)"} time={"Q2 2026"} list={[
                    {
                        text: "Multi-wallet support and cross-portfolio monitoring."
                    },
                    {
                        text: "Introduction of Profit Vault smart savings layer."
                    },
                ]}/>
                <RoadmapBlock number={"5"} title={"AI Model 2.0 — fully personalized adaptation"} time={"Q4 2026"} list={[
                    {
                        text: "Cross-chain expansion beyond Solana."
                    },
                    {
                        text: "Launch of Valen Vault for long-term saving and staking."
                    }, {
                        text: "(Closing line)  \" Calm. Consistent. Constantly evolving. \""
                    },
                ]}/>
            </div>
        </div>
    </div>)




}
