import OtherOptionsIcons from "./OtherOptionsIcons";
import SearchDialog from "./SearchDialog";
import ThemeSwitch from "./ThemeSwitch";
import TimerClock from "./TimerClock";

function Header() {
  return (
    <header className="container flex flex-col sm:flex-row px-5 sm:px-0 items-center justify-center md:justify-between select-none flex-wrap gap-6">
      {/* search-icons(location)-box */}
      <div className="rounded-md transition-colors duration-300 ease-in-out flex gap-3 items-center flex-wrap justify-center w-full sm:w-fit">
        <SearchDialog />
        {/* OtherOptionsIcons for the other icons of tools like location */}
        <OtherOptionsIcons />
        {/* timer (clock) */}
        <TimerClock />
      </div>

      <ThemeSwitch />
    </header>
  );
}

export default Header;
