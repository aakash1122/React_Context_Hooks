import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toogleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ color: theme.syntax, background: theme.bg }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={toogleAuth}>
          {isAuthenticated ? "Signed In" : "Not Signed In"}
        </li>
      </ul>
    </nav>
  );
}
