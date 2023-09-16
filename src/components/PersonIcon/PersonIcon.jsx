import React from "react";

function PersonIcon({ id, index, x, y, style, setOpenTooltip }) {
  return (
    <svg
      onMouseEnter={() => {
        setOpenTooltip(id);
      }}
      onMouseLeave={() => {
        setOpenTooltip(null);
      }}
      id={id ? id : ""}
      width={style.width}
      height={style.height}
      fill={style && style.color ? style.color : "#1876D1"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 752 752"
    >
      <g>
        <path
          fill={style && style.color ? style.color : "#1876D1"}
          d="m376.74 347.88c-2.9609-14.801 0-29.598-1.4805-45.137-2.2188-19.238-12.578-31.82-29.598-38.477-20.719-8.8789-50.316-8.8789-71.039 0-17.02 7.3984-27.379 19.238-29.598 38.477-1.4805 14.801 1.4805 29.598-1.4805 45.137-1.4805 8.8789 12.578 27.379 13.32 28.859 6.6602 21.461 29.598 40.699 52.539 42.18 23.68 0.73828 48.84-19.98 55.496-42.18-0.74219-1.4805 14.059-19.238 11.84-28.859z"
        />
        <path
          fill={style && style.color ? style.color : "#1876D1"}
          d="m462.58 553.59c-0.73828-5.918-8.1406-58.457-15.539-76.219-6.6602-16.281-20.719-24.418-36.258-32.559-6.6602-2.2188-14.801-5.1797-21.461-8.1406-8.8789-4.4414-14.059-13.32-19.98-20.719-4.4414-5.1797-25.898 14.059-28.859 16.281-8.1406 6.6602-19.238 18.5-30.34 19.238-11.098-0.73828-22.199-12.578-30.34-19.238-2.9609-2.2188-24.418-21.461-28.859-16.281-5.918 7.3984-11.098 16.281-19.98 20.719-6.6602 3.6992-14.059 5.918-21.461 8.1406-15.539 8.1406-29.598 16.281-36.258 32.559-7.3984 17.758-14.059 70.297-15.539 76.219-2.2188 12.578 7.3984 23.68 19.98 23.68h264.91c12.582 0 21.461-11.102 19.98-23.68z"
        />
      </g>
    </svg>
  );
}

export default PersonIcon;
