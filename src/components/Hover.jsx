import React from "react";
import { useRef } from "react";
import useHover from "../hooks/useHover";

export default function Hover() {
  const ref = useRef();
  const isHovering = useHover(ref);
  return (
    <div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        background: isHovering ? "teal" : "red",
      }}
    ></div>
  );
}
