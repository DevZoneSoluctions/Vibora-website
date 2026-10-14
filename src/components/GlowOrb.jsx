import React from 'react';

const GlowOrb = ({ color, top, left, delay, size = '300px' }) => (
  <div 
    className={`absolute rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-pulse ${color}`}
    style={{ 
      width: size, 
      height: size, 
      top: top, 
      left: left,
      animationDuration: '4s',
      animationDelay: delay
    }}
  />
);

export default GlowOrb;
