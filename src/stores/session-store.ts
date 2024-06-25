import { create } from 'zustand'
import { User } from '@prisma/client'

export interface SessionState {
  session: User | null
}

export interface SessionActions {
  setSession: (user: User) => void
}

export type SessionStore = SessionState & SessionActions

export const useSessionStore = create<SessionStore>((set) => ({ session: null, setSession: (session) => set({ session }) }))
