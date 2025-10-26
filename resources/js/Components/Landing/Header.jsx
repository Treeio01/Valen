import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useConnectWallet } from "@privy-io/react-auth";
import { useForm } from "@inertiajs/react";
const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#key-features", label: "Key Features" },
    { href: "#token", label: "Token" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#faq", label: "FAQ" },
];

export default function Header({twitter}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const form = useForm({ address: "" });

    const { connectWallet } = useConnectWallet({
        onSuccess: ({ wallet }) => {
            form.data.address = wallet.address
            form.post("/user/register");
        },
        onError: (e) => console.error("❌ Connect error", e),
    });


    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        const body = document.body;
        if (isMobileMenuOpen) {
            body.classList.add("menu-open");
        } else {
            body.classList.remove("menu-open");
        }
    }, [isMobileMenuOpen]);


    const twitterIcon = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2_30851)">
            <path d="M15.9027 10.4686L23.3482 2H21.5838L15.119 9.3532L9.95547 2H4L11.8082 13.1193L4 22H5.76443L12.5915 14.2348L18.0445 22H24L15.9023 10.4686H15.9027ZM13.4861 13.2173L12.695 12.1101L6.40018 3.29967H9.11025L14.1902 10.4099L14.9813 11.5172L21.5847 20.7594H18.8746L13.4861 13.2177V13.2173Z" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_d_2_30851" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_30851"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_30851" result="shape"/>
            </filter>
        </defs>
    </svg>



    return (
        <>
            <header ref={headerRef} className="py-[25px] max-w-[1250px] w-full z-[60]">
                <div
                    className="flex w-full items-center justify-between max-w-[1440px]"
                >
                    <img src="/img/logo.svg" alt=""/>
                    <ul
                        className="hidden lg:flex items-center gap-[30px]"
                        data-aos="fade"
                        data-aos-delay="200"
                        data-aos-duration="900"
                    >
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    className="text-[#959EB1] hover:bg-clip-text hover:text-transparent hover:bg-linear-to-b hover:from-mainl-1 hover:to-mainl-2"
                                    href={href}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-[20px] items-center">
                        <button onClick={() => window.location.href=twitter} className="border_top hover:opacity-75 flex p-[15px] bg-linear-to-b from-white/15 to-white/0 rounded-full  backdrop-blur-[7px]">
                            {twitterIcon}
                        </button>
                        <div className="flex items-center gap-[10px]">

                            <button onClick={() =>
                                connectWallet({
                                    walletChainType: "solana-only",
                                })
                            } className="flex hover:opacity-75 px-[25px] z-50 py-[15px] rounded-full default-gradient">
                                <span className="font-medium text-white">
                                     Launch App
                                </span>
                            </button>
                        </div>
                    </div>

                    <button
                        id="mobileMenu"
                        className="flex cursor-pointer gap-4 z-40 p-1 border border-black rounded-[6px] lg:hidden"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            {isMobileMenuOpen && (
                <div
                    className="backdrop active"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={NAV_LINKS}

                button={
                    <button
                        onClick={() =>
                            connectWallet({
                                walletChainType: "solana-only",
                            })
                        }
                        className="flex bg-secondary hover:opacity-80 ease-in-out duration-300 transition-opacity relative py-3.5 px-6 rounded-full bg-linear-to-b from-secondary via-[#2D2D2D] to-secondary shadow-[0_4px_8px_0_rgba(0,0,0,0.30)]"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-aos-duration="900"
                    >
                        <span className="text-lg leading-[100%] text-[#FFFDFD]">
                            Try Dashboard
                        </span>
                        <svg
                            className="absolute bottom-[calc(-100%-14px)] translate-y-1/2 left-[40px]"
                            width="44"
                            height="88"
                            viewBox="0 0 44 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M34.1156 86.6603C32.5815 86.7085 28.8042 86.6372 24.1625 85.1617C22.8751 84.7524 21.9272 84.0874 19.7063 82.336C17.4854 80.5847 14.0598 77.6587 11.9941 75.8078C9.25203 73.3508 7.70548 70.7354 5.68721 66.7669C4.61236 64.6534 3.66762 62.2231 2.93187 60.031C2.19612 57.8389 1.75755 55.9294 1.47191 53.3574C0.835801 47.63 0.989895 44.0533 1.10107 43.4819C1.44595 41.7092 3.00179 39.6464 5.75671 37.1738C7.71275 35.4183 10.1416 34.3457 12.6353 33.3358C15.755 32.0723 19.952 31.5328 23.8638 31.0298C26.4862 30.6925 28.0321 31.0526 29.0222 31.4009C29.949 31.7269 31.0671 32.5554 33.0888 34.4239C36.5345 37.6084 39.0052 41.1718 40.4152 43.4712C42.8068 47.3714 42.3472 50.8647 41.8077 52.8116C41.0548 55.5287 36.2042 57.7066 34.1517 58.5893C30.5854 60.123 25.4526 58.6485 23.1482 57.2577C20.2708 55.521 19.2108 53.3133 18.1875 51.3687C17.6078 50.267 17.2541 48.7166 16.9175 46.1472C16.3827 42.0656 16.6798 39.2655 17.5026 36.8477C18.2435 34.6705 19.8773 30.648 23.0075 24.8153C26.1376 18.9826 30.7752 11.4831 33.375 7.22015C35.9749 2.95718 36.3965 2.158 36.4774 1.77599C37.2132 -1.69989 27.3723 7.66404 28.3013 7.04758C33.2236 3.78149 37.1798 1.42064 37.6134 1.26431C37.9856 1.13009 37.5342 4.91791 36.9013 10.0807C36.6862 12.1679 36.6862 13.1735 36.8499 14.1642C37.0136 15.1549 37.341 16.1004 37.6784 17.0746"
                                stroke="black"
                                strokeOpacity="0.2"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                }
            />
        </>
    );
}
