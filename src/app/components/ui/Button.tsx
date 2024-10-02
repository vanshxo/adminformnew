// components/ui/Button.tsx

"use client"; // Use this for client-side components

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary"; // Optional variant prop
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500";

  const variantStyles =
    variant === "primary" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 hover:bg-gray-600";

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
