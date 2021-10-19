import Particles from 'react-tsparticles';

const KonamiParticles: React.FC = () => (
  <Particles
    options={{
      background: { opacity: 0 },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 0,
        },
        color: {
          value: [
            '#EF4444',
            '#F59E0B',
            '#10B981',
            '#3B82F6',
            '#6366F1',
            '#8B5CF6',
            '#EC4899',
          ],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
          },
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          out_mode: 'out',
        },
      },
      emitters: [
        {
          direction: 'bottom',
          rate: {
            delay: 0.5,
            quantity: 1,
          },
          position: {
            x: 50,
            y: 50,
          },
          size: {
            width: 100,
            height: 100,
          },
        },
      ],
      motion: { disable: true },
      retina_detect: true,
    }}
  />
);

export default KonamiParticles;
