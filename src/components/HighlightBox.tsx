import { IHighlightBoxProps } from "@/interfaces";

function HighlightBox({ element, title, style }: IHighlightBoxProps) {
	return (
		<div className={`highlight-box ${style} min-h-28`}>
			<h3 className="sm:text-lg md:text-sm">{title}</h3>

			<div className="flex items-center justify-center">{element}</div>
		</div>
	);
}

export default HighlightBox;
