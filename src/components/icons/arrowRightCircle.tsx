'use client';
import React from 'react';
import { IconPropsNative } from '.';
const ArrowRightCircle = ({ size = 24, color, style, ...props }: IconPropsNative) => {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16 4-4-4-4M8 12h8" />
    </svg>
  );
};
export default ArrowRightCircle;
