import { node } from './node'
export class network{
  
  build(numberOfNodes, windowSize, wander){
    let nodes = []
    for(let i = 0; i < numberOfNodes; i++){
      nodes.push(new node(i, windowSize, wander))
    }
    return nodes
  }
}