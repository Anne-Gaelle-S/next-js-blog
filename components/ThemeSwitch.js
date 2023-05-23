import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  const isOnServerSideRendering = typeof window === 'undefined';
  if (isOnServerSideRendering) {
    return false;
  }
  const value = localStorage.getItem('darkMode');
  return value === null ? false : JSON.parse(value);;
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  // An alternative to loadDarkMode function :
  // useEffect(() => {
  //   const value = localStorage.getItem('darkMode');
  //   const result = value === null ? false : JSON.parse(value);
  //   setDarkMode(result);
  // }, []);

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }

  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
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