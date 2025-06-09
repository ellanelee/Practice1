import type { IButtonProps } from "./type"

export default function Button({ onClick, children }: IButtonProps) {
  return (
    <>
      <button
        className="flex-none bg-blue-600 text-white border-none rounded-full text-base font-semibold w-10 h-10 cursor-pointer shadow-sm transition-colors duration-150 ease-in-out flex items-center justify-center leading-tight tracking-tight px-0 py-0"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
