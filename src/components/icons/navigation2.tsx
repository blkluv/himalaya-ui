'use client';
import React from 'react';
import { IconPropsNative } from '.';
const Navigation2 = ({ size = 24, color, style, ...props }: IconPropsNative) => {
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
      <path d="m12 2 7 19-7-4-7 4 7-19z" />
    </svg>
  );
};
export default Navigation2;
