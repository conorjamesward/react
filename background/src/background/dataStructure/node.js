export class node{
  constructor(id, windowSize, wander){
    this.id = id
    this.windowSize = windowSize
    this.wander = wander
    this.x = this.randomCoordinate(this.windowSize.width)
    this.y = this.randomCoordinate(this.windowSize.height)
    this.fx = this.randomWander(this.x, this.wander, this.windowSize.width)
    this.fy = this.randomWander(this.y, this.wander, this.windowSize.height)
  }
  randomCoordinate = (limit) => (Math.random()*limit)
  randomWander = (current, wander, limit) => {
    const posativeOrNegative = Math.random() < 0.5 ? 1 : -1
    const direction = Math.random() * wander * posativeOrNegative
    if (current + direction < 0 || current + direction > limit){
      return current - direction
    } else {
      return current + direction
    }
  }
}