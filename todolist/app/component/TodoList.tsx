"use client"
import { useTodoStore } from "../../store/todoStore"
import TodoItem from "./TodoItem"

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos)
  console.log(todos)
  return (
    <>
      {todos.map((el) => (
        <TodoItem key={el.id} id={el.id} todo={el.todo} done={el.done} />
      ))}
    </>
  )
}
