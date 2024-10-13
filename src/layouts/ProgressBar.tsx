import { Progress } from "@/components/ui/progress";

interface IProgressBarProps {
  children: JSX.Element;
  progress: number;
}

export function ProgressBar({ children, progress }: IProgressBarProps) {
  return (
    <div className="col-span-full space-y-2 capitalize">
      {children}
      <Progress value={progress} className="progress" max={10} />
    </div>
  );
}

export default ProgressBar;
