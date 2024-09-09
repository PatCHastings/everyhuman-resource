import React from "react";
import { useInView } from "react-intersection-observer";

function TestComponent() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        backgroundColor: "lightblue",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <h2>This is a test component</h2>
    </div>
  );
}

export default TestComponent;
