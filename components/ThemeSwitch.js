import { useState } from "react";
import DarkTheme from "./DarkTheme";

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }

  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;