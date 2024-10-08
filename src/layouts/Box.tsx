import { ReactNode, useContext } from "react";
import { ThemeContext } from "../App";

interface IBoxProps {
  children: ReactNode;
  backGround?: string;
  title?: string;
  isGrid?: boolean;
  hasPadding?: boolean;
  isFlex?: boolean;
  colSpan?: string;
  icon?: JSX.Element;
}

function Box({
  children,
  backGround = "",
  title,
  isGrid,
  isFlex,
  hasPadding,
  colSpan = "",
  icon,
}: IBoxProps) {
  // use the themecontext---
  const themecontextvalues = useContext(ThemeContext);

  // destrucure theme and check to avoid errors -----
  const theme = themecontextvalues?.theme;

  return (
    <div
      className={`box ${colSpan} ${theme === "dark" ? backGround : `${backGround ? "bg-white" : ""}`} rounded-2xl overflow-hidden ${hasPadding ? "p-4" : ""} space-y-4`}
    >
      {title && (
        <h3 className="flex items-center gap-2 justify-center text-lg font-bold">
          {icon}
          {title}
        </h3>
      )}

      <div
        className={`${isFlex ? "flex flex-col items-center justify-center" : isGrid ? "grid grid-cols-2 gap-5" : ""} ${title ? "h-[calc(100%-40px)]" : "h-full"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Box;
