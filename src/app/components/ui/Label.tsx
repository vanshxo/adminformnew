// components/ui/Label.tsx

import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <label className="text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

export default Label;
