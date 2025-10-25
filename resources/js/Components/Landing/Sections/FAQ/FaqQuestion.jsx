import {useState} from "react";

export default function FaqQuestion({index, item}) {

    const [openIndex, setOpenIndex] = useState(null);


    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div
            key={index}
            className="flex bg-[#0A0A0A] border-2 border-[#141414] rounded-[23px] w-full"
        >
            <div
                className="flex border_top flex-col p-[30px] gap-2 w-full rounded-[20px] relative cursor-pointer"
                onClick={() => toggleFaq(index)}
            >
                <div className="flex w-full justify-between items-center">
                <span className="text-lg font-semibold text-[#F5F5F5]">
                  {item.q}
                </span>
                    <svg
                        className={`transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.9999 17.2861L3.14392 8.82705L5.50309 6.28613L11.0009 12.2058L16.4984 6.2865L18.8582 8.82705L11.0016 17.2858L10.9999 17.2861Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                    <span className="text-[#A7ADBE] block">{item.a}</span>
                </div>
            </div>
        </div>
    )
}
