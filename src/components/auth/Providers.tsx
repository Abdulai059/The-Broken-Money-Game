// @ts-nocheck
'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { mainnet, polygon, optimism, arbitrum } from 'viem/chains'

const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

if (!appId) {
    throw new Error("Missing NEXT_PUBLIC_PRIVY_APP_ID");
}

export default function Providers({ children }) {
    return (
        <PrivyProvider
            appId={appId}
            config={{
                loginMethods: ['email', 'wallet', 'farcaster', 'google', 'twitter'],
                appearance: {
                    theme: 'light',
                    accentColor: '#676FFF',
                },
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets',
                },
                defaultChain: mainnet,
                supportedChains: [mainnet, polygon, optimism, arbitrum],
            }}
        >
            {children}
        </PrivyProvider>
    )
}