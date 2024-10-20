import React from "react";

interface DividerProps {
  fullWidth?: boolean;
  customHeight?: string;
}

function Divider({ fullWidth, customHeight }: DividerProps) {
  return (
    <div
      className={`${fullWidth ? "w-full" : "w-[640px]"} ${
        customHeight ? customHeight : "h-[2px]"
      } bg-black`}
    ></div>
  );
}

export default Divider;
