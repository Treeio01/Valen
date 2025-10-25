export default function HowItWorksBlock({maxWidth, img, number, firstText, secondTextWidth, secondText}) {
    return (
        <div className={`flex bg-[#0A0A0A] border-2 border-[#141414] rounded-[26px] w-full min-h-[332px]`} style={{maxWidth: maxWidth}}>
            <div className="flex border_top overflow-hidden flex-col p-[30px] justify-end gap-2 h-full !border-white/15 w-full rounded-[23px] relative">
                {img}
                <div className="flex absolute top-[20px] right-[20px] px-4 py-2 rounded-xl bg-linear-to-b from-[#080808] to-[#181819] border-2 border-[#141414]">
                            <span className="text-white">
                                {number}
                            </span>
                </div>
                <span className="text-[#F5F5F5] z-50 text-lg font-semibold">
                    {firstText}
                        </span>
                <span className="text-[#A7ADBE] z-50" style={{maxWidth: secondTextWidth ? secondTextWidth : "full"}}>
                            {secondText}
                        </span>
            </div>
        </div>
    )
};
