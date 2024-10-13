// all used icons ass resueable components--------------------

export const Rainy = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="22.53"
				x2="25.47"
				y1="42.95"
				y2="48.05"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#4286ee" />
				<stop offset=".45" stopColor="#4286ee" />
				<stop offset="1" stopColor="#0950bc" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="29.53"
				x2="32.47"
				y1="42.95"
				y2="48.05"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="36.53"
				x2="39.47"
				y1="42.95"
				y2="48.05"
				xlinkHref="#a"
			/>
		</defs>
		<path
			className="shape-stroke"
			fill="#e6effc"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="none"
			stroke="#e6effc"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M24.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M31.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.4s"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.4s"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#d)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M38.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.2s"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.2s"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
	</svg>
);

export const RainyHeaviy = ({ width = 100, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="a"
				x1="40.76"
				x2="50.83"
				y1="23"
				y2="40.46"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#9ca3af" />
				<stop offset=".45" stopColor="#9ca3af" />
				<stop offset="1" stopColor="#6b7280" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="22.53"
				x2="25.47"
				y1="42.95"
				y2="48.05"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#4286ee" />
				<stop offset=".45" stopColor="#4286ee" />
				<stop offset="1" stopColor="#0950bc" />
			</linearGradient>
			<linearGradient
				id="d"
				x1="29.53"
				x2="32.47"
				y1="42.95"
				y2="48.05"
				xlinkHref="#c"
			/>
			<linearGradient
				id="e"
				x1="36.53"
				x2="39.47"
				y1="42.95"
				y2="48.05"
				xlinkHref="#c"
			/>
		</defs>
		{/* Upper cloud */}
		<path
			fill="url(#a)"
			stroke="#848b98"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-2.1 0; 2.1 0; -2.1 0"
			/>
		</path>
		{/* Lower cloud */}
		<path
			className="shape-stroke"
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
		{/* Rain drops */}
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M24.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#d)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M31.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.4s"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.4s"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#e)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M38.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.2s"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.2s"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
	</svg>
);

export const RainySnowy = ({ width = 100, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="c"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="23.12"
				x2="24.88"
				y1="43.48"
				y2="46.52"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#86c3db" />
				<stop offset=".45" stopColor="#86c3db" />
				<stop offset="1" stopColor="#5eafcf" />
			</linearGradient>
			<linearGradient
				id="d"
				x1="22.67"
				x2="25.33"
				y1="42.69"
				y2="47.31"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="37.12"
				x2="38.88"
				y1="43.48"
				y2="46.52"
				xlinkHref="#a"
			/>
			<linearGradient
				id="f"
				x1="36.67"
				x2="39.33"
				y1="42.69"
				y2="47.31"
				xlinkHref="#a"
			/>
			<linearGradient
				id="b"
				x1="23.31"
				x2="24.69"
				y1="44.3"
				y2="46.7"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#4286ee" />
				<stop offset=".45" stopColor="#4286ee" />
				<stop offset="1" stopColor="#0950bc" />
			</linearGradient>
			<linearGradient
				id="g"
				x1="30.31"
				x2="31.69"
				y1="44.3"
				y2="46.7"
				xlinkHref="#b"
			/>
			<linearGradient
				id="h"
				x1="37.31"
				x2="38.69"
				y1="44.3"
				y2="46.7"
				xlinkHref="#b"
			/>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#c)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<g>
			<circle
				cx="24"
				cy="45"
				r="1.25"
				fill="none"
				stroke="url(#a)"
				strokeMiterlimit="10"
			/>
			<path
				fill="none"
				stroke="url(#d)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				begin="-2s"
				dur="4s"
				repeatCount="indefinite"
				type="translate"
				values="1 -6; -1 12"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				dur="9s"
				repeatCount="indefinite"
				type="rotate"
				values="0 24 45; 360 24 45"
			/>
			<animate
				attributeName="opacity"
				begin="-2s"
				dur="4s"
				repeatCount="indefinite"
				values="0;1;1;1;0"
			/>
		</g>
		<g>
			<circle
				cx="38"
				cy="45"
				r="1.25"
				fill="none"
				stroke="url(#e)"
				strokeMiterlimit="10"
			/>
			<path
				fill="none"
				stroke="url(#f)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				begin="-1s"
				dur="4s"
				repeatCount="indefinite"
				type="translate"
				values="1 -6; -1 12"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				dur="9s"
				repeatCount="indefinite"
				type="rotate"
				values="0 38 45; 360 38 45"
			/>
			<animate
				attributeName="opacity"
				begin="-1s"
				dur="4s"
				repeatCount="indefinite"
				values="0;1;1;1;0"
			/>
		</g>
		<path
			fill="none"
			stroke="url(#b)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M24.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#g)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M31.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.5s"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.5s"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#h)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M38.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				begin="-1s"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-1s"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
	</svg>
);

export const UvIndex = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="b"
				x1="26.75"
				x2="37.25"
				y1="22.91"
				y2="41.09"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<clipPath id="a">
				<path
					fill="none"
					d="M33.5 48.5v-9a6 6 0 016-6h17v-26h-49v49h28V53a6 6 0 01-2-4.5z"
				/>
			</clipPath>
		</defs>
		<g strokeMiterlimit="10" clipPath="url(#a)">
			<circle
				cx="32"
				cy="32"
				r="10.5"
				fill="#f8af18"
				stroke="#f8af18"
				strokeWidth=".5"
			/>
			<path
				fill="none"
				stroke="#fbbf24"
				strokeLinecap="round"
				strokeWidth="3"
				d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
			>
				<animateTransform
					attributeName="transform"
					dur="45s"
					repeatCount="indefinite"
					type="rotate"
					values="0 32 32; 360 32 32"
				/>
			</path>
		</g>
		<path
			fill="#fff"
			d="M41.69 46.56A1.87 1.87 0 0043 47c1.17 0 1.76-.52 1.76-1.56v-5.87a.66.66 0 01.12-.45.64.64 0 01.44-.12h1.12a.46.46 0 01.57.57v5.77A3.5 3.5 0 0146 48a4.17 4.17 0 01-3 1 4.14 4.14 0 01-3-1 3.5 3.5 0 01-1-2.68v-5.75a.46.46 0 01.57-.57h1.12a.6.6 0 01.43.12.66.66 0 01.12.45v5.83a1.47 1.47 0 00.45 1.16zM57.44 39.56l-3.17 9a.72.72 0 01-.25.38.81.81 0 01-.45.1h-1.13a.89.89 0 01-.45-.09.63.63 0 01-.24-.36l-3.19-9c-.14-.37 0-.56.37-.56h1a1.6 1.6 0 01.73.11.67.67 0 01.3.41l1.63 5.25c.06.23.13.48.19.77s.1.5.13.67v.25h.11a9.3 9.3 0 01.35-1.67l1.6-5.27a.61.61 0 01.3-.41 1.51 1.51 0 01.71-.11h1c.48-.03.6.16.46.53z"
		/>
	</svg>
);

export const WindyCloud = ({ width = 50, height = 50 }) => (
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={width}
			height={height}
			className="mx-auto"
		>
			<defs>
				<linearGradient
					id="a"
					x1="22.56"
					x2="39.2"
					y1="21.96"
					y2="50.8"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f3f7fe" />
					<stop offset=".45" stopColor="#f3f7fe" />
					<stop offset="1" stopColor="#deeafb" />
				</linearGradient>
			</defs>
			<path
				className="shape-stroke"
				fill="#e6effc"
				stroke="#e6effc"
				strokeMiterlimit="10"
				strokeWidth=".5"
				d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
			>
				<animateTransform
					attributeName="transform"
					dur="7s"
					repeatCount="indefinite"
					type="translate"
					values="-3 0; 3 0; -3 0"
				/>
			</path>
		</svg>

		<svg
			width={width / 2}
			height={height / 2}
			className="mx-auto mt-[-25px]"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 64 64"
		>
			<defs>
				<linearGradient
					id="a"
					x1="27.56"
					x2="38.27"
					y1="17.64"
					y2="36.19"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d4d7dd" />
					<stop offset=".45" stopColor="#d4d7dd" />
					<stop offset="1" stopColor="#bec1c6" />
				</linearGradient>
				<linearGradient
					id="b"
					x1="19.96"
					x2="31.37"
					y1="29.03"
					y2="48.8"
					xlinkHref="#a"
				/>
			</defs>
			<path
				className="shape-stroke"
				fill="none"
				stroke="#fff"
				strokeDasharray="35 22"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M43.64 20a5 5 0 113.61 8.46h-35.5"
			>
				<animate
					attributeName="stroke-dashoffset"
					dur="2s"
					repeatCount="indefinite"
					values="-57; 57"
				/>
			</path>
			<path
				className="shape-stroke"
				fill="none"
				stroke="#e6effc"
				strokeDasharray="24 15"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M29.14 44a5 5 0 103.61-8.46h-21"
			>
				<animate
					attributeName="stroke-dashoffset"
					begin="-1.5s"
					dur="2s"
					repeatCount="indefinite"
					values="-39; 39"
				/>
			</path>
		</svg>
	</div>
);

export const Wind = ({ width = 50, height = 50 }) => (
	<svg
		width={width}
		height={height}
		className="mx-auto"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
	>
		<defs>
			<linearGradient
				id="a"
				x1="27.56"
				x2="38.27"
				y1="17.64"
				y2="36.19"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#d4d7dd" />
				<stop offset=".45" stopColor="#d4d7dd" />
				<stop offset="1" stopColor="#bec1c6" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="19.96"
				x2="31.37"
				y1="29.03"
				y2="48.8"
				xlinkHref="#a"
			/>
		</defs>
		<path
			fill="none"
			stroke="#e6effc"
			strokeDasharray="35 22"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M43.64 20a5 5 0 113.61 8.46h-35.5"
		>
			<animate
				attributeName="stroke-dashoffset"
				dur="2s"
				repeatCount="indefinite"
				values="-57; 57"
			/>
		</path>
		<path
			fill="none"
			stroke="#e6effc"
			strokeDasharray="24 15"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M29.14 44a5 5 0 103.61-8.46h-21"
		>
			<animate
				attributeName="stroke-dashoffset"
				begin="-1.5s"
				dur="2s"
				repeatCount="indefinite"
				values="-39; 39"
			/>
		</path>
	</svg>
);

export const PartlyCloudy = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="a"
				x1="16.5"
				x2="21.5"
				y1="19.67"
				y2="28.33"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
		</defs>
		<circle
			cx="19"
			cy="24"
			r="5"
			fill="#fbbf24"
			stroke="#f8af18"
			strokeMiterlimit="10"
			strokeWidth=".5"
		/>
		<path
			fill="none"
			stroke="#fbbf24"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
		>
			<animateTransform
				attributeName="transform"
				dur="45s"
				repeatCount="indefinite"
				type="rotate"
				values="0 19 24; 360 19 24"
			/>
		</path>
		<path
			className="shape-stroke"
			fill="#e6effc"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
	</svg>
);

