export default function MobileMenu({
                                       isOpen,
                                       onClose,
                                       button,
                                       navLinks = [],

                                   }) {
    const handleLinkClick = (href) => () => {
        if (onNavigate) {
            onNavigate(href);
        }
    };

    return (
        <div
            id="mobileMenuContent"
            className={`flex flex-col  gap-6 p-6 justify-start bg-white fixed top-0 right-0 overflow-y-hidden z-[111] w-[300px] h-full transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className="flex items-center gap-3">
                <img src="/img/logo.svg" className="max-w-[50px]" alt="" />
            </div>
            <button
                id="mobileMenuClose"
                className="absolute top-7 right-7"
                onClick={onClose}
            >
                <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Menu / Close_MD">
                        <path
                            id="Vector"
                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </button>
            <ul
                id="headerListMobile"
                className="flex flex-col gap-2"
                onClick={onClose}
            >
                {navLinks.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            {button}
        </div>
    );
}
