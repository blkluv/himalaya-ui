'use client';
import React from 'react';
import { IconPropsNative } from '.';
const ChevronsDown = ({ size = 24, color, style, ...props }: IconPropsNative) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      {...props}
      height={size}
      width={size}
      style={{ ...style, color: color }}
    >
      <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
    </svg>
  );
};
export default ChevronsDown;
