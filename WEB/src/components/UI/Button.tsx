import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

function Button({ children, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className='transition-all duration-200 hover:scale-105 cursor-pointer p-2.5 bg-(--primary) rounded-xl focus:outline-none focus:ring-2 focus:ring-(--ring)/30 disabled:opacity-40 disabled:pointer-events-none'
    >
      {children}
    </button>
  )
}

export default Button;