export const ThunderStormDay = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="a"
				x1="16.5"
				x2="21.5"
				y1="19.67"
				y2="28.33"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="26.74"
				x2="35.76"
				y1="37.88"
				y2="53.52"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f7b23b" />
				<stop offset=".45" stopColor="#f7b23b" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
		</defs>
		<circle
			cx="19"
			cy="24"
			r="5"
			fill="#f7b23b"
			stroke="#f8af18"
			strokeMiterlimit="10"
			strokeWidth=".5"
		/>
		<path
			fill="none"
			stroke="#fbbf24"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
		>
			<animateTransform
				attributeName="transform"
				dur="45s"
				repeatCount="indefinite"
				type="rotate"
				values="0 19 24; 360 19 24"
			/>
		</path>
		<path
			className="shape-stroke"
			fill="#f3f7fe"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="#f7b23b"
			stroke="#f6a823"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"
		>
			<animate
				attributeName="opacity"
				dur="2s"
				repeatCount="indefinite"
				values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
			/>
		</path>
	</svg>
);

export const ThunderStormLigthRain = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="22.53"
				x2="25.47"
				y1="42.95"
				y2="48.05"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#4286ee" />
				<stop offset=".45" stopColor="#4286ee" />
				<stop offset="1" stopColor="#0950bc" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="29.53"
				x2="32.47"
				y1="42.95"
				y2="48.05"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="36.53"
				x2="39.47"
				y1="42.95"
				y2="48.05"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="26.74"
				x2="35.76"
				y1="37.88"
				y2="53.52"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f7b23b" />
				<stop offset=".45" stopColor="#f7b23b" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="none"
			stroke="url(#a)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M24.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M31.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.4s"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.4s"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#d)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M38.39 43.03l-.78 4.94"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.2s"
				dur="0.7s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.2s"
				dur="0.7s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="url(#e)"
			stroke="#f6a823"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"
		>
			<animate
				attributeName="opacity"
				dur="2s"
				repeatCount="indefinite"
				values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
			/>
		</path>
	</svg>
);

