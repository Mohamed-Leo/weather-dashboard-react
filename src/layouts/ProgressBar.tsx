import { Progress } from "@/components/ui/progress";
import { IProgressBarProps } from "@/interfaces";

export function ProgressBar({
	children,
	progress,
}: IProgressBarProps): JSX.Element {
	return (
		<div className="col-span-full space-y-2 capitalize">
			{children}
			<Progress value={progress} className="progress" max={10} />
		</div>
	);
}

export default ProgressBar;
