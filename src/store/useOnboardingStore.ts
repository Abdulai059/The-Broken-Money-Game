import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * useOnboardingStore
 *
 * Tracks whether the player has completed the one-time onboarding
 * experience, their wallet balance, what decision they made, and
 * whether their tree has grown.
 *
 * `onboardingComplete` and `decision` are persisted to localStorage
 * so returning players skip onboarding and can see their day-2 reward.
 *
 * Everything else is transient scene state.
 */

export type OnboardingDecision = "spend" | "plant" | null;

interface OnboardingState {
    // Persisted
    onboardingComplete: boolean;
    decision: OnboardingDecision;
    lastVisitDate: string | null; // ISO date string

    // Transient
    balance: number;
    draining: boolean;
    walletTapped: boolean;
    treeGrown: boolean;
    showDayTwoReward: boolean;

    // Actions
    startDrain: () => void;
    tapWallet: () => void;
    makeDecision: (choice: "spend" | "plant") => void;
    growTree: () => void;
    showReward: () => void;
    completeOnboarding: () => void;
    resetOnboarding: () => void; // dev helper
}

export const useOnboardingStore = create<OnboardingState>()(
    persist(
        (set, get) => ({
            // Persisted defaults
            onboardingComplete: false,
            decision: null,
            lastVisitDate: null,

            // Transient defaults
            balance: 100,
            draining: false,
            walletTapped: false,
            treeGrown: false,
            showDayTwoReward: false,

            startDrain: () => set({ draining: true }),

            tapWallet: () => {
                if (get().walletTapped) return;
                set({ draining: false, walletTapped: true });
            },

            makeDecision: (choice) => set({ decision: choice }),

            growTree: () => set({ treeGrown: true }),

            showReward: () => set({ showDayTwoReward: true }),

            completeOnboarding: () =>
                set({
                    onboardingComplete: true,
                    lastVisitDate: new Date().toISOString(),
                }),

            resetOnboarding: () =>
                set({
                    onboardingComplete: false,
                    decision: null,
                    lastVisitDate: null,
                    balance: 100,
                    draining: false,
                    walletTapped: false,
                    treeGrown: false,
                    showDayTwoReward: false,
                }),
        }),
        {
            name: "onboarding-state",
            storage: createJSONStorage(() => localStorage),
            // Only persist what needs to survive a refresh
            partialize: (state) => ({
                onboardingComplete: state.onboardingComplete,
                decision: state.decision,
                lastVisitDate: state.lastVisitDate,
            }),
        }
    )
);
