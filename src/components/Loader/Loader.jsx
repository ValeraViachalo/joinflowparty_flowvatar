import React, { useRef } from 'react'

import "./Loader.scss";
import { useGSAP } from '@gsap/react';
import { PresenceAnim } from './anim';
import gsap from 'gsap';

export const Loader = ({ setLoaderFinished }) => {
  const slides = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoaderFinished(true),
    });

    tl.add(PresenceAnim(), 0)
  })

  return (
    <>
      <div
      className="slide-in slide-in-1"
      ref={(s) => slides.current.push(s)}
    />
    <div
      className="slide-in slide-in-2"
      ref={(s) => slides.current.push(s)}
    />
    <div
      className="slide-in slide-in-3"
      ref={(s) => slides.current.push(s)}
    />
    <div
      className="slide-in slide-in-4"
      ref={(s) => slides.current.push(s)}
    />
    </>
  )
}
