import { network } from './dataStructure/network'
import {useState, useEffect} from 'react'
import { getWindowSize } from "./getWindowSize"
import { Nodes } from './components/Nodes'

export const Background = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize)

  const handleWindowResize = () => {
    //TODO: usecallback?
    //console.log(getWindowSize())
    setWindowSize(getWindowSize)
  }

  window.addEventListener('resize', handleWindowResize)

  const nodeBackground = new network()

  const numberOfNodes = 10
  const wander = 100
  const speed = 200

  const [background, setBackground] = useState(nodeBackground.build(numberOfNodes, windowSize, wander))

  const handleNodeEvent = (e) => {
    console.log(e.target)
  }


  if(!background) return <div>Loading...</div>

  // return(
  //   <>
  //   <Nodes nodes={background} listener={handleNodeEvent}/>
  //   </>
  // )

  return(
    <svg height={windowSize.height} width={windowSize.width} className="bg-gradient-to-t from-techBlueLow via-techBlue to-techBlueHigh">
      <Nodes nodes={background} listener={handleNodeEvent}/>
    </svg>
  )
}