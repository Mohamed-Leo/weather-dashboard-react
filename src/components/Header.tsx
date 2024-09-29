import OtherOptionsIcons from "./OtherOptionsIcons"
import Search from "./Search"
import ThemeSwitch from "./ThemeSwitch"


function Header() {
    return (
        <header className="container flex items-center justify-center select-none px-5 md:px-0 flex-wrap gap-6">
            <Search />

            {/* ThemeSwitch and other icons */}
            <div className="flex md:justify-between items-center gap-20 justify-center flex-grow">
                <OtherOptionsIcons />
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default Header;