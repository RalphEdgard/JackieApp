import React from 'react';
import ParallaxText from './ParallaxText';

export default function ContentSlider() {
  return (
    <>
      <ParallaxText baseVelocity={-5} />
      <ParallaxText baseVelocity={5} />
    </>
  );
}
