import { useNumberStore } from "../../store/numberStore"
import { useEffect } from "react"

export default function GameStatus() {
  //store
  const number = useNumberStore((state) => state.number)
  const answer = useNumberStore((state) => state.answer)
  const history = useNumberStore((state) => state.history)
  const correct = useNumberStore((state) => state.correct)
  const setCorrect = useNumberStore((state) => state.setCorrect)
  const addHistory = useNumberStore((state) => state.addHistory)
  const resetHistory = useNumberStore((state) => state.resetHistory)
  const setNumber = useNumberStore((state) => state.setNumber)
  const setAnswer = useNumberStore((state) => state.setAnswer)

  console.log(history, number, correct, answer)
  function handleRestart() {
    resetHistory()
    setNumber(null)
    setAnswer(Math.floor(Math.random() * 100 + 1))
    setCorrect(false)
  }

  useEffect(() => {
    if (!number || !answer) return
    if (number > answer) {
      addHistory({ guessNum: number, result: "Down!" })
    } else if (number < answer) {
      addHistory({ guessNum: number, result: "Up!" })
    } else {
      setCorrect(true)
      addHistory({ guessNum: number, result: "정답입니다!" })
    }
  }, [number])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>시도 : {history.length}회</div>
        {correct && (
          <button
            className="inline-block bg-[#ccd6f8] text-[#2949b0] border-none rounded-lg
         px-4 py-1.5 text-base font-semibold cursor-pointer ml-[13px]
         transition-colors duration-150 ease-in-out hover:bg-blue-600 hover:text-white"
            onClick={handleRestart}
          >
            다시하기
          </button>
        )}
      </div>
      {correct && <div>정답입니다!시도 횟수:{history.length}회</div>}
      <div>
        {history.map((el, index) => (
          <div
            className="text-[1.04rem] mb-2 flex justify-between px-[3px] text-[#565a76] last:text-[#1e2358] last:font-semibold"
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {el.guessNum}
            <div></div>
            {el.result}
          </div>
        ))}
      </div>
    </>
  )
}