export const ThunderStormLight = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="26.74"
				x2="35.76"
				y1="37.88"
				y2="53.52"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f7b23b" />
				<stop offset=".45" stopColor="#f7b23b" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#a)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="url(#b)"
			stroke="#f6a823"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"
		>
			<animate
				attributeName="opacity"
				dur="2s"
				repeatCount="indefinite"
				values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1"
			/>
		</path>
	</svg>
);

export const ClearDay = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="a"
				x1="26.75"
				x2="37.25"
				y1="22.91"
				y2="41.09"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
		</defs>
		<circle
			cx="32"
			cy="32"
			r="10.5"
			fill="#fbbf24"
			stroke="#f8af18"
			strokeMiterlimit="10"
			strokeWidth=".5"
		/>
		<path
			fill="none"
			stroke="#fbbf24"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
		>
			<animateTransform
				attributeName="transform"
				dur="45s"
				repeatCount="indefinite"
				type="rotate"
				values="0 32 32; 360 32 32"
			/>
		</path>
	</svg>
);

export const ClearNight = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="21.92"
				x2="38.52"
				y1="18.75"
				y2="47.52"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#86c3db" />
				<stop offset=".45" stopColor="#86c3db" />
				<stop offset="1" stopColor="#5eafcf" />
				<animateTransform
					attributeName="gradientTransform"
					dur="10s"
					repeatCount="indefinite"
					type="rotate"
					values="5 32 32; -15 32 32; 5 32 32"
				/>
			</linearGradient>
		</defs>
		<path
			fill="#72b9d5"
			stroke="#72b9d5"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth=".5"
			d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
		>
			<animateTransform
				attributeName="transform"
				dur="10s"
				repeatCount="indefinite"
				type="rotate"
				values="-5 32 32; 15 32 32; -5 32 32"
			/>
		</path>
	</svg>
);

