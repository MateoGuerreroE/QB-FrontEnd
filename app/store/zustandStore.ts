import { create } from "zustand";

interface GlobalState {
  isLoginVisible: boolean;
  isLogged: boolean;
  favorites: string[];
  toggleIsLogged: () => void;
  toggleLoginVisible: () => void;
  setFavorites: (val: string[]) => void;
}

export const useStore = create<GlobalState>((set) => ({
  isLogged: false,
  isLoginVisible: false,
  favorites: [],
  toggleIsLogged: () => set((state) => ({ isLogged: !state.isLogged })),
  toggleLoginVisible: () =>
    set((state) => ({ isLoginVisible: !state.isLoginVisible })),
  setFavorites: (val: string[]) => set((state) => ({ favorites: val })),
}));
