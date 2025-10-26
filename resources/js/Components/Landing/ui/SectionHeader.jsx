export default function SectionHeader({
    title,
    section,
    description,
    maxWidth,
    about,
    dataAos = "fade-up",
    dataAosDelay = "0",
    dataAosDuration = "800",
}) {
    return (
        <div
            className="flex flex-col items-center gap-5 z-50"
        >
            <div className="flex flex-col gap-[6px] items-center max-w-[650px]" style={{ maxWidth: maxWidth }} >
                {about || <div
                    className="flex rounded-full border_top !border-white/10 bg-linear-to-b from-[#181819] to-[#080808] py-2 px-4">
                    <span className="text-white">
                        {section}
                    </span>

                </div>}
                <span className="default-gradient-text text-[40px] font-semibold text-center">
                       {title}
                </span>
            </div>
            {description && <span className="text-lg leading-[150%] text-[#A7ADBE]">
                   {description}
            </span>}
        </div>
    )

}