export const Drizzle = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="23.31"
				x2="24.69"
				y1="44.3"
				y2="46.7"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#4286ee" />
				<stop offset=".45" stopColor="#4286ee" />
				<stop offset="1" stopColor="#0950bc" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="30.31"
				x2="31.69"
				y1="44.3"
				y2="46.7"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="37.31"
				x2="38.69"
				y1="44.3"
				y2="46.7"
				xlinkHref="#a"
			/>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M24.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#d)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M31.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.5s"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.5s"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#e)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M38.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				begin="-1s"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-1s"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
	</svg>
);

export const DrizzleHeavy = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="23.25"
				x2="24.75"
				y1="43.7"
				y2="46.3"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#86c3db" />
				<stop offset=".45" stopColor="#86c3db" />
				<stop offset="1" stopColor="#5eafcf" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="30.25"
				x2="31.75"
				y1="43.7"
				y2="46.3"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="37.25"
				x2="38.75"
				y1="43.7"
				y2="46.3"
				xlinkHref="#a"
			/>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path fill="url(#a)" d="M24 43.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z">
			<animateTransform
				attributeName="transform"
				dur="0.6s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 18; -4 14"
			/>
			<animate
				attributeName="opacity"
				dur="0.6s"
				repeatCount="indefinite"
				values="1;1;0"
			/>
		</path>
		<path fill="url(#c)" d="M31 43.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z">
			<animateTransform
				attributeName="transform"
				begin="-0.4s"
				dur="0.6s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 18; -4 14"
			/>
			<animate
				attributeName="opacity"
				begin="-0.4s"
				dur="0.6s"
				repeatCount="indefinite"
				values="1;1;0"
			/>
		</path>
		<path fill="url(#d)" d="M38 43.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z">
			<animateTransform
				attributeName="transform"
				begin="-0.2s"
				dur="0.6s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 18; -4 14"
			/>
			<animate
				attributeName="opacity"
				begin="-0.2s"
				dur="0.6s"
				repeatCount="indefinite"
				values="1;1;0"
			/>
		</path>
	</svg>
);

export const DrizzleRain = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="16.5"
				x2="21.5"
				y1="19.67"
				y2="28.33"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="23.31"
				x2="24.69"
				y1="44.3"
				y2="46.7"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#4286ee" />
				<stop offset=".45" stopColor="#4286ee" />
				<stop offset="1" stopColor="#0950bc" />
			</linearGradient>
			<linearGradient
				id="d"
				x1="30.31"
				x2="31.69"
				y1="44.3"
				y2="46.7"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="37.31"
				x2="38.69"
				y1="44.3"
				y2="46.7"
				xlinkHref="#a"
			/>
		</defs>
		<circle
			cx="19"
			cy="24"
			r="5"
			fill="url(#b)"
			stroke="#f8af18"
			strokeMiterlimit="10"
			strokeWidth=".5"
		/>
		<path
			fill="none"
			stroke="#fbbf24"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
		>
			<animateTransform
				attributeName="transform"
				dur="45s"
				repeatCount="indefinite"
				type="rotate"
				values="0 19 24; 360 19 24"
			/>
		</path>
		<path
			className="shape-stroke"
			fill="url(#c)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="none"
			stroke="url(#a)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M24.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#d)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M31.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.5s"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-0.5s"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#e)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M38.08 45.01l-.16.98"
		>
			<animateTransform
				attributeName="transform"
				begin="-1s"
				dur="1.5s"
				repeatCount="indefinite"
				type="translate"
				values="1 -5; -2 10"
			/>
			<animate
				attributeName="opacity"
				begin="-1s"
				dur="1.5s"
				repeatCount="indefinite"
				values="0;1;1;0"
			/>
		</path>
	</svg>
);

