/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from "react";
import PropTypes from "prop-types";

function LinkUI({ children, ...props }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className="font-medium text-indigo-600 hover:text-indigo-500" {...props}>
      {children}
    </a>
  );
}

LinkUI.propTypes = {
  children: PropTypes.string.isRequired,
};

export default memo(LinkUI);
