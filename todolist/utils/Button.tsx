import { IButtonProps } from "./type"

export function Button({ onClick, children }: IButtonProps) {
  return (
    <>
      <button
        style={{
          fontSize: "15px",
          backgroundColor: "#4c75f2",
          color: "white",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
          whiteSpace: "nowrap",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export function EditButton({ onClick }) {
  return (
    <>
      <button
        className="w-[25px] h-[25px] p-1 ml-1 flex justify-center items-center hover:bg-blue-100 hover:text-blue-700"
        onClick={onClick}
      >
        <svg
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.1 2.3l2.6 2.6-9.1 9.1-2.7.1.1-2.7 9.1-9.1z"></path>
        </svg>
      </button>
    </>
  )
}

export function DeleteButton({ onClick }) {
  return (
    <>
      <button
        className="w-[25px] h-[25px] p-1 ml-1 flex justify-center items-center hover:bg-blue-100 hover:text-blue-700"
        onClick={onClick}
      >
        <svg
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="4" x2="13" y2="13"></line>
          <line x1="13" y1="4" x2="4" y2="13"></line>
        </svg>
      </button>
    </>
  )
}
