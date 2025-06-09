import { create } from "zustand"
import type { INumberState } from "../util/type"

export const useNumberStore = create<INumberState>((set) => ({
  number: null,
  answer: null,
  history: [],
  correct: false,
  addHistory: (entry) =>
    set((state) => ({ history: [...state.history, entry] })),
  resetHistory: () => set({ history: [] }),
  setNumber: (value: number | null) => set({ number: value }),
  setAnswer: (value: number | null) => set({ answer: value }),
  setCorrect: (value) => set({ correct: value }),
}))
