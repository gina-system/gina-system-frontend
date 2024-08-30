import { ReactNode } from "react";

interface ButtonIconProps {
    children:ReactNode;
}
export default function ButtonIcons({children}:ButtonIconProps) {
  return (
    <>
      <button className="w-6 h-6">
        {children}
      </button>
    </>
  );
}
