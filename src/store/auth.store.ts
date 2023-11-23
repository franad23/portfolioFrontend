import { create } from "zustand";
import { persist } from "zustand/middleware";

//Interfaces 
import { State, Actions } from "../interfaces/auth.interface";

const useAuthStore = create(persist<State & Actions>(
  (set) => ({
    token: "",
    name: null,
    isAuth: false,
    language: true,
    setToken: (token: string) => set(() => ({
      token,
      isAuth: true
    })),
    setName: (name: string) => set(() => ({
      name
    })),
    setLogout: () => set(() => ({
      token: "",
      name: null,
      isAuth: false,
    })),
    setLanguage: (language: boolean) => set(() => ({
      language
    })),
  }), {
    name: 'auth'
  }
))

export default useAuthStore;