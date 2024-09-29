import { ReactNode } from "react"

interface IHighlightBoxProps {
    element : ReactNode;
    title? : string;
    backGround? : string;
}

function HighlightBox({element , title , backGround = ''} : IHighlightBoxProps) {
    return (
        <div className={`${backGround} rounded-2xl sm:p-4 sm:space-y-4 md:py-2 px-6`}>
            <h3 className="sm:text-lg md:text-sm">{title}</h3>

            <div className="text-center">
                {element}
            </div>
        </div>
    )
}

export default HighlightBox