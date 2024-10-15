import moment from "moment-timezone";

const convertUnixToTime = (unix: number, timezone: number): string => {
	return moment
		.unix(unix)
		.utcOffset(timezone / 60)
		.format("HH:mm");
};

export default convertUnixToTime;
