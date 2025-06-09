"use client"
import { useEffect } from "react"
import { useNumberStore } from "../../store/numberStore"
import Input from "./Input"
import GameStatus from "./GameStatus"

export default function Outline() {
  console.log("Outline rendered")
  const setAnswer = useNumberStore((state) => state.setAnswer)
  useEffect(() => {
    setAnswer(Math.floor(Math.random() * 100 + 1))
  })

  console.log("outlineRendered")
  return (
    <>
      <div className="max-w-[370px] mx-auto bg-white rounded-2xl shadow-md p-9">
        <Input />
        <GameStatus />
      </div>
    </>
  )
}
