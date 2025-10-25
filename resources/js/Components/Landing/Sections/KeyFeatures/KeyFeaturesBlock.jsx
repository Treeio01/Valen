export default function KeyFeaturesBlock({maxWidth, img, number, firstText, secondText}) {
    return (
        <div className={`flex bg-[#0A0A0A] border-2 border-[#141414] rounded-[26px] w-full min-h-[332px]`} style={{maxWidth: maxWidth}}>
            <div className="flex border_top overflow-hidden flex-col p-[30px] justify-end gap-2 h-full !border-white/15 w-full rounded-[23px] relative">
                {img}
                <div className="flex absolute p-[2px] top-[30px] left-[30px] bg-linear-to-b from-white to-mainl-2 rounded-full overflow-hidden">
                    <div className="flex py-[9px] px-[15px] bg-linear-to-b from-mainl-1 to-mainl-2 rounded-full">
                         <span className="text-white text-sm font-medium">
                               Feature {number}
                            </span>
                    </div>

                </div>
                <span className="text-[#F5F5F5] z-50 text-lg font-semibold">
                    {firstText}
                        </span>
                <span className="text-[#A7ADBE] z-50">
                            {secondText}
                        </span>
            </div>
        </div>
    )
};
