import { Skeleton } from "@/components/ui/skeleton";
import { ILoadingProps } from "@/interfaces";

function Loading({
	height = "min-h-80",
	width = "w-fit",
}: ILoadingProps): JSX.Element {
	return <Skeleton className={`${height} ${width}`} />;
}

export default Loading;
