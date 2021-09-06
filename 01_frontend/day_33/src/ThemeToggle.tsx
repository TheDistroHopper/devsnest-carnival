import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";
const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <button
      className={theme ? "theme-toggle dark" : "theme-toggle"}
      onClick={() => setTheme(!theme)}
    >
      {theme ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
