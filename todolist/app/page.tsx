import Image from "next/image"
import InputPage from "./component/InputPage"

export default function Home() {
  return (
    <>
      <div className="bg-[#f5f7fb] font-noto-pretendard m-0 text-[#232d41] min-h-screen">
        <InputPage />
      </div>
    </>
  )
}
