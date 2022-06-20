import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavLink({ item, className }) {
  return (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        item.current
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        `px-3 py-2 rounded-md text-sm font-medium ${className || ""}`
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </Link>
  );
}

NavLink.propTypes = {
  item: PropTypes.exact({
    href: PropTypes.string,
    current: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  className: "",
};

export default memo(NavLink);
