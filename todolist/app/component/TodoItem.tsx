"use client"
import { useState } from "react"
import { useTodoStore } from "../../store/todoStore"
import { DeleteButton, EditButton } from "../../utils/Button"
import { ItodoItem } from "@/utils/type"

export default function TodoItem({ id, todo, done }: ItodoItem) {
  const deleteTodos = useTodoStore((state) => state.deleteTodos)
  const updateTodos = useTodoStore((state) => state.updateTodos)
  const [item, setItem] = useState<string>(todo)
  const [itemChange, setItemChange] = useState<string>(todo)
  const [editable, setEditable] = useState<boolean>(true)
  //item: 확정된값, itemChange: 현재수정중인값, 수정이 확정시 item에 기억해둠
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (itemChange == "" || itemChange == null) {
        setItemChange(item)
      } else {
        setItem(itemChange)
      }
      setEditable(true)
    }
  }
  const handleBlur = () => {
    setItemChange(item)
    setEditable(true)
  }
  const handleDelete = () => {
    deleteTodos(id)
  }
  const handleDone = () => {
    updateTodos({ id: id, todo: itemChange, done: !done })
  }
  return (
    <div
      key={id}
      className="flex justify-between items-center my-2 w-full group"
    >
      {done ? (
        <div>
          <input type="checkbox" className="mx-1" onChange={handleDone} />
          <span className="line-through text-gray-400">{itemChange}</span>
        </div>
      ) : (
        <div>
          <input type="checkbox" className="mx-1" onChange={handleDone} />
          <input
            type="text"
            value={itemChange}
            disabled={editable}
            onKeyDown={(e) => {
              handleKeydown(e)
            }}
            onChange={(e) => {
              setItemChange(e.target.value)
              console.log(item)
              console.log(itemChange)
            }}
            onBlur={handleBlur}
          />
        </div>
      )}
      <div className="text-gray-400 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity ">
        <EditButton
          onClick={() => {
            setEditable(false)
          }}
        />
        <DeleteButton onClick={handleDelete} />
      </div>
    </div>
  )
}
