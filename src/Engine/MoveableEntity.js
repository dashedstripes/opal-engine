import Entity from './Entity';

class MoveableEntity extends Entity {
  constructor(x, y, width, height, input) {
    super(x, y, width, height, input)
    this.vx = 0
    this.vy = 0
    this.speed = 2
    this.input = input
    this.isMoveable = true
  }

  update() {
    this.x += this.vx
    this.y += this.vy
  }
}

export default MoveableEntity