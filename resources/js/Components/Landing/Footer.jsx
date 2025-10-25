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

export default function Footer({twitter}) {

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
            <header className="py-[25px] max-w-[1250px] w-full mt-[70px]">
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
                        <button onClick={() => window.location.href='twitter'} className="border_top flex p-[15px] bg-linear-to-b from-white/15 to-white/0 rounded-full  backdrop-blur-[7px]">
                            {twitterIcon}
                        </button>
                    </div>
                    <span className={"text-[#959EB1]/50"}>
                        © 2025 Valen.com | All Rights Reserved.
                    </span>
                </div>
            </header>

        </>
    );
}
