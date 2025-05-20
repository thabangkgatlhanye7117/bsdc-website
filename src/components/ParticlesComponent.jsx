import {useCallback} from 'react';
import Particles from 'react-tsparticles';
import { loadFull} from 'tsparticles';

const ParticlesComponent = () => {
        const particlesInit = useCallback( async (engine) => {
          await loadFull(engine);
        }, [])

        return(
          <Particles 
              id='tsparticles'
              init= {particlesInit}
              options={{

                  fullscreen: {enable:true},

                  particles:{
                         number:{value: 80},
                         color:{value:' #001469' },
                         shape:{type: 'circle'},

                         opacity:{
                            value: 0.8,
                            random: {enable: true, minimumValue: 0.4}
                         },
                         size: {
                           value:6,
                           random: { enable: true, minimumValue: 3}
                         },
                         move: {
                            enable: true,
                            speed: 2,
                            direction: 'none',
                            outModes:{ default:'bounce'}
                         },
                         links: {
                           enable:true,
                           color: '#001469',
                           distance: 150,
                           opacity:0.5,
                           width: 1
                         }
                  },

                  interactivity: {
                     events: {
                       onHover: {enable: true, mode: "repulse"},
                       onClick: {enable: true, mode: "push"}
                     },
                     modes: {
                       repulse: {distance: 120},
                       push: {quantity: 5}
                     }
                  },
                  background: {
                     color: "#ffffff"
                  }
              }}
              
              
              
              />
        );
};
export default ParticlesComponent