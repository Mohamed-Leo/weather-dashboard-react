import { ReactNode } from "react";


interface IBoxProps {
    children: ReactNode;
    backGround?: string;
    title?: string;
    isGrid?: boolean;
    hasPadding?: boolean;
}

function Box({ children, backGround, title, isGrid , hasPadding}: IBoxProps) {
    return (
        <div className={`${backGround} rounded-2xl ${hasPadding ? 'p-4' : ""} space-y-4`}>
            {title && <h3>{title}</h3>}

            <div className={`${title ? 'h-[calc(100%-40px)]' : 'h-full'} ${isGrid ? 'grid grid-cols-2 gap-5' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Box