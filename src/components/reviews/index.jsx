import React from "react";
import { StarIcon } from "@heroicons/react/solid";

function Reviews() {
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
              className={classNames(
                product.rating.rate > rating
                  ? "fill-gray-900"
                  : "fill-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{`${product.rating.rate} out of 5 stars`}</p>
        <a
          href="#reviews"
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {`${product.rating.count} reviews`}
        </a>
      </div>
    </div>
  );
}

export default Reviews;
