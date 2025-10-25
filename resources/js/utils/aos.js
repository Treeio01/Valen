// React-friendly версия AOS-like анимаций

// Подключить 1 раз при старте приложения (например, в App.jsx: useEffect(() => { initAOS(); }, []))
export function initAOS() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Добавляем стили только 1 раз
    if (!document.getElementById('__aos-animations-style')) {
        const animationStyles = document.createElement('style');
        animationStyles.id = '__aos-animations-style';
        animationStyles.textContent = `
            [data-aos] {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                backface-visibility: hidden;
                transform: translateZ(0);
                will-change: transform, opacity;
                transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            }
            [data-aos="fade-up"] { transform: translate3d(0, 50px, 0); opacity: 0; }
            [data-aos="fade-up"].aos-animate { transform: translate3d(0, 0, 0); opacity: 1; }
            [data-aos="fade-down"] { transform: translate3d(0, -50px, 0); opacity: 0; }
            [data-aos="fade-down"].aos-animate { transform: translate3d(0, 0, 0); opacity: 1; }
            [data-aos="fade-right"] { transform: translate3d(-50px, 0, 0); opacity: 0; }
            [data-aos="fade-right"].aos-animate { transform: translate3d(0, 0, 0); opacity: 1; }
            [data-aos="fade-left"] { transform: translate3d(50px, 0, 0); opacity: 0; }
            [data-aos="fade-left"].aos-animate { transform: translate3d(0, 0, 0); opacity: 1; }
            [data-aos="zoom-in"] { transform: scale3d(0.8, 0.8, 0.8); opacity: 0; }
            [data-aos="zoom-in"].aos-animate { transform: scale3d(1, 1, 1); opacity: 1; }
            [data-aos="zoom-out"] { transform: scale3d(1.2, 1.2, 1.2); opacity: 0; }
            [data-aos="zoom-out"].aos-animate { transform: scale3d(1, 1, 1); opacity: 1; }
            [data-aos="flip-up"] { transform: perspective(2500px) rotateX(-100deg); opacity: 0; }
            [data-aos="flip-up"].aos-animate { transform: perspective(2500px) rotateX(0); opacity: 1; }
            [data-aos="flip-down"] { transform: perspective(2500px) rotateX(100deg); opacity: 0; }
            [data-aos="flip-down"].aos-animate { transform: perspective(2500px) rotateX(0); opacity: 1; }
            [data-aos="slide-up"] { transform: translate3d(0, 100%, 0); opacity: 0; }
            [data-aos="slide-up"].aos-animate { transform: translate3d(0, 0, 0); opacity: 1; }
            [data-aos="rotate-in"] { transform: rotate(-15deg) scale(0.9); opacity: 0; transform-origin: center; }
            [data-aos="rotate-in"].aos-animate { transform: rotate(0) scale(1); opacity: 1; }
            [data-aos="bounce-in"] { transform: scale3d(0.3, 0.3, 0.3); opacity: 0; }
            [data-aos="bounce-in"].aos-animate { animation: bounceIn 0.8s; opacity: 1; }
            @keyframes bounceIn {
                from, 20%, 40%, 60%, 80%, to {
                    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                }
                0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
                20% { transform: scale3d(1.1, 1.1, 1.1); }
                40% { transform: scale3d(0.9, 0.9, 0.9); }
                60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }
                80% { transform: scale3d(0.97, 0.97, 0.97); }
                to { opacity: 1; transform: scale3d(1, 1, 1); }
            }
        `;
        document.head.appendChild(animationStyles);
    }

    // Используем 1 Observer на все элементы React-дерева
    if (!window.__AOS_OBSERVER__) {
        if (!('IntersectionObserver' in window)) {
            console.warn('[AOS] IntersectionObserver not supported');
            return;
        }
        // Универсальный observer
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('aos-animate');
                    // Animate once: stop observing after first reveal to prevent flicker on minor scrolls
                    window.__AOS_OBSERVER__.unobserve(entry.target);
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: [0, 0.1, 0.2, 0.3],
            }
        );
        window.__AOS_OBSERVER__ = observer;
    }

    // React-компатибл API для refresh/init
    window.AOS = {
        // Инициирует/реинициирует анимации для появившихся data-aos элементов
        refresh: function () {
            if (!window.__AOS_OBSERVER__) return;
            // Сначала unobserve всё, потом observe заново (safe для динамики реакции)
            // Получаем все элементы, которые потенциально можно анимировать:
            Array.from(document.querySelectorAll('[data-aos]')).forEach((el) => {
                window.__AOS_OBSERVER__.unobserve(el);
                el.classList.remove('aos-animate');
                el.classList.add('aos-init');
                window.__AOS_OBSERVER__.observe(el);
            });
        },
        init: function () {
            if (!window.__AOS_OBSERVER__) return;
            Array.from(document.querySelectorAll('[data-aos]')).forEach((el) => {
                el.classList.add('aos-init');
                window.__AOS_OBSERVER__.observe(el);
            });
        },
    };

    // Первый запуск
    window.AOS.init();
}

// React-хук для динамических страниц/компонентов
import { useEffect } from 'react';

export function useAOS() {
    useEffect(() => {
        // Если AOS еще не инициализирован (например, для unit-теста или SSR), то initAOS
        if (!window.AOS || !window.AOS.refresh) {
            initAOS();
        } else {
            window.AOS.refresh();
        }
    });

    // Можно использовать для ручного refresh по своему событию:
    const refreshAOS = () => {
        if (window.AOS && typeof window.AOS.refresh === 'function') {
            window.AOS.refresh();
        }
    };

    return { refreshAOS };
}
