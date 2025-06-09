import type { MouseEvent, ReactNode } from "react"

export interface IButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

export interface IGuessHistory {
  guessNum: number
  result: "Up!" | "Down!" | "정답입니다!"
}

export interface INumberState {
  number: number | null
  answer: number | null
  correct: boolean
  history: IGuessHistory[]
  addHistory: (entry: IGuessHistory) => void
  resetHistory: () => void
  setAnswer: (value: number | null) => void
  setNumber: (value: number | null) => void
  setCorrect: (value: boolean) => void
}
