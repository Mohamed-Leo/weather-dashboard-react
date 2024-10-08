import moment from "moment-timezone";

function DateBox() {
  return (
    <div className="space-y-1 opacity-80">
      <h2 className="text-xl capitalize">{moment().format("dddd")}</h2>
      <p className="text-[13px]">{moment().format("D MMM, YYYY")}</p>
    </div>
  );
}

export default DateBox;
