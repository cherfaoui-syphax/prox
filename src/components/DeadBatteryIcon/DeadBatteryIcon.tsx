import React from "react";

function DeadBatteryIcon({ id, x, y, style } : any ) {
  return (
    <svg
      id={id ? id : ""}
      width={style.width}
      height={style.height}
      fill={style && style.color ? style.color : "#000000"}
      style={{ backgroundColor: "transparent" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 28"
    >
      <path d="M 9.5 12 C 6.4802259 12 4 14.480226 4 17.5 L 4 30.5 C 4 33.519774 6.4802259 36 9.5 36 L 34.5 36 C 37.519774 36 40 33.519774 40 30.5 L 40 28 L 42 28 C 43.105 28 44 27.105 44 26 L 44 22 C 44 20.895 43.105 20 42 20 L 40 20 L 40 17.5 C 40 14.480226 37.519774 12 34.5 12 L 9.5 12 z M 9.5 15 L 34.5 15 C 35.898226 15 37 16.101774 37 17.5 L 37 30.5 C 37 31.898226 35.898226 33 34.5 33 L 9.5 33 C 8.1017741 33 7 31.898226 7 30.5 L 7 17.5 C 7 16.101774 8.1017741 15 9.5 15 z M 22.707031 18 C 21.238256 18 19.858494 18.718665 19.017578 19.923828 L 17.216797 22.5 L 12.5 22.5 A 1.50015 1.50015 0 1 0 12.5 25.5 L 17.197266 25.5 L 18.861328 27.996094 C 19.694811 29.247817 21.102967 30 22.605469 30 L 26.5 30 A 1.50015 1.50015 0 0 0 28 28.5 L 28 28 L 31.5 28 A 1.50015 1.50015 0 1 0 31.5 25 L 28 25 L 28 23 L 31.5 23 A 1.50015 1.50015 0 1 0 31.5 20 L 28 20 L 28 19.5 A 1.50015 1.50015 0 0 0 26.5 18 L 22.707031 18 z M 22.707031 21 L 25 21 L 25 21.253906 A 1.50015 1.50015 0 0 0 25 21.740234 L 25 26.253906 A 1.50015 1.50015 0 0 0 25 26.740234 L 25 27 L 22.605469 27 C 22.10197 27 21.637892 26.750308 21.359375 26.332031 A 1.50015 1.50015 0 0 0 21.357422 26.332031 L 19.816406 24.019531 L 21.476562 21.642578 A 1.50015 1.50015 0 0 0 21.476562 21.640625 C 21.757693 21.237835 22.215807 21 22.707031 21 z" />
    </svg>
  );
}

export default DeadBatteryIcon;
