export default function RoadmapBlock({
    number,
    time,
    title,
    list,
    dataAos = "fade-up",
    dataAosDelay = "0",
    dataAosDuration = "800",
}){
    return (
        <div
            className={`flex bg-[#0A0A0A] border-2 border-[#141414] h-max rounded-[26px] w-full max-w-[403px]`}
            data-aos={dataAos}
            data-aos-delay={dataAosDelay}
            data-aos-duration={dataAosDuration}
        >
            <div className="flex border_top overflow-hidden flex-col h-full !border-white/15 w-full rounded-[23px] relative">
                <img src="/img/roadmap-bg.png" className={"absolute top-0 left-0"} alt=""/>
                <div className="flex absolute p-[2px] top-[46px] right-[0px] bg-linear-to-b from-white to-mainl-2 rounded-l-[15px] overflow-hidden">
                    <div className="flex py-[9px] px-[15px] bg-linear-to-b from-mainl-1 to-mainl-2 rounded-l-[15px]">
                         <span className="text-white text-sm font-medium">
                               {number}
                            </span>
                    </div>

                </div>
                <div className="flex px-[30px] py-[26px]">
                        <span className="text-[#A7ADBE]">
                            {time}
                        </span>
                </div>
                <div className="flex w-full min-h-[1px] bg-[#141414]"></div>
                <div className="flex py-[20px] px-[30px] flex-col gap-[14px] z-50">
                        <span className="text-[#F5F5F5] text-lg font-semibold ">
                            {title}
                        </span>
                    <ol className={"flex flex-col list-disc"}>
                        {list.map((item, index) => (
                            <li key={index} className={"ml-3 text-[#A7ADBE] leading-[150%]"}>
                                {item.text}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
