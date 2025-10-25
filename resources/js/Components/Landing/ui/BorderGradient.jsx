export default function BorderGradient({text}){
    return (
        <div className="relative rounded-full p-[2px] bg-gradient-to-b from-mainl-1 to-mainl-2">
            <div className="flex w-max px-[22px] py-[14px] rounded-full bg-black text-white">
    <span className="default-gradient-text font-medium">
      {text}
    </span>
            </div>
        </div>
    )
}
