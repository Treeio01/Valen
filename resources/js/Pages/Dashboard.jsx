import {div} from "framer-motion/client";
import Switcher from "@/Components/Landing/ui/Switcher.jsx"
import {GradientSlider} from "@/Components/Landing/ui/Slider.jsx"
import {useState} from "react";
import {usePage} from "@inertiajs/react";
import {Link, Head} from "@inertiajs/react";
export default function Dashboard() {

    const {props} = usePage();

    const [val, setVal] = useState(35);
    const [mode, setMode] = useState("manual");
    const todayLabel = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short'
    }).format(new Date());
    return (
        <div className="bg-black min-h-screen w-full flex flex-col gap-[30px]">
            <Head title="Valen Dashboard"/>
            <header className={"p-[30px]  flex items-center w-full justify-between"}>
                <img src="/img/logo-dashboard.svg" alt=""/>
                <div
                    className="flex bg-linear-to-b !border-white/15 from-[#181819] to-[#0D0D0D] rounded-full border_top px-[26px] py-[10px] items-center gap-[10px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 3V6M8 14V17M16 7V12M16 17V20M6.8 14H9.2C9.64183 14 10 13.6418 10 13.2V6.8C10 6.35817 9.64183 6 9.2 6H6.8C6.35817 6 6 6.35817 6 6.8V13.2C6 13.6418 6.35817 14 6.8 14ZM14.8 17H17.2C17.6418 17 18 16.6418 18 16.2V12.8C18 12.3582 17.6418 12 17.2 12H14.8C14.3582 12 14 12.3582 14 12.8V16.2C14 16.6418 14.3582 17 14.8 17Z"
                            stroke="url(#paint0_linear_2_4035)" stroke-width="2" stroke-linecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_2_4035" x1="12" y1="3" x2="12" y2="20"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#B0C8F2"/>
                                <stop offset="1" stop-color="#2260D8"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className={"font-medium text-white text-lg "}>
                        {todayLabel} — Market: Сalm ( <span className={"text-[#34A853]"}>
                        +1.2%
                        </span>)
                    </span>
                </div>
                <div className="flex items-center gap-[15px]">
                    <div className="flex gap-[5px] items-center">
                        <div
                            className="flex animate-pulse rounded-full min-w-[13px] bg-[#00BE33] min-h-[13px] border-2 border-[#006D1D]">

                        </div>
                        <span className="text-[#959EB1]">
                            Beta active
                        </span>
                    </div>
                    <div className="flex py-4 px-[26px] bg-linear-to-b from-mainl-1 to-mainl-2 rounded-[15px]">
                        <span className={"text-white font-medium max-w-[85px] overflow-hidden overflow-ellipsis"}>
                            {props.user.address}
                        </span>
                    </div>
                </div>
            </header>
            <div className="flex gap-[30px] lg:flex-row flex-col w-full px-[30px]">
                <div className="flex flex-col gap-[30px] w-full">
                    <div className="flex flex-col gap-[20px] w-full">
                        <span className={"text-[#959EB1] text-2xl font-medium"}>
                            Main Metrics Area
                        </span>
                        <div className="flex flex-col gap-[20px] flex-wrap w-full">
                            <div className="flex gap-[20px] w-full">
                                <div
                                    className="flex w-full relative bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                    <div
                                        className="flex flex-col gap-2 w-full px-[40px] py-[50px] relative rounded-[23px] !border-white/15 border_top ">
                                        <img src="/img/total-balance-bg.png" className={"absolute top-[21px] left-0"}
                                             alt=""/>
                                        <span className="text-xl font-medium text-[#959EB1]">
                                            Total Balance
                                        </span>
                                        <div className="flex gap-[38px] items-end">
                                            <span className={"text-white text-[48px] font-semibold"}>

{props.user.balance} SOL
                                            </span>
                                            <span className={"text-2xl font-medium text-[#34A853] flex mb-[6px]"}>
                                                0.00 USDC
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="flex w-full relative bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                    <div
                                        className="flex flex-col gap-2 w-full px-[40px] py-[38px] relative rounded-[23px] !border-white/15 border_top ">
                                        <img src="/img/profit-bg.png" className={"absolute top-[21px] right-0"}
                                             alt=""/>
                                        <span className="text-xl font-medium text-[#959EB1]">
                                            Protected Profit
                                        </span>
                                        <div className="flex gap-[67px] items-center">
                                            <span className={"text-white text-[48px] font-semibold"}>
                                                +0 USDC
                                            </span>
                                            <img src="/img/usdc.svg" alt=""/>
                                        </div>
                                        <span className="text-sm text-[#959EB1]">
                                            Protected Profit
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div
                                className="flex w-full relative bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                <div
                                    className="flex  gap-[45px] overflow-hidden w-full p-[30px] relative rounded-[23px] !border-white/15 border_top ">
                                    <img src="/img/active-profit-bg.png" className={"absolute bottom-0 left-0"} alt=""/>
                                    <img src="/img/saved-bg.png" className={"absolute right-[-40px] bottom-[-70px]"} alt=""/>

                                    <div className="flex flex-col gap-[18px]">
                                        <div className="flex flex-col gap-2">
                                            <span className={"text-xl font-medium text-[#959EB1]"}>
                                                Active Profit
                                            </span>
                                            <div className="flex items-end gap-[7px]">
                                                <span className={"text-white text-[48px] font-semibold"}>
                                                    +0.0 SOL
                                                </span>
                                                <span className={"text-2xl font-medium text-[#959EB1] mb-[6px] flex"}>
                                                    unfixed
                                                </span>
                                            </div>
                                        </div>
                                        <span className="cursor-pointer z-50 hover:opacity-75 transition-opacity ease-in-out uppercase underline text-lg font-medium text-[#3278FF] ">
                                            Fix now
                                        </span>
                                    </div>
                                    <div className="flex min-h-[130px] w-full max-w-[1px] bg-[#161616]"></div>
                                    <div className="flex flex-col gap-[21px]">
                                        <div className="flex flex-col gap-2">
                                            <span className={"text-xl font-medium text-[#959EB1]"}>
                                               Saved
                                            </span>
                                            <div className="flex items-end gap-[7px]">
                                                <span className={"text-white text-[48px] font-semibold"}>
                                                    +0.0 USDC
                                                </span>
                                            </div>
                                        </div>
                                        <span className={"text-[#959EB1]"}>
                                               Your profit vault
                                            </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] w-full">
                        <span className={"text-[#959EB1] text-2xl font-medium"}>
                            Control zone
                        </span>
                        <div className="flex w-full gap-[20px] flex-col">
                            <div className="flex w-full gap-[20px]">
                                <div
                                    className="flex w-full relative bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                    <div
                                        className="flex flex-col gap-2.5 w-full p-[30px] relative rounded-[23px] !border-white/15 border_top ">
                                        <span className={"font-medium text-xl text-[#959EB1]"}>
                                            Mode switch
                                        </span>
                                        <div className="flex items-center gap-[20px]">
                                            <div className="flex gap-3 items-center">
                                            <span className={"text-white text-[32px] font-semibold"}>
                                                Manual
                                            </span>
                                                <Switcher isActive={mode === "manual"} onToggle={() => setMode("manual")}/>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                            <span className={"text-white text-[32px] font-semibold"}>
                                                AI
                                            </span>
                                                <Switcher isActive={mode === "ai"} onToggle={() => setMode("ai")}/>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div
                                    className="flex w-full relative bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                    <div
                                        className="flex flex-col gap-2.5 w-full p-[30px] relative rounded-[23px] !border-white/15 border_top ">
                                        <img src="/img/slider-glow.svg" className={"absolute bottom-0 left-1/2 -translate-x-1/2"} alt=""/>
                                        <span className={"font-medium text-xl text-[#959EB1]"}>
                                            Fix this % of profit when triggered
                                        </span>
                                        <GradientSlider value={val} onChange={setVal} min={0} max={100} step={1} />

                                    </div>
                                </div>

                            </div>
                            <div className="flex w-full gap-[20px]">
                                <div
                                    className="flex w-full relative bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                    <div
                                        className="flex flex-col gap-4 w-full p-[30px] relative rounded-[23px] !border-white/15 border_top ">
                                        <img src="/img/use-usdc-bg.png" className={"absolute bottom-0 right-[30px]"} alt=""/>
                                        <span className={"font-semibold uppercase text-2xl text-white max-w-[208px]"}>
                                            Use USDC to
