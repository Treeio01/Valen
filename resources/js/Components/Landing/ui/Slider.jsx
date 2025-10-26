import React, { useMemo, useState } from "react";

/** Utility: clamp a number */
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

/**
 * GradientSlider (separate, reusable component)
 *
 * Props
 * - value?: number (controlled)
 * - defaultValue?: number (uncontrolled)
 * - onChange?: (n: number) => void
 * - min?: number (default 0)
 * - max?: number (default 100)
 * - step?: number (default 1)
 * - showValue?: boolean (default true)
 * - className?: string
 * - ariaLabel?: string (default "Slider")
 */
export function GradientSlider({
                                   value,
                                   defaultValue = 0,
                                   onChange,
                                   min = 0,
                                   max = 100,
                                   step = 1,
                                   showValue = true,
                                   className = "",
                                   ariaLabel = "Slider",
                               }) {
    const isControlled = value !== undefined;
    const [inner, setInner] = useState(() => clamp(defaultValue, min, max));
    const current = isControlled ? clamp(value, min, max) : inner;

    const percent = useMemo(() => {
        if (max === min) return 0;
        return ((current - min) / (max - min)) * 100;
    }, [current, min, max]);

    const handleChange = (e) => {
        const next = clamp(Number(e.target.value), min, max);
        if (!isControlled) setInner(next);
        onChange?.(next);
    };

    return (
        <div className={"relative select-none " + className}>
            {/* Outer gradient ring */}
            <div className="flex w-full bg-gradient-to-r from-[#3278FF] to-[#2260D8] rounded-full p-[2px]">
                {/* Inner dark track */}
                <div className="relative flex w-full rounded-full bg-[#070707] p-[3px]">
                    {/* Filled portion with handle at the end */}
                    <div
                        className="flex min-h-[26px] rounded-full bg-gradient-to-r from-[#3278FF]/30 to-[#2260D8] justify-end transition-[width] duration-150 ease-out"
                        style={{ width: `max(${percent}%, 26px)` }}
                    >
                        {/* Handle */}
                        <div className="flex w-full max-w-[26px] min-h-[26px] items-center justify-center rounded-full border-2 border-white/30 bg-gradient-to-r from-[#5D94FF] to-[#2260D8]">
                            {showValue && (
                                <span className="text-white font-semibold text-[10px] leading-none">
                  {Math.round(current)}
                </span>
                            )}
                        </div>
                    </div>

                    {/* Accessible native input overlays the whole control */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={current}
                        onChange={handleChange}
                        aria-label={ariaLabel}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    />
                </div>
            </div>
        </div>
    );
}