export const Snow = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="30.12"
				x2="31.88"
				y1="43.48"
				y2="46.52"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#86c3db" />
				<stop offset=".45" stopColor="#86c3db" />
				<stop offset="1" stopColor="#5eafcf" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="29.67"
				x2="32.33"
				y1="42.69"
				y2="47.31"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="23.12"
				x2="24.88"
				y1="43.48"
				y2="46.52"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="22.67"
				x2="25.33"
				y1="42.69"
				y2="47.31"
				xlinkHref="#a"
			/>
			<linearGradient
				id="f"
				x1="37.12"
				x2="38.88"
				y1="43.48"
				y2="46.52"
				xlinkHref="#a"
			/>
			<linearGradient
				id="g"
				x1="36.67"
				x2="39.33"
				y1="42.69"
				y2="47.31"
				xlinkHref="#a"
			/>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<g>
			<circle
				cx="31"
				cy="45"
				r="1.25"
				fill="none"
				stroke="url(#a)"
				strokeMiterlimit="10"
			/>
			<path
				fill="none"
				stroke="url(#c)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				dur="4s"
				repeatCount="indefinite"
				type="translate"
				values="-1 -6; 1 12"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				dur="9s"
				repeatCount="indefinite"
				type="rotate"
				values="0 31 45; 360 31 45"
			/>
			<animate
				attributeName="opacity"
				dur="4s"
				repeatCount="indefinite"
				values="0;1;1;1;0"
			/>
		</g>
		<g>
			<circle
				cx="24"
				cy="45"
				r="1.25"
				fill="none"
				stroke="url(#d)"
				strokeMiterlimit="10"
			/>
			<path
				fill="none"
				stroke="url(#e)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				begin="-2s"
				dur="4s"
				repeatCount="indefinite"
				type="translate"
				values="1 -6; -1 12"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				dur="9s"
				repeatCount="indefinite"
				type="rotate"
				values="0 24 45; 360 24 45"
			/>
			<animate
				attributeName="opacity"
				begin="-2s"
				dur="4s"
				repeatCount="indefinite"
				values="0;1;1;1;0"
			/>
		</g>
		<g>
			<circle
				cx="38"
				cy="45"
				r="1.25"
				fill="none"
				stroke="url(#f)"
				strokeMiterlimit="10"
			/>
			<path
				fill="none"
				stroke="url(#g)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				begin="-1s"
				dur="4s"
				repeatCount="indefinite"
				type="translate"
				values="1 -6; -1 12"
			/>
			<animateTransform
				additive="sum"
				attributeName="transform"
				dur="9s"
				repeatCount="indefinite"
				type="rotate"
				values="0 38 45; 360 38 45"
			/>
			<animate
				attributeName="opacity"
				begin="-1s"
				dur="4s"
				repeatCount="indefinite"
				values="0;1;1;1;0"
			/>
		</g>
	</svg>
);

export const Mist = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="27.5"
				x2="36.5"
				y1="17.21"
				y2="32.79"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#d4d7dd" />
				<stop offset=".45" stopColor="#d4d7dd" />
				<stop offset="1" stopColor="#bec1c6" />
			</linearGradient>
			<linearGradient id="b" y1="24.21" y2="39.79" xlinkHref="#a" />
			<linearGradient id="c" y1="31.21" y2="46.79" xlinkHref="#a" />
		</defs>
		<path
			fill="none"
			stroke="url(#a)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M17 25h30"
		>
			<animateTransform
				attributeName="transform"
				begin="0s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-4 0; 4 0; -4 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#b)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M17 32h30"
		>
			<animateTransform
				attributeName="transform"
				begin="-2s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M17 39h30"
		>
			<animateTransform
				attributeName="transform"
				begin="-4s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-4 0; 4 0; -4 0"
			/>
		</path>
	</svg>
);

export const Smoke = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="30.25"
				x2="33.25"
				y1="48.4"
				y2="53.6"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#b8bdc6" />
				<stop offset=".45" stopColor="#b8bdc6" />
				<stop offset="1" stopColor="#a5aab2" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="23.5"
				x2="28"
				y1="38.1"
				y2="45.9"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="33.75"
				x2="39.75"
				y1="28.8"
				y2="39.2"
				xlinkHref="#a"
			/>
		</defs>
		<path
			className="shape-stroke"
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<circle
			cx="31.75"
			cy="51"
			r="3"
			fill="url(#a)"
			stroke="#afb4bc"
			strokeMiterlimit="10"
			strokeWidth=".5"
		>
			<animateTransform
				attributeName="transform"
				dur="3s"
				repeatCount="indefinite"
				type="translate"
				values="0 0; 0 -17;"
			/>
			<animate
				attributeName="opacity"
				dur="3s"
				repeatCount="indefinite"
				values="0; 1; 1; 1; 0"
			/>
			<animate
				attributeName="r"
				dur="3s"
				repeatCount="indefinite"
				values="3; 4.5; 6"
			/>
		</circle>
		<circle
			cx="25.75"
			cy="51"
			r="4.5"
			fill="url(#c)"
			stroke="#afb4bc"
			strokeMiterlimit="10"
			strokeWidth=".5"
		>
			<animateTransform
				attributeName="transform"
				begin="-1s"
				dur="3s"
				repeatCount="indefinite"
				type="translate"
				values="0 0; 0 -17;"
			/>
			<animate
				attributeName="opacity"
				begin="-1s"
				dur="3s"
				repeatCount="indefinite"
				values="0; 1; 1; 1; 0"
			/>
			<animate
				attributeName="r"
				begin="-1s"
				dur="3s"
				repeatCount="indefinite"
				values="3; 4.5; 6"
			/>
			<animate
				attributeName="cx"
				begin="-1s"
				dur="3s"
				repeatCount="indefinite"
				values="31.75; 25.75"
			/>
		</circle>
		<circle
			cx="36.75"
			cy="51"
			r="6"
			fill="url(#d)"
			stroke="#afb4bc"
			strokeMiterlimit="10"
			strokeWidth=".5"
		>
			<animateTransform
				attributeName="transform"
				begin="-2s"
				dur="3s"
				repeatCount="indefinite"
				type="translate"
				values="0 0; 0 -17;"
			/>
			<animate
				attributeName="opacity"
				begin="-2s"
				dur="3s"
				repeatCount="indefinite"
				values="0; 1; 1; 1; 0"
			/>
			<animate
				attributeName="r"
				begin="-2s"
				dur="3s"
				repeatCount="indefinite"
				values="3; 4.5; 6"
			/>
			<animate
				attributeName="cx"
				begin="-2s"
				dur="3s"
				repeatCount="indefinite"
				values="31.75; 36.75"
			/>
		</circle>
	</svg>
);

