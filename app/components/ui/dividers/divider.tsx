import React from "react";

interface DividerProps {
  fullWidth?: boolean;
  customHeight?: string;
  color?: string;
}

function Divider({ fullWidth, customHeight, color }: DividerProps) {
  return (
    <div
      className={`${fullWidth ? "w-full" : "w-[640px]"} ${
        customHeight ? customHeight : "h-[2px]"
      } ${color ? color : "bg-black"}`}
    ></div>
  );
}

export default Divider;
