import {useForm} from "@inertiajs/react";
import {useConnectWallet} from "@privy-io/react-auth";

export default function MainSection() {

    const form1 = useForm({ address: "" });

    const { connectWallet } = useConnectWallet({
        onSuccess: ({ wallet }) => {
            form.data.address = wallet.address
            form1.post("/user/register");
        },
        onError: (e) => console.error("❌ Connect error", e),
    });


    const mainSVG = <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ii_2_30830)">
            <rect x="3.66357" width="70" height="70" rx="20" transform="rotate(3 3.66357 0)" fill="url(#paint0_linear_2_30830)" />
            <g filter="url(#filter1_d_2_30830)">
                <path d="M13.5079 18.9128C13.4994 18.9008 13.4921 18.8655 13.4935 18.8376L13.4963 18.7842L25.894 19.434L25.9782 19.6176C26.0254 19.7201 26.1361 19.9656 26.2219 20.1609L26.2336 20.1872C26.3201 20.3817 26.4312 20.6313 26.4881 20.7567C26.5475 20.8878 26.832 21.5264 27.1228 22.1746C27.4114 22.8227 27.7062 23.4828 27.778 23.6402C27.8498 23.7975 28.0176 24.174 28.1506 24.4742C28.2857 24.7769 28.5192 25.2964 28.6687 25.63C28.8182 25.9637 28.996 26.3663 29.0679 26.5237C29.1375 26.6809 29.3197 27.0884 29.4734 27.4292C29.6247 27.77 29.9134 28.4181 30.116 28.8709L30.1455 28.9365C30.3424 29.3767 30.5755 29.8973 30.6749 30.1219C30.7697 30.3363 30.863 30.541 30.8932 30.6069L30.9003 30.6224C30.921 30.6631 31.0154 30.8705 31.1115 31.0873C31.2053 31.304 31.4059 31.7544 31.5555 32.088C31.7049 32.4216 31.8851 32.8244 31.9546 32.9816C32.0241 33.1388 32.18 33.4821 32.2966 33.7442C32.4156 34.0064 32.5977 34.4139 32.702 34.6498C32.8063 34.8857 32.9496 35.2073 33.0192 35.3646C33.0909 35.5219 33.2568 35.8913 33.3877 36.1868C33.521 36.4824 33.7562 37.0136 33.9138 37.3663C34.0715 37.719 34.2496 38.1169 34.309 38.2481C34.3685 38.3791 34.5384 38.7604 34.6879 39.0941C34.8373 39.4277 34.966 39.723 34.976 39.7491C34.9879 39.7847 34.921 39.9277 34.7004 40.3397C34.5383 40.6384 34.3532 40.9849 34.2849 41.1092C34.2189 41.2338 33.9859 41.666 33.7656 42.0711C33.5453 42.476 33.2818 42.9649 33.1758 43.1572C33.0719 43.3496 32.9072 43.6551 32.8107 43.8362C32.7121 44.0173 32.5551 44.3068 32.4614 44.4811C32.3675 44.6554 32.1852 44.9902 32.0563 45.228C31.9272 45.4655 31.7523 45.789 31.6637 45.952C31.5774 46.1151 31.4003 46.4385 31.2712 46.6761C31.1421 46.9138 30.965 47.2372 30.8787 47.4003C30.7923 47.5634 30.6281 47.8618 30.5166 48.0678L30.4741 48.1465C30.3571 48.3625 30.1777 48.6945 30.0458 48.9345C29.899 49.2036 29.7816 49.4349 29.7878 49.4492C29.7938 49.4658 31.7529 49.5754 35.5919 49.7766C39.4401 49.9782 41.3864 50.0733 41.3872 50.0571C41.3879 50.0432 41.3295 49.8912 41.2585 49.7198C41.1874 49.5462 40.9867 49.0563 40.81 48.6305C40.6333 48.2047 40.4427 47.7385 40.3838 47.5958C40.3251 47.4531 40.187 47.1202 40.0794 46.8584C39.9697 46.5967 39.8031 46.1947 39.7099 45.9664C39.6144 45.7383 39.4302 45.2895 39.2984 44.9684L39.2978 44.9674C39.166 44.6464 38.9571 44.1396 38.8311 43.8375C38.7051 43.5354 38.5588 43.1834 38.5062 43.0526C38.4535 42.9218 38.34 42.6436 38.2527 42.4343C38.1653 42.2248 38.0027 41.8347 37.8933 41.5659C37.7816 41.2971 37.5867 40.8262 37.4587 40.5191C37.333 40.2124 37.2283 39.9394 37.2296 39.9137C37.231 39.8882 37.2573 39.8222 37.29 39.7657C37.3227 39.7092 37.4535 39.481 37.5843 39.2575C37.7127 39.0339 38.0018 38.537 38.2255 38.1508C38.4492 37.7669 38.7208 37.2994 38.829 37.1119C38.937 36.9268 39.0956 36.6512 39.1812 36.502C39.269 36.353 39.6362 35.7183 39.9985 35.0904C40.3609 34.4624 40.738 33.8119 40.8359 33.6449C40.9316 33.4777 41.0598 33.2587 41.1176 33.1593C41.1729 33.0681 41.275 32.8929 41.3554 32.7547L41.3763 32.719C41.4569 32.5767 41.686 32.1791 41.8845 31.8381C42.0807 31.497 42.3073 31.1039 42.3876 30.9685C42.4655 30.8329 42.6139 30.5777 42.7146 30.4038C42.815 30.2299 42.9458 30.0064 43.0035 29.907C43.0613 29.8076 43.2097 29.5524 43.3304 29.3423C43.4513 29.1322 43.7608 28.5969 44.017 28.1565C44.2712 27.7161 44.5505 27.2327 44.6383 27.0837C44.7239 26.9346 44.8622 26.6951 44.9451 26.5529L44.9614 26.5251C45.0537 26.3668 45.2548 26.0217 45.423 25.7285C45.6038 25.4192 45.9008 24.9041 46.0843 24.5879C46.2678 24.2717 46.4767 23.9103 46.5496 23.7862C46.6223 23.662 46.8285 23.3074 47.0072 22.9956C47.1882 22.6863 47.5653 22.0358 47.8446 21.5501C48.1264 21.0646 48.3673 20.656 48.3819 20.6404C48.4036 20.6183 49.5605 20.672 54.5948 20.9381C59.5265 21.1966 60.7852 21.2695 60.7909 21.2931C60.7924 21.3071 60.6247 21.6265 60.413 21.9994C60.2014 22.3723 59.7321 23.2064 59.3666 23.8528C59.0034 24.4994 58.4107 25.5528 58.0501 26.1924C57.6871 26.832 57.1498 27.7883 56.8499 28.3171C56.5523 28.8461 56.0857 29.6734 55.811 30.1593C55.5362 30.6452 55.0345 31.5335 54.6963 32.1372C54.3558 32.7407 53.7735 33.7713 53.4026 34.4314C53.0318 35.0915 52.4619 36.1019 52.1342 36.6805C51.8089 37.2592 51.302 38.1589 51.007 38.681C50.712 39.2031 50.1496 40.1999 49.7585 40.8962C49.3676 41.5925 48.8682 42.4786 48.6491 42.8627C48.4299 43.2469 47.9205 44.1533 47.5144 44.8744C47.1084 45.5955 46.5105 46.658 46.1851 47.2366C45.8575 47.8153 45.3733 48.6742 45.106 49.1466C44.8389 49.6189 44.2436 50.6769 43.782 51.4975C43.3204 52.318 42.9204 53.0116 42.8386 53.0887L35.4273 52.7003C28.406 52.3323 28.0115 52.3094 27.9794 52.2681C27.96 52.246 27.7591 51.8028 27.5346 51.2859C27.3123 50.7693 26.8919 49.8001 26.6022 49.1309C26.3123 48.4642 25.9044 47.5189 25.6941 47.0354C25.4886 46.5628 25.0628 45.5782 24.7369 44.8246L24.7147 44.7732C24.3863 44.0137 23.9232 42.9422 23.6844 42.3921C23.4456 41.842 23.0192 40.8562 22.7356 40.2015C22.452 39.5466 22.052 38.6249 21.8479 38.1535C21.6439 37.682 21.1889 36.6319 20.838 35.8199C20.4871 35.008 20.0647 34.034 19.8994 33.653C19.7341 33.272 19.3157 32.3076 18.9709 31.5099C18.6262 30.7122 18.1752 29.6716 17.9712 29.2002C17.7672 28.7287 17.3488 27.7643 17.0428 27.057C16.7367 26.3498 16.3062 25.3545 16.0838 24.8425C15.8613 24.3305 15.4512 23.3828 15.1718 22.7352C14.89 22.0874 14.4066 20.9683 14.0944 20.2468C13.7822 19.5276 13.5187 18.925 13.5079 18.9128Z" fill="white" />
            </g>
        </g>
        <defs>
            <filter id="filter0_ii_2_30830" x="0" y="0" width="73.5676" height="74.5676" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_30830" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_innerShadow_2_30830" result="effect2_innerShadow_2_30830" />
            </filter>
            <filter id="filter1_d_2_30830" x="9.49329" y="18.7842" width="55.2976" height="42.3044" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_30830" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_30830" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_2_30830" x1="38.6636" y1="2.05699e-09" x2="38.6636" y2="70" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B0C8F2" />
                <stop offset="1" stop-color="#2260D8" />
            </linearGradient>
        </defs>
    </svg>

    return (
        <div
            id={"main"}
            className="flex flex-col z-50 items-center w-full max-w-[1250px] gap-10 mt-[50px]"
        >
            <div
                className="flex flex-col gap-[15px] w-full items-center"
            >
                <div
                    className="flex w-full max-w-[556px] rounded-full border_top px-5 py-2 bg-white/5 backdrop-blur-[10px]"
                >
                    <span className="text-[17px] leading-[150%] text-[#B9C1D3]">
                        Built on Solana. Designed for traders who value calm over chaos
                    </span>
                </div>
                <div
                    className="flex flex-col gap-[20px] items-center w-full max-w-[780px]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <span className="text-[68px] text-white font-semibold text-center leading-[110%]" style={{ display: "ruby" }}>
                        Turn every trade into controlled   <img src="/img/main-logo-img.png" className="max-w-[70px]" alt="" />   profit
                    </span>
                    <span className="max-w-[582px] text-lg leading-[150%] text-[#A7ADBE] text-center">
                        Valen automatically secures your gains by converting profit in SOL to USDC — before the market takes it back.
                    </span>
                </div>
            </div>
            <button
                onClick={() =>
                connectWallet({
                    walletChainType: "solana-only",
                })
            }
                className="flex  z-50 shadow-[inset_0_2px_1px_0_rbga(255,255,255,0.5)] px-[25px] py-[15px] rounded-full default-gradient"
                data-aos="fade-up"
                data-aos-delay="250"
            >
                <span className="font-medium text-white">
                   Launch App
                </span>
            </button>
            <img
                src="/img/dashboard.png"
                className="max-w-[1250px]"
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
            />
        </div>
    )
}
