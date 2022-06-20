import React, { createContext, useMemo, useState, memo } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

ThemeContext.displayName = "ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(ThemeProvider);