export const Haze = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="17.94"
				x2="26.94"
				y1="55.73"
				y2="71.32"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#d4d7dd" />
				<stop offset=".45" stopColor="#d4d7dd" />
				<stop offset="1" stopColor="#bec1c6" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="28.81"
				x2="37.81"
				y1="49.45"
				y2="65.04"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="37.06"
				x2="46.06"
				y1="44.68"
				y2="60.27"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="17.94"
				x2="26.94"
				y1="49.73"
				y2="65.32"
				xlinkHref="#a"
			/>
			<linearGradient
				id="f"
				x1="28.81"
				x2="37.81"
				y1="43.45"
				y2="59.04"
				xlinkHref="#a"
			/>
			<linearGradient
				id="g"
				x1="37.06"
				x2="46.06"
				y1="38.68"
				y2="54.27"
				xlinkHref="#a"
			/>
		</defs>
		<path
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<g>
			<path
				fill="none"
				stroke="url(#a)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M17 58h4.5"
			/>
			<path
				fill="none"
				stroke="url(#c)"
				stroke-dasharray="7 7"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M28.5 58H39"
			/>
			<path
				fill="none"
				stroke="url(#d)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M42.5 58H47"
			/>
			<animateTransform
				attributeName="transform"
				begin="0s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</g>
		<g>
			<path
				fill="none"
				stroke="url(#e)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M17 52h4.5"
			/>
			<path
				fill="none"
				stroke="url(#f)"
				stroke-dasharray="7 7"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M28.5 52H39"
			/>
			<path
				fill="none"
				stroke="url(#g)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M42.5 52H47"
			/>
			<animateTransform
				attributeName="transform"
				begin="-4s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</g>
	</svg>
);

export const Dust = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="c"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="22.14"
				x2="27.53"
				y1="36"
				y2="45.32"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fde68a" />
				<stop offset=".45" stopColor="#fde68a" />
				<stop offset="1" stopColor="#fde171" />
			</linearGradient>
			<linearGradient
				id="d"
				x1="34.27"
				x2="39.66"
				y1="28.99"
				y2="38.32"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="43.47"
				x2="48.86"
				y1="23.68"
				y2="33"
				xlinkHref="#a"
			/>
			<linearGradient
				id="f"
				x1="32.14"
				x2="37.53"
				y1="36"
				y2="45.32"
				xlinkHref="#a"
			/>
			<linearGradient
				id="g"
				x1="44.27"
				x2="49.66"
				y1="28.99"
				y2="38.32"
				xlinkHref="#a"
			/>
			<linearGradient
				id="h"
				x1="53.47"
				x2="58.86"
				y1="23.68"
				y2="33"
				xlinkHref="#a"
			/>
			<clipPath id="b">
				<path fill="none" d="M7.5 7.5h47l-47 47v-47z" />
			</clipPath>
		</defs>
		<g clipPath="url(#b)">
			<path
				fill="url(#c)"
				stroke="#e6effc"
				strokeMiterlimit="10"
				strokeWidth=".5"
				d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
			/>
		</g>
		<g>
			<path
				fill="none"
				stroke="url(#a)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M24.89 45.11l3.19-3.19"
			/>
			<path
				fill="none"
				stroke="url(#d)"
				stroke-dasharray="7 7"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M33.03 36.97l7.42-7.42"
			/>
			<path
				fill="none"
				stroke="url(#e)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M42.92 27.08l3.19-3.19"
			/>
			<animateTransform
				attributeName="transform"
				dur="3s"
				repeatCount="indefinite"
				type="translate"
				values="-2 2; 0 0; -2 2"
			/>
		</g>
		<g>
			<path
				fill="none"
				stroke="url(#f)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M34.89 45.11l3.19-3.19"
			/>
			<path
				fill="none"
				stroke="url(#g)"
				stroke-dasharray="7 7"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M43.03 36.97l7.42-7.42"
			/>
			<path
				fill="none"
				stroke="url(#h)"
				strokeLinecap="round"
				strokeMiterlimit="10"
				strokeWidth="3"
				d="M52.92 27.08l3.19-3.19"
			/>
			<animateTransform
				attributeName="transform"
				begin="-2.5s"
				dur="3s"
				repeatCount="indefinite"
				type="translate"
				values="-2 2; 0 0; -2 2"
			/>
		</g>
	</svg>
);

