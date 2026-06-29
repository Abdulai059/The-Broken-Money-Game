import { create } from "zustand";

/**
 * usePlayerStore
 *
 * Zustand store for the player's in-game resources.
 * Previously these lived as local useState inside TopBar, which meant
 * BalanceBadge in Nav could never see the real values.
 *
 * Now any component in the app can read or update gold/fire/water
 * without prop drilling.
 */

type ResourceType = "gold" | "fire" | "water";

interface PlayerState {
    gold: number;
    fire: number;
    water: number;
    earn: (type: ResourceType) => void;
}

export const usePlayerStore = create<PlayerState>()((set) => ({
    gold: 100,
    fire: 0,
    water: 0,

    earn: (type) =>
        set((state) => ({
            [type]: state[type] + (type === "gold" ? 10 : 1),
        })),
}));
