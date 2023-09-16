import React from "react";

const ReviewCard = ({ name, title, quote, imgLink }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden p-6 xl:p-8">
      <div className="flex items-center justify-start">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={imgLink}
          alt="user img"
        />
        <div>
          <div className="p-4">
            <div className=" tracking-wide text-xl  text-green-500 font-bold">
              {name}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium   text-gray-700">
              {title}
            </div>
            <div className="flex items-center mt-1">
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1.667l2.56 5.86h6.427l-4.913 4.573 1.463 6.854L10 14.69l-6.537 3.364 1.463-6.854L1.013 7.527H7.44L10 1.667z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1.667l2.56 5.86h6.427l-4.913 4.573 1.463 6.854L10 14.69l-6.537 3.364 1.463-6.854L1.013 7.527H7.44L10 1.667z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1.667l2.56 5.86h6.427l-4.913 4.573 1.463 6.854L10 14.69l-6.537 3.364 1.463-6.854L1.013 7.527H7.44L10 1.667z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1.667l2.56 5.86h6.427l-4.913 4.573 1.463 6.854L10 14.69l-6.537 3.364 1.463-6.854L1.013 7.527H7.44L10 1.667z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1.667l2.56 5.86h6.427l-4.913 4.573 1.463 6.854L10 14.69l-6.537 3.364 1.463-6.854L1.013 7.527H7.44L10 1.667z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-3 text-base leading-relaxed text-gray-700">{quote}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
