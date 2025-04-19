"use client"

import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min"; 

import { ReactNode } from "react";

export default function AnimatedBg() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
          "
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>

  );
}
