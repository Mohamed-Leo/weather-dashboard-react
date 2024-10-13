import { ReactNode, useContext } from "react";
import { ThemeContext } from "../App";

interface IBoxProps {
  children: ReactNode;
  backGround?: string;
  title?: string;
  Boxstyle?: string;
  icon?: JSX.Element;
}

function Box({ children, backGround = "", Boxstyle, title, icon }: IBoxProps) {
  // use the themecontext---
  const themecontextvalues = useContext(ThemeContext);

  // destrucure theme and check to avoid errors -----
  const theme = themecontextvalues?.theme;

  // boxBackgorund style---
  const boxBackgorund = backGround ? "bg-white" : "";

  return (
    <div
      className={`${Boxstyle} ${theme === "dark" ? backGround : boxBackgorund}`}
    >
      {title && (
        <h3 className="flex items-center gap-2 justify-center text-lg font-bold">
          {icon}
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default Box;
