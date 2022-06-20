import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
