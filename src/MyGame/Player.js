import { MoveableEntity } from '../Engine'

class Player extends MoveableEntity {
  constructor(x, y, width, height, input) {
    super(x, y, width, height, input)
    this.speed = 7
    this.color = '#00ffff';
  }

  events() {

    if (this.input.isKeyDown('a')) {
      this.vx = -this.speed
    }

    if (this.input.isKeyDown('d')) {
      this.vx = this.speed
    }

    if (this.input.isKeyDown('w')) {
      this.vy = -this.speed
    }

    if (this.input.isKeyDown('s')) {
      this.vy = this.speed
    }

    if (!this.input.isKeyDown('a') && !this.input.isKeyDown('d')) {
      this.vx = 0
    }

    if (!this.input.isKeyDown('w') && !this.input.isKeyDown('s')) {
      this.vy = 0
    }
  }
}

export default Player