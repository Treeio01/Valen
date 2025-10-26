import {Link, Head} from "@inertiajs/react";
import Header from "@/Components/Landing/Header";
import {useEffect, useState} from "react";
import {usePage} from "@inertiajs/react";
import MainSection from "@/Components/Landing/Sections/MainSection.jsx";
import AboutSection from "@/Components/Landing/Sections/AboutSection.jsx";
import HowItWorks from "@/Components/Landing/Sections/HowItWorks/HowItWorks.jsx";
import TokenSection from "@/Components/Landing/Sections/TokenSection.jsx";
import KeyFeatures from "@/Components/Landing/Sections/KeyFeatures/KeyFeatures.jsx";
import RoadmapSection from "@/Components/Landing/Sections/Roadmap/RoadmapSection.jsx";
import FaqSection from "@/Components/Landing/Sections/FAQ/FaqSection.jsx";
import Footer from "@/Components/Landing/Footer.jsx";

export default function Landing() {
    const [isLoaded, setIsLoaded] = useState(false);
    const {props} = usePage();
    useEffect(() => {
        function handleLoaded() {
            setIsLoaded(true);
        }

        if (document.readyState === "complete") {
            handleLoaded();
        } else {
            window.addEventListener("load", handleLoaded);
            return () => window.removeEventListener("load", handleLoaded);
        }
    }, []);

    return (<>
        <div className="flex flex-col relative items-center w-full overflow-x-hidden bg-black">
            <Head title="Valen"/>
            <div className={`loader${isLoaded ? " fade-out" : ""}`}>
                <img src="/img/logo.svg" className="loader_image" alt=""/>
            </div>
            <div className="flex z-50 w-full justify-center py-3 bg-linear-to-b from-mainl-1 to-mainl-2">
                    <span className="text-white text-shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] leading-[150%] text-center">
                        {props.settings.text}
                    </span>
            </div>
            <img src="/img/main-bg.png" className="absolute top-[47px] left-1/2 -translate-x-1/2" alt=""/>
            <Header twitter={props.settings.twitter}></Header>
            <MainSection/>
            <AboutSection/>
            <HowItWorks/>
            <TokenSection/>
            <KeyFeatures/>
            <RoadmapSection/>
            <FaqSection/>
            <Footer twitter={props.settings.twitter}/>
        </div>
    </>);
}
