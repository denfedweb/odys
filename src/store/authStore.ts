import { create } from 'zustand'

const useAuthStore = create((set) => ({
    token: localStorage.getItem("token") || null,
    setToken: (token: string) => set({ token }),
}))

export default useAuthStore