export const Fog = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
			<linearGradient
				id="a"
				x1="27.5"
				x2="36.5"
				y1="50.21"
				y2="65.79"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#d4d7dd" />
				<stop offset=".45" stopColor="#d4d7dd" />
				<stop offset="1" stopColor="#bec1c6" />
			</linearGradient>
			<linearGradient id="c" y1="44.21" y2="59.79" xlinkHref="#a" />
		</defs>
		<path
			fill="url(#b)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		/>
		<path
			fill="none"
			stroke="url(#a)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M17 58h30"
		>
			<animateTransform
				attributeName="transform"
				begin="0s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-4 0; 4 0; -4 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M17 52h30"
		>
			<animateTransform
				attributeName="transform"
				begin="-4s"
				dur="5s"
				repeatCount="indefinite"
				type="translate"
				values="-4 0; 4 0; -4 0"
			/>
		</path>
	</svg>
);

export const Tornado = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="27.5"
				x2="36.5"
				y1="12.21"
				y2="27.79"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#d4d7dd" />
				<stop offset=".45" stopColor="#d4d7dd" />
				<stop offset="1" stopColor="#bec1c6" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="28"
				x2="36"
				y1="19.07"
				y2="32.93"
				xlinkHref="#a"
			/>
			<linearGradient
				id="c"
				x1="28.63"
				x2="35.38"
				y1="26.15"
				y2="37.85"
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				x1="29.25"
				x2="34.75"
				y1="33.24"
				y2="42.76"
				xlinkHref="#a"
			/>
			<linearGradient
				id="e"
				x1="30.25"
				x2="33.75"
				y1="40.97"
				y2="47.03"
				xlinkHref="#a"
			/>
		</defs>
		<path
			fill="none"
			stroke="url(#a)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M17 20h30"
		>
			<animateTransform
				attributeName="transform"
				dur="2s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#b)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M19 26h26"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.2s"
				dur="2s"
				repeatCount="indefinite"
				type="translate"
				values="-4 0; 4 0; -4 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#c)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M21.5 32h21"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.4s"
				dur="2s"
				repeatCount="indefinite"
				type="translate"
				values="-5 0; 5 0; -5 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#d)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M24 38h16"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.6s"
				dur="2s"
				repeatCount="indefinite"
				type="translate"
				values="-6 0; 6 0; -6 0"
			/>
		</path>
		<path
			fill="none"
			stroke="url(#e)"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="3"
			d="M28 44h8"
		>
			<animateTransform
				attributeName="transform"
				begin="-0.8s"
				dur="2s"
				repeatCount="indefinite"
				type="translate"
				values="-7 0; 7 0; -7 0"
			/>
		</path>
	</svg>
);

export const Cloudy = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
		</defs>
		<path
			className="shape-stroke"
			fill="#e6effc"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
	</svg>
);

export const CloudyDay = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="16.5"
				x2="21.5"
				y1="19.67"
				y2="28.33"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="40.76"
				x2="50.83"
				y1="23"
				y2="40.46"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#9ca3af" />
				<stop offset=".45" stopColor="#9ca3af" />
				<stop offset="1" stopColor="#6b7280" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
		</defs>
		<circle
			cx="19"
			cy="24"
			r="5"
			fill="url(#a)"
			stroke="#f8af18"
			strokeMiterlimit="10"
			strokeWidth=".5"
		/>
		<path
			fill="none"
			stroke="#fbbf24"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="2"
			d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
		>
			<animateTransform
				attributeName="transform"
				dur="45s"
				repeatCount="indefinite"
				type="rotate"
				values="0 19 24; 360 19 24"
			/>
		</path>
		<path
			fill="url(#b)"
			stroke="#848b98"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-2.1 0; 2.1 0; -2.1 0"
			/>
		</path>
		<path
			className="shape-stroke"
			fill="url(#c)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
	</svg>
);

export const CloudyNight = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="13.58"
				x2="24.15"
				y1="15.57"
				y2="33.87"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#86c3db" />
				<stop offset=".45" stopColor="#86c3db" />
				<stop offset="1" stopColor="#5eafcf" />
				<animateTransform
					attributeName="gradientTransform"
					dur="10s"
					repeatCount="indefinite"
					type="rotate"
					values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"
				/>
			</linearGradient>
			<linearGradient
				id="b"
				x1="40.76"
				x2="50.83"
				y1="23"
				y2="40.46"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#9ca3af" />
				<stop offset=".45" stopColor="#9ca3af" />
				<stop offset="1" stopColor="#6b7280" />
			</linearGradient>
			<linearGradient
				id="c"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
		</defs>
		<path
			fill="url(#a)"
			stroke="#72b9d5"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth=".5"
			d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
		>
			<animateTransform
				attributeName="transform"
				dur="10s"
				repeatCount="indefinite"
				type="rotate"
				values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"
			/>
		</path>
		<path
			fill="url(#b)"
			stroke="#848b98"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-2.1 0; 2.1 0; -2.1 0"
			/>
		</path>
		<path
			className="shape-stroke"
			fill="url(#c)"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
	</svg>
);

