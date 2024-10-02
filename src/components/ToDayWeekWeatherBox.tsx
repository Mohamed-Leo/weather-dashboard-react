import ToDaySunRiseAndSet from "./ToDaySunRiseAndSet";
import ToDayListBox from "./ToDayListBox";
import TomorrowBox from "./TomorrowBox";

function ToDayWeekWeatherBox() {
  return (
    <div className="space-y-5">
      {/* top part- today/week */}
      <ToDayListBox
        backGround={"bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"}
      />

      {/* bottom part- sunrise, sunset , Tomorrow box */}
      <div className="grid grid-cols-2 gap-6">
        <TomorrowBox
          backGround={"bg-gradient-to-b from-[#121f3d] to-[#0a0e1a]"}
        />
        <ToDaySunRiseAndSet backGround="bg-[#14203a]" />
      </div>
    </div>
  );
}

export default ToDayWeekWeatherBox;
