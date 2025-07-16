import React from 'react'

const magicButton = ({
    icon, position, handleClick, children, className = "", type = "button", disabled = false
}: {
    icon: React.ReactNode;
    position: String;
    handleClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}) => {
  return (   
    <button
      type={type}
      disabled={disabled}
      className={`left-8 gap-2 mt-10 inline-flex h-12 w-[188px] animate-shimmer items-center justify-left rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {children ? children : "Show my work"}
      {position === "right" && icon}
    </button>
  )
}

export default magicButton
