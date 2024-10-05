import moment from "moment-timezone";

function DateBox() {
  const currentDate = moment();
  return (
    <div className="space-y-1 opacity-80">
      <h2 className="text-xl capitalize">{currentDate.format("dddd")}</h2>
      <p className="text-[13px]">{currentDate.format("D MMM, YYYY")}</p>
    </div>
  );
}

export default DateBox;
