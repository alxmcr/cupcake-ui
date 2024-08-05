import { SVGProps } from 'react';

export default function SkeletonListOptionsUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      width="996"
      height="112"
      aria-labelledby="loading-aria"
      viewBox="0 0 996 112"
      preserveAspectRatio="none"
      {...props}
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{
          fill: 'url("#fill")',
        }}
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="0" rx="8" ry="8" width="996" height="32" />
          <rect x="0" y="40" rx="8" ry="8" width="996" height="32" />
          <rect x="0" y="80" rx="8" ry="8" width="996" height="32" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
