import { create } from "zustand";

interface GlobalState {
  isLoginVisible: boolean;
  isLogged: boolean;
  favorites: string[];
  userId: string | null;
  token: string | null;
  toggleIsLogged: () => void;
  toggleLoginVisible: () => void;
  setFavorites: (val: string[]) => void;
  setUserId: (userId: string | null) => void;
  setToken: (token: string | null) => void;
}

export const useStore = create<GlobalState>((set) => ({
  isLogged: false,
  isLoginVisible: false,
  favorites: [],
  userId: null,
  token: null,
  toggleIsLogged: () => set((state) => ({ isLogged: !state.isLogged })),
  toggleLoginVisible: () =>
    set((state) => ({ isLoginVisible: !state.isLoginVisible })),
  setFavorites: (val: string[]) => set(() => ({ favorites: val })),
  setUserId: (userId: string | null) => set(() => ({ userId })),
  setToken: (token: string | null) => set(() => ({ token })),
}));
