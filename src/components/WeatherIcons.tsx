// all used icons ass resueable components--------------------

export const RainyIcon = ({ width = 50, height = 50 }) => (
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
                fill="#fff"
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
            fill="url(#b)"
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

export const ClearDay = ({ width = 50, height = 50 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={width} height={height} className="mx-auto">
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
