import React, { memo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

function TextInput({
  field,
  form: { touched, errors },
  id,
  className,
  placeholder,
  ...props
}) {
  const error = touched[field.name] && errors[field.name];
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        className={cn(
          "appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
          {
            "border-red-300 focus:border-red-500 focus:ring-red-500 rounded-md":
              !!error,
            [className]: !!className,
          }
        )}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {!!error && (
        <p className="text-red-400 font-light text-sm my-1">{error}</p>
      )}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  className: "",
  error: "",
};

export default memo(TextInput);
