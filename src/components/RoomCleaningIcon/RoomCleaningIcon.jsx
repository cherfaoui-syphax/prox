import React from "react";

function BugIcon({id, x, y, style}) {
  return ( 
    <svg id={id ? id : ''} width={style.width} height={style.height} fill={style && style.color ? style.color : '#000000'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
      <g>
        <path d="m180 700.96c39.758 0 72-32.242 72-72 0-39.758-32.242-72-72-72s-72 32.242-72 72c0 39.754 32.242 72 72 72zm0-108c19.848 0 36 16.152 36 36 0 19.848-16.152 36-36 36s-36-16.152-36-36c0-19.848 16.152-36 36-36z"/>
        <path d="m300 544.96c33.145 0 60-26.855 60-60s-26.855-60-60-60-60 26.855-60 60 26.855 60 60 60zm0-84c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24c0-13.238 10.766-24 24-24z"/>
        <path d="m1110 628.96c0-96.863-56.426-180.59-138-220.69v-43.309h-216v43.309c-81.574 40.105-138 123.82-138 220.69h-30l16.055 134.83c-15.828-6.6602-32.879-10.309-50.004-10.309-6.9492 0-13.836 0.53906-20.641 1.6328-10.141-36.758-35.004-68.797-69.887-87.086-1.1992-0.625-2.4727-1.0547-3.6836-1.6562l79.598-337.23 28.98 6.8633 57.18-241.31-116.76-27.66-57.18 241.31 29.41 6.9609-79.512 336.89c-0.98438-0.023438-1.9688-0.19141-2.9531-0.19141-52.355-0.011719-99.973 28.754-124.25 75.07-6.457 12.324-11.004 25.379-13.547 38.82-72.551 4.0195-137.47 45.422-171.35 110.11-33.121 63.227-29.902 135.83 1.8711 194.29l-31.332 62.664h564l-36-72h-221.29l84.551-358.25c36.539 21.562 55.453 62.258 50.375 102.49 15.574-10.199 33.816-15.73 52.402-15.73 14.594 0 29.398 3.4219 43.273 10.691 4.2617 2.2305 8.1953 4.8242 11.977 7.5859l38.715 325.21h432l60-504zm-982.85 432c-30.359-49.441-34.703-113.1-5.8086-168.25 30.395-58.043 89.629-91.105 151-91.105 7.5117 0 15.07 0.49219 22.609 1.5-2.1484-19.789 1.3555-40.367 11.27-59.281 17.688-33.719 51.301-53.496 86.773-55.414l-87.938 372.56-177.9 0.003906zm909.13-178.74c-3.625 24.684-13.441 51.961-34.234 60.312-20.785 8.3047-45.059 1.043-62.293-16.957-18.156-18.961 1.6211-52.344-45.949-44.762-6.1797 0.98438-24.875 1.2344-24.875 1.2344-24.961 0-46.801-20.363-48.59-45.254l-11.844-171.82h261c-12.406 80.934-31.598 206.21-33.215 217.24zm-382.29-253.26c0-76.262 41.004-142.97 102-179.76v23.762h216v-23.762c60.996 36.793 102 103.5 102 179.76z"/>
      </g>
     </svg>


  );
}

export default BugIcon;
