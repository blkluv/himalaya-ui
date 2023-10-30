'use client';
import React from 'react';
import { IconPropsNative } from '.';
const EdgeConfig = ({ size = 24, color, style, ...props }: IconPropsNative) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      viewBox="0 0 60 60"
      {...props}
      height={size}
      width={size}
      style={{ ...style, color: color }}
    >
      <path d="M23.791 16.528c10.379 0 18.792-2.805 18.792-6.264C42.583 6.804 34.17 4 23.79 4 13.413 4 5 6.804 5 10.264c0 3.46 8.413 6.264 18.791 6.264ZM23.791 31.143C13.351 31.143 5 28.345 5 24.88" />
      <path d="M5 10.264v29.23c0 3.467 8.352 6.265 18.791 6.265M42.583 22.5V10.264" />
      <circle cx="38.8" cy="38.5" r="16.3" />
      <path
        fill="currentColor"
        d="M29.505 38.395v-.892c.512 0 .867-.102 1.065-.306.199-.204.298-.534.298-.99v-.98c0-.548.075-.986.226-1.315a1.69 1.69 0 0 1 .64-.75c.275-.169.6-.281.976-.337a8.37 8.37 0 0 1 1.234-.085v1.412c-.35 0-.616.046-.8.137a.703.703 0 0 0-.367.418 2.186 2.186 0 0 0-.098.71v1.296c0 .225-.042.44-.125.644-.082.201-.236.38-.461.537-.225.154-.546.277-.963.368-.418.09-.96.133-1.625.133Zm4.439 5.58c-.447 0-.858-.028-1.234-.084a2.58 2.58 0 0 1-.977-.337 1.69 1.69 0 0 1-.639-.75c-.15-.33-.226-.767-.226-1.315v-.985c0-.456-.1-.786-.298-.99-.198-.204-.553-.306-1.065-.306v-.892c.666 0 1.207.045 1.625.137.417.089.738.212.963.369.225.154.379.333.461.537.083.201.125.416.125.643V41.3c0 .284.032.519.097.705.066.19.188.329.369.418.183.091.45.137.799.137v1.416Zm-4.439-4.767v-1.705h1.594v1.705h-1.594ZM39.918 40.757l-.05.488c-.038.391-.112.78-.221 1.168-.107.39-.22.744-.337 1.06-.116.317-.21.566-.28.746h-1.225c.044-.174.105-.418.182-.732.077-.31.15-.66.217-1.048a9.19 9.19 0 0 0 .129-1.185l.022-.497h1.563Zm-.79-3.418c-.293 0-.545-.103-.755-.31a1.027 1.027 0 0 1-.31-.755c0-.29.103-.537.31-.742.21-.207.462-.31.755-.31.284 0 .532.103.745.31.213.205.32.452.32.742 0 .198-.05.379-.151.541a1.11 1.11 0 0 1-.386.382c-.16.095-.336.142-.528.142ZM48.494 38.316v.892c-.51 0-.864.102-1.066.306-.198.204-.297.534-.297.99v.986c0 .547-.077.985-.23 1.313-.152.332-.365.582-.64.75a2.54 2.54 0 0 1-.972.338 8.299 8.299 0 0 1-1.234.084V42.56c.35 0 .614-.046.794-.137a.7.7 0 0 0 .373-.418 2.17 2.17 0 0 0 .098-.705v-1.297c0-.227.041-.442.124-.643.083-.204.237-.383.462-.537.225-.157.546-.28.963-.369.417-.092.959-.137 1.625-.137Zm-4.44-5.576c.45 0 .862.029 1.235.085.376.056.7.168.972.337.275.169.488.419.64.75.153.329.23.767.23 1.314v.981c0 .456.1.786.297.99.202.204.557.306 1.066.306v.892c-.666 0-1.208-.044-1.625-.133-.417-.091-.738-.214-.963-.368-.225-.157-.379-.336-.462-.537a1.695 1.695 0 0 1-.124-.644v-1.296c0-.287-.033-.524-.098-.71a.701.701 0 0 0-.373-.418c-.18-.091-.445-.137-.794-.137V32.74Zm4.44 4.763v1.705H46.9v-1.705h1.594Z"
      />
    </svg>
  );
};
export default EdgeConfig;
