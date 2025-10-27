"use client";
import React, { FC } from "react";

// Basic noise texture component for background effects
const Noise: FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-20">
      <svg className="h-full w-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default Noise;
