import React, { memo } from "react";
import { LocaleContext } from "../../context/localeContext";

function Products() {
  return (
    <div>
      Products page
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

export default memo(Products);
