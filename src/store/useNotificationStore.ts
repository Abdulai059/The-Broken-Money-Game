import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * useNotificationStore
 *
 * Zustand store for notification preferences.
 * Previously these lived as local useState inside Notification.tsx,
 * so every navigation reset all toggles back to their defaults.
 *
 * With persist middleware, the user's choices survive navigation
 * and page refreshes automatically.
 */

interface NotificationState {
    dailySpin: boolean;
    completeTasks: boolean;
    claimRewards: boolean;
    boostPowerups: boolean;
    weeklyInsight: boolean;
    aiRecommendations: boolean;
    toggle: (key: keyof Omit<NotificationState, "toggle">) => void;
}

export const useNotificationStore = create<NotificationState>()(
    persist(
        (set) => ({
            dailySpin: true,
            completeTasks: true,
            claimRewards: true,
            boostPowerups: true,
            weeklyInsight: true,
            aiRecommendations: true,

            toggle: (key) =>
                set((state) => ({ [key]: !state[key] })),
        }),
        {
            name: "notification-settings",
            storage: createJSONStorage(() => localStorage),
            partialize: ({ toggle, ...prefs }) => prefs,
        }
    )
);
