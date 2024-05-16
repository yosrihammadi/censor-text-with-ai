import React, { SyntheticEvent } from "react";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onSubmit?: (e: SyntheticEvent) => void;
  onClick?: (e: SyntheticEvent) => void;
};
export default function Button({
  type = "button",
  children,
  onSubmit,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
      className="bg-blue-500 text-white font-medium transition-all py-3 px-5 rounded-2xl hover:bg-blue-600  hover:scale-105"
    >
      {children}
    </button>
  );
}
