import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "goodanswer" | "badanswer"
  selected?: boolean
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "", 
  variant = "default", 
  selected = false,
  ...props 
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-4"
  const variantStyles = {
    default: "bg-white text-gray-700 cursor-pointer hover:bg-blue-200 focus:ring-[#3F85A7]-600",
    goodanswer: "bg-blue-700 text-white focus:ring-blue-600",
    badanswer: "bg-red-700 text-white cursor-pointer"
  }

  const selectedStyle = selected ? "ring-2 ring-blue-500 ring-offset-2" : ""

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${selectedStyle} ${className}`

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  )
}
