import React, { memo } from "react";
import PropTypes from "prop-types";

const Iconbutton = ({ label, children, className }) => {
  return (
    <button
      type="button"
      className={`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
        className || ""
      }`}
    >
      <span className="sr-only">{label}</span>
      {children}
    </button>
  );
};

Iconbutton.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Iconbutton.defaultProps = {
  className: "",
};

export default memo(Iconbutton);
