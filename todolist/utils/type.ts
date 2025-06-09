import type { MouseEvent, ReactNode } from "react"

export interface IButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

export interface ItodoItem {
  id: string
  todo: string
  done: boolean
}

export interface ItodoState {
  todos: ItodoItem[]
  addTodos: (entry: ItodoItem) => void
  deleteTodos: (entry: string) => void
  updateTodos: (entry: ItodoItem) => void
}
