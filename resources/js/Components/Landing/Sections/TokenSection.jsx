import BorderGradient from "@/Components/Landing/ui/BorderGradient.jsx";
import SectionHeader from "@/Components/Landing/ui/SectionHeader.jsx";


export default function TokenSection(){

    return (
        <div
            id={"token"}
            className="mt-[70px] relative flex w-full flex-col items-center max-w-[1013px] pt-[259px] gap-[30px]"
            data-aos="fade-up"
            data-aos-duration="900"
        >
            <img
                src="/img/token-bg.png"
                className="absolute left-1/2 bottom-[225px] -translate-x-1/2"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="50"
            />

            <SectionHeader section={"Token"} title={" Every transaction fuels Valen’s token economy"} description={"A living cycle inside the system."} dataAosDelay="120" />
            <div className="flex flex-col items-center gap-5 w-full z-50" data-aos="fade-up" data-aos-delay="180">
            <span className="text-center text-[#F5F5F5] text-lg leading-[150%]">
               With every operation on Valen, part of the protocol fee is used to buy back the token from the market. Half of the tokens are permanently burned, reducing supply. The other half is automatically airdropped to active users who trade, fix profits, and keep the system moving. </span>

            </div>
            <BorderGradient text={"Part burns. Part returns. That’s the Valen cycle"} dataAosDelay="240"/>


        </div>
    )
}
