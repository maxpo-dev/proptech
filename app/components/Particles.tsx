'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const particleOptions = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60, // Reduced FPS for better performance
  interactivity: {
    events: {
      onClick: { enable: false, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 120, duration: 0.5 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 120,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: { enable: true },
    move: {
      direction: "none" as const, // Correctly typed value
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1.5, // Slightly faster for dynamic effect
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 60, // Reduced particle count
    },
    opacity: { value: { min: 0.3, max: 0.7 } },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } },
  },
  detectRetina: true,
  fullScreen: { enable: false, zIndex: 0 },
};

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Load slim version for better performance
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // options={particleOptions}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}
