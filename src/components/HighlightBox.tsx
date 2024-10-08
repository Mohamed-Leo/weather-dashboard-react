import { ReactNode } from "react";

interface IHighlightBoxProps {
  element: ReactNode;
  title?: string;
  backGround?: string;
}

function HighlightBox({ element, title, backGround = "" }: IHighlightBoxProps) {
  return (
    <div
      className={`highlight-box flex flex-col gap-1 xl:gap-5 items-center justify-between ${backGround} rounded-2xl md:flex-col xl:flex-row xl:h-[100px] py-3 px-6`}
    >
      <h3 className="sm:text-lg md:text-sm">{title}</h3>

      <div className="flex items-center justify-center">{element}</div>
    </div>
  );
}

export default HighlightBox;
