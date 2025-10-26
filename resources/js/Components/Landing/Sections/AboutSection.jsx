import BorderGradient from "@/Components/Landing/ui/BorderGradient.jsx";
import SectionHeader from "@/Components/Landing/ui/SectionHeader.jsx";

export default function AboutSection() {
    return (
        <div
            id={"about"}
            className="mt-[70px] relative flex w-full flex-col items-center max-w-[1013px] pt-[259px] gap-[30px]"

        >
            <img
                src="/img/about-bg.png"
                className="absolute left-1/2 bottom-[235px] -translate-x-1/2"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="50"
            />

            <SectionHeader
                section={"About US"}
                about={
                    <div className="flex border_top bg-white/5 border-white py-2 px-4 rounded-full backdrop-blur-[7px] z-50">
                        <span className="text-white ">About US</span>
                    </div>
                }
                maxWidth={"850px !important"}
                title={
                    "Valen brings balance to your profit — turning volatility into stability"
                }
                description={"The calm side of trading"}
                dataAosDelay="120"
            />
            <div
                className="flex flex-col items-center gap-5 w-full z-50"
                data-aos="fade-up"
                data-aos-delay="180"
            >
                <span className="text-center text-[#F5F5F5] text-lg leading-[150%]">
                    Trading is about timing — but emotions often ruin perfect
                    moments. Valen exists to remove that tension. It watches
                    your balance, recognizes real profit, and automatically
                    protects it before the market takes it back. You stay in
                    control of every trade, while Valen keeps your results
                    consistent and safe.
                </span>
                <span className="text-center text-[#F5F5F5] text-lg leading-[150%]">
                    Built on Solana, Valen combines automation with intuition.
                    It doesn’t replace your strategy — it refines it. By
                    understanding your rhythm, it turns chaos into clarity and
                    action into calm.
                </span>
            </div>
            <BorderGradient
                text={
                    "Valen is not a bot. It’s your balance — made intelligent"
                }
                dataAosDelay="240"
            />
        </div>
    );
}
