'use client'

import { useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export function NeuralNetworkBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <Particles
      id="neural-network"
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: 'transparent',
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#FF5733',
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 400,
            },
            value: 180,
          },
          opacity: {
            value: {
              min: 0.5,
              max: 1,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: 2,
              max: 4,
            },
          },
          links: {
            color: '#FF5733',
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.8,
              speed: 0.5,
            },
          },
        },
        smooth: true,
      }}
      className="absolute inset-0 w-full h-full"
    />
  )
}
