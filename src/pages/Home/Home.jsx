import React, { useRef } from "react";
import "./Home.scss";
import gsap from "gsap";

export default function Home() {

  const flowvatarRef = useRef();
  const flowvatarFaceRef = useRef();

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.18;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => {
    return start * (1 - amount) + target * amount;
  };

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    if (flowvatarRef.current) {
      gsap.set(flowvatarRef.current, {
        xPercent: `+=${xForce * 0.4}`,
        yPercent: `+=${yForce * 0.7}`,
      });
    }

    if (flowvatarFaceRef.current) {
      gsap.set(flowvatarFaceRef.current, {
        xPercent: `+=${xForce * 0.3}`,
        yPercent: `+=${yForce * 0.7}`,
      });
    }

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  const handleMouseEnter = (color) => {
    if (flowvatarRef.current) {
      flowvatarRef.current.style.backgroundColor = color;
    }
  };

  const handleMouseLeave = () => {
    if (flowvatarRef.current) {
      flowvatarRef.current.style.backgroundColor = "#5546ff"; // поверніть колір фону до початкового
    }
  };

  return (
    <>
      <main className="home">
        <div
          className="center"
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
        >
          <div
            className="for-change-color for-change-color--left"
            onMouseEnter={() => handleMouseEnter("#ff7bca")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/images/decor.svg"
              alt=""
              className="for-change-color--left__decor"
            />
          </div>
          <div
            className="for-change-color for-change-color--right"
            onMouseEnter={() => handleMouseEnter("#bfff0a")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/images/decor.svg"
              alt=""
              className="for-change-color--right__decor"
            />
          </div>
          <h1 className="super-text">FLOW</h1>
          <div className="flowvatar" ref={flowvatarRef}>
            <img
              src="images/flowvatar_lights.webp"
              alt=""
              className="flowvatar__light"
            />
            <div className="flowvatar__face" ref={flowvatarFaceRef}>
              <img
                src="images/eye.svg"
                alt=""
                className="flowvatar__eye flowvatar__eye-1"
              />
              <img
                src="images/eye.svg"
                alt=""
                className="flowvatar__eye flowvatar__eye-2"
              />
              <div className="flowvatar__mouth" />
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
