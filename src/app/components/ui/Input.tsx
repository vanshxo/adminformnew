// components/ui/Input.tsx

"use client"; // Use this for client-side components

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; // Add a label prop for better accessibility
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={ref}
        {...props}
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
});

Input.displayName = "Input"; // Set display name for debugging
export default Input;
