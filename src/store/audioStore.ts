import { create } from "zustand";

interface AudioState {
  audioData: number;
  setAudioData: (data: number) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  audioData: 0,
  setAudioData: (data) => set({ audioData: data }),
}));