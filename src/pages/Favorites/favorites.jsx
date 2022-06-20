import React, { memo } from "react";
import { ThemeContext } from "../../context/themeContext";

function Favorites() {
  return (
    <div>
      Favorites Page
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <>
            <p>
              Current Theme is
              {theme}
            </p>
            <button
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              Change Theme
            </button>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default memo(Favorites);
