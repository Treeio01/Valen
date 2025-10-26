import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Switcher({
    isActive,
    defaultActive = false,
    onToggle,
}) {
    const isControlled = typeof isActive === "boolean";
    const [internalActive, setInternalActive] = useState(defaultActive);
    const active = isControlled ? isActive : internalActive;

    const handleToggle = () => {
        const next = isControlled ? !isActive : !active;

        if (!isControlled) {
            setInternalActive(next);
        }

        onToggle?.(next);
    };

    return (
        <button
            onClick={handleToggle}
            className="relative flex items-center min-w-[53px] max-w-[53px] min-h-[30px] rounded-full bg-[#0C0C0C]/80 border border-[#171717] transition-colors duration-500"
        >
            {/* Ползунок */}
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                }}
                animate={{
                    background: active
                        ? "linear-gradient(to bottom, #3278FF, #2260D8)"
                        : "linear-gradient(to bottom, #262626, #262626)",
                    boxShadow: active
                        ? "0px 0px 10px rgba(50,120,255,0.4), inset 0 1px 2px rgba(0,0,0,0.6)"
                        : "inset 0 1px 2px rgba(0,0,0,0.6)",
                }}
                className={`absolute top-[5px] ${
                    active ? "right-[5px]" : "left-[5px]"
                } w-[20px] h-[20px] rounded-full overflow-hidden`}
            >
                {/* SVG появляется с fade-in при неактивном состоянии */}
                <AnimatePresence mode="wait">
                    {!active && (
                        <motion.img
                            key="icon"
                            src="/img/switcher-non-active.svg"
                            alt=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain"
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Плавная подсветка заднего фона */}
            <motion.div
                initial={false}
                animate={{
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.9,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(50,120,255,0.15), transparent 70%)",
                }}
            />
        </button>
    );
}
