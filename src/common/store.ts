import { create } from "zustand"
export const useUserStore = create<{ name: string, setName: (name: string) => void }>((set) => ({
    name: 'Alice',
    setName: (name: string) => set({ name: name })
}))