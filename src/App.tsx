import { createContext, useState } from "react";
import Header from "./layouts/Header";
import MainBoxes from "./components/MainContent";

type Theme = "dark" | "light";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// create a themeContext----
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <MainBoxes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