export const CloudyOverCast = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="a"
				x1="40.76"
				x2="50.83"
				y1="23"
				y2="40.46"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#9ca3af" />
				<stop offset=".45" stopColor="#9ca3af" />
				<stop offset="1" stopColor="#6b7280" />
			</linearGradient>
			<linearGradient
				id="b"
				x1="22.56"
				x2="39.2"
				y1="21.96"
				y2="50.8"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#f3f7fe" />
				<stop offset=".45" stopColor="#f3f7fe" />
				<stop offset="1" stopColor="#deeafb" />
			</linearGradient>
		</defs>
		<path
			fill="#848b98"
			stroke="#848b98"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-2.1 0; 2.1 0; -2.1 0"
			/>
		</path>
		<path
			className="shape-stroke"
			fill="#e6effc"
			stroke="#e6effc"
			strokeMiterlimit="10"
			strokeWidth=".5"
			d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
		>
			<animateTransform
				attributeName="transform"
				dur="7s"
				repeatCount="indefinite"
				type="translate"
				values="-3 0; 3 0; -3 0"
			/>
		</path>
	</svg>
);

export const SunRise = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="26.75"
				x2="37.25"
				y1="29.91"
				y2="48.09"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<clipPath id="a">
				<path fill="none" d="M0 7.5h64v32H0z" />
			</clipPath>
		</defs>
		<g strokeMiterlimit="10" clipPath="url(#a)">
			<circle
				cx="32"
				cy="39"
				r="10.5"
				fill="#fbbf24"
				stroke="#f8af18"
				strokeWidth=".5"
			/>
			<path
				fill="none"
				stroke="#fbbf24"
				strokeLinecap="round"
				strokeWidth="3"
				d="M32 22.71V16.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 54.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 39H9.5m45 0h-6.21"
			>
				<animateTransform
					attributeName="transform"
					dur="45s"
					repeatCount="indefinite"
					type="rotate"
					values="0 32 39; 360 32 39"
				/>
			</path>
		</g>
		<path
			fill="none"
			stroke="#374151"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M16 42.5h11l5-4.5 5 4.5h11"
		/>
	</svg>
);

export const SunSet = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		className="mx-auto"
		width={width}
		height={height}
	>
		<defs>
			<linearGradient
				id="b"
				x1="26.75"
				x2="37.25"
				y1="29.91"
				y2="48.09"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#fbbf24" />
				<stop offset=".45" stopColor="#fbbf24" />
				<stop offset="1" stopColor="#f59e0b" />
			</linearGradient>
			<clipPath id="a">
				<path fill="none" d="M0 7.5h64v32H0z" />
			</clipPath>
		</defs>
		<g strokeMiterlimit="10" clipPath="url(#a)">
			<circle
				cx="32"
				cy="39"
				r="10.5"
				fill="#fbbf24"
				stroke="#f8af18"
				strokeWidth=".5"
			/>
			<path
				fill="none"
				stroke="#fbbf24"
				strokeLinecap="round"
				strokeWidth="3"
				d="M32 22.71V16.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 54.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 39H9.5m45 0h-6.21"
			>
				<animateTransform
					attributeName="transform"
					dur="45s"
					repeatCount="indefinite"
					type="rotate"
					values="0 32 39; 360 32 39"
				/>
			</path>
		</g>
		<path
			fill="none"
			stroke="#374151"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M16 42.5h11l5 4.5 5-4.5h11"
		/>
	</svg>
);

export const LowHumidity = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<path
			fill="none"
			stroke="#2885c7"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3"
			d="M32 20v24l-5.79-6.89L32 44l5.78-6.89"
		>
			<animateTransform
				attributeName="transform"
				begin="0s"
				dur="1.5s"
				keyTimes="0.0; 0.5; 0.9; 1.0"
				repeatCount="indefinite"
				type="translate"
				values="0 0; 0 0; 0 9; 0 9"
			/>
			<animate
				attributeName="opacity"
				dur="1.5s"
				keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
				repeatCount="indefinite"
				values="0; 1; 1; 0; 0"
			/>
		</path>
	</svg>
);

export const HighHumidity = ({ width = 50, height = 50 }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={width}
		height={height}
		className="mx-auto"
	>
		<path
			fill="none"
			stroke="#ef4444"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="3"
			d="M32 44V20l-5.79 6.89L32 20l5.78 6.89"
		>
			<animateTransform
				attributeName="transform"
				begin="0s"
				dur="1.5s"
				keyTimes="0.0; 0.5; 0.9; 1.0"
				repeatCount="indefinite"
				type="translate"
				values="0 0; 0 0; 0 -9; 0 -9"
			/>
			<animate
				attributeName="opacity"
				dur="1.5s"
				keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
				repeatCount="indefinite"
				values="0; 1; 1; 0; 0"
			/>
		</path>
	</svg>
);
