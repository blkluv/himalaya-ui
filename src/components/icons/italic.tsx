'use client';
import React from 'react';
import { IconPropsNative } from '.';
const Italic = ({ size = 24, color, style, ...props }: IconPropsNative) => {
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
      <path d="M19 4h-9M14 20H5M15 4 9 20" />
    </svg>
  );
};
export default Italic;
