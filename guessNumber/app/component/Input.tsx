import Button from "../../util/Button"
import { useNumberStore } from "../../store/numberStore"
import { useState, type MouseEvent } from "react"

export default function Input() {
  const [input, setInput] = useState<string>("")

  const setNumber = useNumberStore((state) => state.setNumber)
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (input != null) {
      setNumber(Number(input))
      setInput("")
    }
  }

  return (
    <>
      <div className="text-center text-[1.35rem] font-bold mb-7 text-[#304278]">
        숫자 맞히기 게임
      </div>
      <form className="flex gap-2 mb-4.5">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-lg bg-gray-50 transition-all duration-150 ease-in-out
         focus:border-blue-600 focus:bg-white focus:outline-none"
          type="text"
          value={input}
          placeholder="1~100 입력"
          onChange={(e) => {
            setInput(e?.target.value)
          }}
        />
        <Button onClick={handleClick}>확인</Button>
      </form>
    </>
  )
}
