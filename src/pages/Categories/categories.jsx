/* eslint-disable no-template-curly-in-string */
import React, { memo } from "react";
import { LocaleContext } from "../../context/localeContext";

function Categories() {
  return (
    <div>
      Categories Page
      <LocaleContext.Consumer>
        {({ locale, setLocale }) => (
          <>
            <p>{`Current Theme is ${locale}`}</p>
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "frn" : "en")}
            >
              Change Locale
            </button>
          </>
        )}
      </LocaleContext.Consumer>
    </div>
  );
}

export default memo(Categories);
