interface ICompassProps {
	width?: number;
	height?: number;
	direction?: number;
}

function Compass({ width = 50, height = 50, direction = 0 }: ICompassProps) {
	return (
		<div className="relative">
			<img src="compass.png" alt="compass" width={width} height={height} />
			<img
				src="compass-arrow.png"
				alt="compass-arrow"
				style={{ transform: `translate(-50%, -50%) rotate(${direction}deg)` }}
				className="absolute top-1/2 left-1/2 origin-center transition-all duration-500 ease-in-out"
				width={width / 12}
				height={height / 12}
			/>
		</div>
	);
}

export default Compass;