buy SOL on dips
                                        </span>
    <Switcher/>
                                    </div>
                                </div>
                                <div
                                    className="flex w-full relative max-w-[430px] bg-[#0A0A0A]/70 border border-[#141414] rounded-[26px]">
                                    <div
                                        className="flex flex-col gap-4 w-full p-[30px] relative rounded-[23px] !border-white/15 border_top ">
                                        <span className={"font-semibold uppercase text-2xl text-white max-w-[234px]"}>
                                            Save X% of
each fix to Vault
                                        </span>
                                       <div className="flex items-center gap-[10px] p-[7px] pr-[15px] bg-[#0C0C0C]/80 rounded-full border border-[#171717] w-full">
                                           <div className="flex w-full max-w-[30px] min-h-[30px] items-center justify-center shadow-[inset_0_1px_1px_0_#2260D8] bg-linear-to-b from-[#2260D8]/0 to-[#2260D8] rounded-full border border-[#2260D8]">
                                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M3.34069 6.78665C1.3131 6.78665 0 5.30334 0 3.41364C0 1.50363 1.3131 0 3.34069 0C5.4069 0 6.73931 1.50363 6.73931 3.41364C6.73931 5.30334 5.4069 6.78665 3.34069 6.78665ZM3.7269 13.7562H2.06621L10.2924 0.203193H11.9724L3.7269 13.7562ZM10.6207 14C8.5931 14 7.28 12.5167 7.28 10.627C7.28 8.71698 8.5931 7.21335 10.6207 7.21335C12.6676 7.21335 14 8.71698 14 10.627C14 12.5167 12.6676 14 10.6207 14ZM3.34069 4.91727C4.09379 4.91727 4.6731 4.38897 4.6731 3.41364C4.6731 2.39768 4.09379 1.86938 3.34069 1.86938C2.6069 1.86938 2.0469 2.39768 2.0469 3.41364C2.0469 4.38897 2.6069 4.91727 3.34069 4.91727ZM10.6207 12.1306C11.3738 12.1306 11.9531 11.6226 11.9531 10.627C11.9531 9.61103 11.3738 9.08273 10.6207 9.08273C9.86759 9.08273 9.3269 9.61103 9.3269 10.627C9.3269 11.6226 9.86759 12.1306 10.6207 12.1306Z" fill="white"/>
                                               </svg>
                                               </div>
                                           <input type="text" className={"w-full text-sm font-medium text-[#959EB1]/50 outline-none"} placeholder={"Enter the percentage"}/>
    <span className={"text-sm font-medium text-[#959EB1]/50"}>
        %
    </span>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full bg-[#0A0A0A]/70 border border-[#202020] rounded-[26px] overflow-hidden">
                    <div className="flex border_top !border-white/15 w-full rounded-[26px]">
                        <img src="/img/dashboard-bg.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="flex items-center mb-[35px] px-[30px] w-full justify-between">
                <div className="flex items-center gap-[9px]">
                    <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0138902 0.0979782C0.00694511 0.0891004 0 0.0624672 0 0.0411608V0.000323182H9.43666L9.50785 0.13704C9.54778 0.213389 9.64154 0.39627 9.71446 0.541864L9.72438 0.561426C9.79782 0.706387 9.89203 0.892355 9.94018 0.985751C9.99054 1.08341 10.2319 1.55925 10.4784 2.04219C10.7232 2.52515 10.9733 3.01697 11.034 3.13416C11.0948 3.25135 11.2372 3.53189 11.35 3.7556C11.4646 3.9811 11.6626 4.36816 11.7893 4.61674C11.9161 4.86532 12.0671 5.16538 12.1279 5.28257C12.187 5.39975 12.3415 5.70337 12.4717 5.95728C12.6001 6.21118 12.845 6.69413 13.0169 7.03148L13.0418 7.08041C13.2089 7.40837 13.4065 7.79627 13.4909 7.96365C13.5714 8.12342 13.6504 8.27585 13.6759 8.32495L13.6819 8.33651C13.6992 8.36669 13.7791 8.52117 13.8607 8.68274C13.9405 8.84432 14.1107 9.1799 14.2375 9.42847C14.3642 9.67705 14.517 9.97711 14.576 10.0943C14.6351 10.2115 14.7671 10.4672 14.866 10.6625C14.9668 10.8578 15.1212 11.1614 15.2098 11.3372C15.2983 11.513 15.4199 11.7527 15.4789 11.8698C15.5396 11.987 15.6803 12.2622 15.7914 12.4824C15.9043 12.7026 16.104 13.0986 16.2377 13.3613C16.3714 13.6241 16.5224 13.9206 16.5727 14.0183C16.6231 14.1159 16.7672 14.4 16.894 14.6486C17.0207 14.8972 17.1301 15.1173 17.1388 15.1368C17.1492 15.1635 17.1041 15.2753 16.953 15.5984C16.8419 15.8328 16.7152 16.1046 16.6682 16.2021C16.6231 16.2998 16.4634 16.6389 16.3123 16.9568C16.1612 17.2745 15.9806 17.6581 15.9078 17.809C15.8366 17.96 15.7237 18.1997 15.6577 18.3417C15.59 18.4838 15.4824 18.711 15.4182 18.8477C15.3539 18.9844 15.2288 19.2472 15.1404 19.4337C15.0518 19.6202 14.932 19.874 14.8712 20.0018C14.8122 20.1297 14.6906 20.3835 14.6021 20.57C14.5135 20.7565 14.392 21.0103 14.3329 21.1382C14.2739 21.2661 14.1611 21.5004 14.0846 21.662L14.0555 21.7237C13.9753 21.8932 13.8523 22.1537 13.7617 22.342C13.661 22.5533 13.5811 22.7344 13.5864 22.7451C13.5916 22.7575 15.083 22.7628 18.0052 22.7628C20.9342 22.7628 22.4154 22.7575 22.4154 22.7451C22.4154 22.7344 22.365 22.6208 22.3043 22.4929C22.2434 22.3633 22.0716 21.9975 21.9205 21.6797C21.7694 21.3619 21.6062 21.0139 21.5558 20.9073C21.5056 20.8008 21.3875 20.5523 21.2954 20.3569C21.2017 20.1616 21.0593 19.8616 20.9795 19.6911C20.8979 19.5209 20.7402 19.1858 20.6274 18.9461L20.6269 18.9454C20.5141 18.7057 20.3353 18.3274 20.2277 18.102C20.12 17.8765 19.995 17.6138 19.9499 17.5161C19.9046 17.4184 19.8074 17.2107 19.7328 17.0545C19.6582 16.8981 19.5192 16.607 19.4255 16.4064C19.33 16.2057 19.1633 15.8542 19.054 15.6251C18.9463 15.396 18.856 15.1919 18.856 15.1723C18.856 15.1528 18.8734 15.1014 18.8959 15.0569C18.9185 15.0125 19.0087 14.8332 19.0991 14.6575C19.1876 14.4817 19.3873 14.0911 19.5417 13.7874C19.6963 13.4856 19.8839 13.1181 19.9585 12.9707C20.0331 12.8251 20.1426 12.6085 20.2016 12.4913C20.2624 12.3741 20.5158 11.8752 20.7659 11.3816C21.016 10.888 21.2764 10.3766 21.344 10.2452C21.41 10.1138 21.4986 9.94161 21.5385 9.86348C21.5768 9.79169 21.6474 9.65396 21.7029 9.54531L21.7174 9.51724C21.7729 9.40539 21.931 9.09289 22.0681 8.82478C22.2035 8.55668 22.3598 8.24773 22.4154 8.1412C22.4691 8.03467 22.5716 7.83403 22.6411 7.69731C22.7105 7.56059 22.8008 7.38482 22.8407 7.30669C22.8806 7.22857 22.9831 7.02793 23.0664 6.8628C23.1498 6.69768 23.3634 6.27688 23.5404 5.93065C23.7158 5.58441 23.9085 5.20444 23.9693 5.08726C24.0283 4.97008 24.1238 4.78186 24.1811 4.67L24.1923 4.6482C24.2561 4.52369 24.395 4.25239 24.5111 4.02193C24.636 3.77868 24.8409 3.37386 24.9677 3.12528C25.0944 2.87671 25.2385 2.59262 25.2889 2.49497C25.3392 2.39731 25.4816 2.11854 25.6049 1.87353C25.7299 1.63028 25.9903 1.11892 26.183 0.737175C26.3775 0.355432 26.5442 0.0340585 26.5547 0.0216297C26.5703 0.00387428 27.4506 -0.00145237 31.2825 0.000323182C35.0364 0.000323182 35.9947 0.00564982 36 0.0234053C36.0017 0.0340585 35.8871 0.284411 35.7413 0.577375C35.5955 0.87034 35.2724 1.52552 35.0207 2.03332C34.7707 2.54113 34.3627 3.36853 34.1144 3.87101C33.8643 4.37349 33.4945 5.12455 33.2879 5.54002C33.083 5.9555 32.7618 6.60535 32.5725 6.98709C32.3833 7.36884 32.0378 8.06663 31.8051 8.5407C31.5707 9.01476 31.1696 9.82441 30.9144 10.3429C30.6591 10.8613 30.2667 11.655 30.041 12.1095C29.8171 12.5641 29.4681 13.2707 29.265 13.6809C29.0618 14.0911 28.6746 14.8741 28.4054 15.421C28.1364 15.9678 27.7926 16.6638 27.6415 16.9656C27.4904 17.2675 27.1398 17.9795 26.8602 18.5459C26.5807 19.1123 26.1691 19.9469 25.9452 20.4013C25.7195 20.8559 25.3861 21.5306 25.202 21.9017C25.0181 22.2727 24.6083 23.1037 24.2905 23.7483C23.9727 24.3927 23.6968 24.9379 23.6377 25H17.9965C12.6522 25 12.3518 24.9983 12.3258 24.9681C12.3102 24.952 12.14 24.6219 11.9491 24.2365C11.7598 23.8513 11.4021 23.1286 11.1556 22.6296C10.909 22.1325 10.5618 21.4276 10.3829 21.0671C10.2081 20.7148 9.84572 19.9806 9.5684 19.4186L9.54952 19.3803C9.26998 18.8139 8.87584 18.015 8.67271 17.6048C8.46956 17.1946 8.10668 16.4596 7.86534 15.9714C7.62399 15.4831 7.28368 14.7959 7.11006 14.4444C6.93643 14.0928 6.54924 13.3098 6.25059 12.7043C5.95196 12.0989 5.59255 11.3727 5.45191 11.0886C5.31127 10.8045 4.95534 10.0854 4.6619 9.49061C4.36848 8.8958 3.98475 8.11989 3.81113 7.76834C3.6375 7.41678 3.28157 6.69768 3.02112 6.17035C2.76068 5.643 2.39432 4.90082 2.20507 4.51908C2.01582 4.13735 1.66682 3.43068 1.42896 2.94773C1.18935 2.46478 0.777852 1.63028 0.512202 1.09228C0.246552 0.556069 0.0225716 0.106856 0.0138902 0.0979782Z" fill="#959EB1"/>
                    </svg>
<span className={"text-[#959EB1]"}>
    Valen | Dashboard (Beta)
</span>
                </div>
                <span className={"text-[#959EB1]"}>
                    Built on Solana • Beta 0.9 • Valen
                </span>
            </div>
        </div>
    );
}
