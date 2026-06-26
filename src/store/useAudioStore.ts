import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * useAudioStore
 *
 * Zustand store for all audio settings.
 * `persist` middleware automatically saves `playing` and `soundEffects`
 * to localStorage under the key "audio-settings", so preferences
 * survive page refreshes without any manual localStorage calls.
 *
 * The actual audio elements (bgAudioRef, clickAudioRef) still live in
 * MusicProvider as refs — the store holds preference state only.
 * Actions that need the audio elements are called from MusicProvider
 * after it reads the store values.
 */

interface AudioState {
    playing: boolean;
    soundEffects: boolean;
    toggleMusic: () => void;
    toggleSoundEffects: () => void;
}

export const useAudioStore = create<AudioState>()(
    persist(
        (set) => ({
            playing: true,
            soundEffects: true,

            toggleMusic: () =>
                set((state) => ({ playing: !state.playing })),

            toggleSoundEffects: () =>
                set((state) => ({ soundEffects: !state.soundEffects })),
        }),
        {
            name: "audio-settings", // localStorage key
            storage: createJSONStorage(() => localStorage),
            // Only persist these two preference booleans
            partialize: (state) => ({
                playing: state.playing,
                soundEffects: state.soundEffects,
            }),
        }
    )
);
