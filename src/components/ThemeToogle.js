import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToogle = () => {
  const { toogleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toogleTheme}>Toogle Theme</button>
    </div>
  );
};

export default ThemeToogle;
