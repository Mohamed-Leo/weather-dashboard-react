import { Skeleton } from "@/components/ui/skeleton";

interface ILoadingProps {
  height?: string;
  width?: string;
}

function Loading({ height = "min-h-80", width = "w-fit" }: ILoadingProps) {
  return <Skeleton className={`${height} ${width}`} />;
}

export default Loading;
