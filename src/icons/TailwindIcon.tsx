import React from "react";

const TailwindIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1001_3563)">
      <path
        d="M24.5 0H7.5C3.35786 0 0 3.35786 0 7.5V24.5C0 28.6421 3.35786 32 7.5 32H24.5C28.6421 32 32 28.6421 32 24.5V7.5C32 3.35786 28.6421 0 24.5 0Z"
        fill="#242938"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.375 13.75C11.125 10.75 13 9.25 16 9.25C20.5 9.25 21.0625 12.625 23.3125 13.1875C24.8125 13.5627 26.125 13.0002 27.25 11.5C26.5 14.5 24.625 16 21.625 16C17.125 16 16.5625 12.625 14.3125 12.0625C12.8125 11.6875 11.5 12.25 10.375 13.75ZM4.75 20.5C5.5 17.5 7.375 16 10.375 16C14.875 16 15.4375 19.375 17.6875 19.9375C19.1875 20.3127 20.5 19.7502 21.625 18.25C20.875 21.25 19 22.75 16 22.75C11.5 22.75 10.9375 19.375 8.6875 18.8125C7.1875 18.4373 5.875 18.9998 4.75 20.5Z"
        fill="url(#paint0_linear_1001_3563)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1001_3563"
        x1="10.8125"
        y1="9.25"
        x2="20.4375"
        y2="23.1875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32B1C1" />
        <stop offset="1" stopColor="#14C6B7" />
      </linearGradient>
      <clipPath id="clip0_1001_3563">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TailwindIcon;
