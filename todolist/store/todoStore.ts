// 'use client'
// import { create } from "zustand"
// import { ItodoItem, ItodoState } from "../utils/type"

// const getTodoSaved = (): ItodoItem[] => {
//   const todoSaved = localStorage.getItem("Todos")
//   return todoSaved ? JSON.parse(todoSaved) : []
// }

// const setTodoLocal = (todos: ItodoItem[]) => {
//   localStorage.setItem("Todos", JSON.stringify(todos))
// }

// export const useTodoStore = create<ItodoState>((set) => ({
//   todos: getTodoSaved(),
//   addTodos: (entry) =>
//     set((state) => {
//       const updated = [...state.todos, entry]
//       setTodoLocal(updated)
//       return { todos: updated }
//     }),
//   updateTodos: (entry) =>
//     set((state) => {
//       const updated = state.todos.map((el) =>
//         el.id === entry.id ? { ...el, todo: entry.todo, done: entry.done } : el
//       )
//       setTodoLocal(updated)
//       return { todos: updated }
//     }),
//   deleteTodos: (entry) =>
//     set((state) => {
//       const updated = state.todos.filter((el) => el.id != entry)
//       setTodoLocal(updated)
//       return { todos: updated }
//     }),
// }))

"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { ItodoItem, ItodoState } from "../utils/type"

// 이제 getTodoSaved나 setTodoLocal 함수를 직접 작성할 필요가 없습니다.

export const useTodoStore = create<ItodoState>()(
  persist(
    (set, get) => ({
      todos: [], // 서버에서 초기화, 클라이언트에서 하이드레이션, 빈배열

      addTodos: (entry) => {
        set((state) => ({ todos: [...state.todos, entry] }))
        // persist 미들웨어가 localStorage.setItem을 처리
      },
      updateTodos: (entry) => {
        set((state) => ({
          todos: state.todos.map((el) =>
            el.id === entry.id
              ? { ...el, todo: entry.todo, done: entry.done }
              : el
          ),
        }))
        // persist 미들웨어가 localStorage.setItem을 자동으로 처리합니다.
      },
      deleteTodos: (entry) => {
        set((state) => ({
          todos: state.todos.filter((el) => el.id !== entry),
        }))
        // persist 미들웨어가 localStorage.setItem을 자동으로 처리합니다.
      },
    }),
    {
      name: "Todos", // localStorage에 저장될 키 이름
      storage: createJSONStorage(() => localStorage), // localStorage를 스토리지로 지정
    }
  )
)
