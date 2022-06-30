import React, { memo } from "react";
import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/solid";
import cn from "classnames";
function Reviews({ rate, count }) {
  return (
    <div className="mt-6">
      <h4 className="sr-only">Reviews</h4>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              height={48}
              width={48}
              className={cn("h-5 w-5 flex-shrink-0 fill-gray-900", {
                "fill-gray-200": rate < rating,
              })}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{`${rate} out of 5 stars`}</p>
        <a
          href="#reviews"
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {`${count} reviews`}
        </a>
      </div>
    </div>
  );
}

Reviews.prototype = {
  rate: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default memo(Reviews);
