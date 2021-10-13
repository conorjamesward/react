import Particles from 'react-particles-js'
import settings from './particlesjs-config.json'

export const ParticlesBackground = () => {

  return(
    <Particles params={settings}/>
  )
}