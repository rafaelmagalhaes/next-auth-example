import { create } from 'zustand'

interface AuthStoreInterface {
  authenticated: boolean
  setAuthentication: (val: boolean) => void
  user: any
  setUser: (user: any) => void
}

// create our store
export const useAuthStore = create<AuthStoreInterface>((set) => ({
  authenticated: false,
  user: {},
  setAuthentication: (val) => set((state) => ({ authenticated: val })),
  setUser: (user) => set({ user }),
}))
