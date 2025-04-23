import { create } from 'zustand';

type ScrollStore = {
  position: number;
  savePosition: (y: number) => void;
  clearPosition: () => void;
};

export const useScrollStore = create<ScrollStore>((set) => ({
  position: 0,
  savePosition: (y) => set({ position: y }),
  clearPosition: () => set({ position: 0 }),
}));
