"use client"
import { MouseEvent, useState } from "react"
import { Button } from "../../utils/Button"
import { useTodoStore } from "../../store/todoStore"
import TodoItem from "./TodoItem"

export default function InputPage() {
  const [input, setInput] = useState("")
  const addTodos = useTodoStore((state) => state.addTodos)
  const todos = useTodoStore((state) => state.todos)

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const weekday = today.getDay()
  const weekdayInfo = ["일", "월", "화", "수", "목", "금", "토"]
  console.log(today, year, month, date, weekday)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const todo = { id: Date.now().toString(), todo: input, done: false }
    addTodos(todo)
    setInput("")
  }

  return (
    <>
      <div className="max-w-[420px] mt-12 mx-auto bg-white rounded-[18px] shadow-lg p-8 px-6">
        <div className="text-[1.19rem] font-bold text-[#232d41] mb-4 tracking-[0.01em]">
          {year}. {month}. {date} ({weekdayInfo[weekday]})
        </div>
        <form className="flex gap-2.5 items-center mb-[18px]">
          <input
            className="flex-1 px-3.5 py-2.5 border-[1.2px] border-gray-300 rounded-[7px]"
            type="text"
            value={input}
            placeholder="할 일을 입력하세요"
            onChange={(e) => {
              setInput(e?.target.value)
            }}
          />
          <Button onClick={handleClick}>+</Button>
        </form>
        <div className="text-gray-400 text-left">
          {todos.filter((el) => el.done == false).length} tasks left
        </div>
        {todos.map((el) => (
          <TodoItem key={el.id} id={el.id} todo={el.todo} done={el.done} />
        ))}
      </div>
    </>
  )
}
