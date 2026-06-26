// @ts-nocheck

import { f1, f2, f3, f4, items } from "./wheelData";

export default function Roll() {
  return (
    <svg
      className="absolute  inset-0 pt-20 md:pt-0"
      viewBox="0 0 2000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_9_42" fill="white">
        <path d="M1922 1005C1922 1514.21 1509.21 1927 1000 1927C490.793 1927 78 1514.21 78 1005C78 495.793 490.793 83 1000 83C1509.21 83 1922 495.793 1922 1005ZM471.592 1005C471.592 1296.83 708.168 1533.41 1000 1533.41C1291.83 1533.41 1528.41 1296.83 1528.41 1005C1528.41 713.168 1291.83 476.592 1000 476.592C708.168 476.592 471.592 713.168 471.592 1005Z" />
      </mask>
      <path
        d="M1922 1005C1922 1514.21 1509.21 1927 1000 1927C490.793 1927 78 1514.21 78 1005C78 495.793 490.793 83 1000 83C1509.21 83 1922 495.793 1922 1005ZM471.592 1005C471.592 1296.83 708.168 1533.41 1000 1533.41C1291.83 1533.41 1528.41 1296.83 1528.41 1005C1528.41 713.168 1291.83 476.592 1000 476.592C708.168 476.592 471.592 713.168 471.592 1005Z"
        style={{
          fill: "#272b35e8",
          stroke: "#3d445291",
          strokeWidth: "13px",
        }}
        mask="url(#path-1-inside-1_9_42)"
      />

      <g id="roll">
        <g transform="translate(1000, 1000)">
          {f1.map((i, idx) => (
            <path
              key={idx}
              d={i}
              style={{
                fill: "#343a46c2",
                stroke: "#444c59c2",
                strokeWidth: "6",
              }}
            />
          ))}

          {f3.map(([path, id], idx) => (
            <g key={`f3-${id}`}>
              <path d={path} stroke="none" strokeWidth={5} id={id} />
              <text dy={20} className="circ-title">
                <textPath
                  href={`#${id}`}
                  textAnchor="middle"
                  startOffset="50%"
                  style={{ textAnchor: "middle" }}
                >
                  {items[idx].title}
                </textPath>
              </text>
            </g>
          ))}

          {f4.map(([path, id], idx) => (
            <g key={`f4-${id}`}>
              <path d={path} stroke="none" strokeWidth={5} id={id} />
              <text dy={16} className="circl-desc">
                <textPath
                  href={`#${id}`}
                  textAnchor="middle"
                  startOffset="50%"
                  style={{ textAnchor: "middle" }}
                >
                  {items[idx].dropRate}% drop rate
                </textPath>
              </text>
            </g>
          ))}

          {f2.map(({ x, y, rt, image }, idx) => (
            <g key={`img-${idx}`} transform={`translate(${x - 90},${y - 90})`}>
              <g transform={`rotate(${rt}, 90, 90)`}>
                <image
                  href={image}
                  height="180"
                  width="180"
                  className="scale-on-hover"
                />
              </g>
            </g>
          ))}
        </g>

      </g>

      <g filter="url(#filter0_d_28_19)">
        <path
          d="M729.884 144.395C907.122 88.7643 1097.26 89.2052 1274.29 145.717L1274.76 145.872C1284.34 149.202 1289.59 159.486 1286.73 169.18L1286.59 169.648L1199.04 440.732C1195.86 450.593 1185.44 455.981 1175.66 453.146L1175.2 453.005C1062.09 417.106 940.707 416.827 827.473 452.165L824.799 453.007C815.044 456.103 804.522 450.918 801.109 441.2L800.952 440.734L713.403 169.651C710.179 159.666 715.663 148.924 725.7 145.72L729.884 144.395ZM1252.1 172.325C1087.72 122.557 912.272 122.559 747.895 172.328L827.473 418.729C876.16 404.401 926.189 396.267 976.399 394.327C976.597 393.926 976.852 393.537 977.176 393.174L996.768 371.189C998.756 368.958 1002.24 368.958 1004.23 371.189L1023.82 393.174C1024.16 393.549 1024.42 393.951 1024.62 394.366C1074.49 396.376 1124.16 404.497 1172.52 418.728L1252.1 172.325Z"
          fill="url(#paint0_linear_28_19)"
        />
      </g>

      <defs>
        <filter
          id="filter0_d_28_19"
          x="708.079"
          y="98.6"
          width="593.833"
          height="369.701"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="4.7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_28_19"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_28_19"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_28_19"
          x1="999.996"
          y1="103"
          x2="999.996"
          y2="453.901"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8D919C" />
          <stop offset="1" stopColor="#4F5563" />
        </linearGradient>
      </defs>
    </svg>
  );
}

