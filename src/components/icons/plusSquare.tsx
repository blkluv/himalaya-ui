'use client';
import React from 'react';
import { IconPropsNative } from '.';
const PlusSquare = ({ size = 24, color, style, ...props }: IconPropsNative) => {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
};
export default PlusSquare;
