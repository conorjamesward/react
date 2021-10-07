import {useState} from 'react'

const App = () => {

  const [target, setTarget] = useState(null)

  const handleFade = (entries) => {
    if(entries[0].isIntersecting){
      target.classList.replace('opacity-0', 'opacity-1')
    } else {
      target.classList.replace('opacity-1', 'opacity-0')
    }
  }

  const makeThreshold = (steps) => {
    let threshold = []
    for(let i = 1.0; i < steps; i++){
      const ratio = i/steps
      threshold.push(ratio)
    }
    threshold.push(1)
    return threshold
  }

  window.addEventListener("load", () => {
    setTarget(document.getElementById("opacityTest"))
  })

  if(target){
    const options = {
      root: null,
      rootMargin:"0px",
      threshold:0.5,
    }

    const observer = new IntersectionObserver(handleFade, options)
  
    observer.observe(target)

  }

  return (
    <div className="bg-red-400">
      <div className="h-screen w-screen">

      </div>
      <div id="opacityTest" className="transition duration-150 ease-in-out h-screen w-screen bg-blue-400 opacity-0">

      </div>
    </div>
  )
}

export default App;
