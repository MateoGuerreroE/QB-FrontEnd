import { create } from "zustand";
import { UserData } from "../types/UserData";

interface GlobalState {
  user: UserData | null;
  isLoginVisible: boolean;
  setUser: (user: UserData) => void;
  removeUser: () => void;
  toggleLoginVisible: () => void;
}

export const useStore = create<GlobalState>((set) => ({
  user: null,
  isLoginVisible: false,
  setUser: (user: UserData) => set(() => ({ user })),
  removeUser: () => set(() => ({ user: null })),
  toggleLoginVisible: () =>
    set((state) => ({ isLoginVisible: !state.isLoginVisible })),
}));
