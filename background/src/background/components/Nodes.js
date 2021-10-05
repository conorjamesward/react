export const Nodes = ({nodes, listener}) => (nodes.map(node => {
  //"fill-current text-techGray translate-x-(node.x - node.fx) /rem"

  //const styling = `fill-current text-techGray click`

  // return(
  //   <button 
  //   key={node.id} 
  //   onClick={listener}
  //   className="bg-techGray p-4 disabled:opacity-50"
  //   disabled={false}></button>
  // )

  return(
    <circle
    onClick={listener}
    className="fill-current text-techGray transition-all duration-200 ease-in-out"
    id={node.id}
    key={node.id}
    cx={node.x}
    cy={node.y}
    r={5}
    ></circle>
  )
}))