import { ReactNode } from "react";

interface IHighlightBoxProps {
  element: ReactNode;
  title?: string;
  backGround?: string;
}

function HighlightBox({ element, title, backGround = "" }: IHighlightBoxProps) {
  return (
    <div
      className={`highlight-box relative ${backGround} rounded-2xl h-40 xl:h-[100px] py-3 px-6`}
    >
      <h3 className="sm:text-lg md:text-sm">{title}</h3>

      <div className="text-center scale-110 absolute sm:top-[50%] top-[60%] xl:left-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {element}
      </div>
    </div>
  );
}

export default HighlightBox;
