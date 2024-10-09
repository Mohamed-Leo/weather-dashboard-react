import moment from "moment-timezone";

const ConvertUnixToTime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};

export default ConvertUnixToTime;
