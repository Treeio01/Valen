import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React, { useEffect } from "react";
import { initAOS } from "@/utils/aos.js";
import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const AOSProvider = ({ children }) => {
            useEffect(() => {
                initAOS();
            }, []);
            return children;
        };

        root.render(
            <PrivyProvider
                appId="cmh6xl0az01qul40c2flu0kpj"
                config={{
                    appearance: {
                        accentColor: "#ffffff",
                        theme: "#000000",
                        showWalletLoginFirst: false,
                        logo: "https://i.imgur.com/0OgGdcL.png",
                        walletChainType: "solana-only",
                        walletList: [
                            "detected_solana_wallets",
                            "phantom",
                            "solflare",
                            "backpack",
                            "okx_wallet",
                        ],
                    },
                    loginMethods: ["wallet"],
                    fundingMethodConfig: {
                        moonpay: {
                            useSandbox: true,
                        },
                    },
                    embeddedWallets: {
                        showWalletUIs: true,
                        ethereum: {
                            createOnLogin: "off",
                        },
                        solana: {
                            createOnLogin: "users-without-wallets",
                        },
                    },
                    mfa: {
                        noPromptOnMfaRequired: false,
                    },
                    externalWallets: {
                        solana: {
                            connectors: toSolanaWalletConnectors(),
                        },
                    },
                }}
            >
                <AOSProvider>
                    <App {...props} />
                </AOSProvider>
            </PrivyProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
