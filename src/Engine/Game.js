import Canvas from './Canvas'
import InputManager from './InputManager'
import Array from './Array'
import Quadtree from './Quadtree'
import Collision from './Collision'

class Game {
  /**
   * 
   * @param {Int} width - Width of the canvas in pixels.
   * @param {Int} height - Height of the canvas in pixels.
   * @param {String} root - The ID of the parent div.
   */
  constructor(width, height, root) {

    // Public
    this.width = width
    this.height = height
    this.canvas = new Canvas(this.width, this.height, root)
    this.context = this.canvas.context
    this.quad = new Quadtree(0, { x: 0, y: 0, width: this.width, height: this.height })
    this.collision = new Collision()
    this.input = new InputManager()
    this.isRunning = false
    this.entities = []

    this.load()
  }

  // Game Loop

  start() {
    this.isRunning = true
    requestAnimationFrame(this.loop.bind(this))
  }

  loop() {
    if (this.isRunning) {
      this.events()
      this.update()
      this.render()
      requestAnimationFrame(this.loop.bind(this))
    }
  }

  events() {
    for (let i = 0; i < this.entities.length; i++) {
      if (typeof this.entities[i].entity.events === 'function') {
        this.entities[i].entity.events()
      }
    }
  }

  update() {
    this.quad.clear()

    for (let i = 0; i < this.entities.length; i++) {
      this.quad.insert(this.entities[i].entity)
    }

    for (let i = 0; i < this.entities.length; i++) {
      let returnObjects = []
      returnObjects = this.quad.retrieve(this.entities[i].entity)
      for (let j = 0; j < returnObjects.length; j++) {
        if (this.collision.isColliding(this.entities[i].entity, returnObjects[j])) {
          this.collision.collide(this.entities[i].entity, returnObjects[j])
        }
      }
    }

    // Update entities
    for (let i = 0; i < this.entities.length; i++) {
      if (typeof this.entities[i].entity.update === 'function') {
        this.entities[i].entity.update()
      }
    }
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.fillStyle = '#000000'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].entity.render(this.context)
    }
  }

  // Entities

  add(id, entity) {
    this.entities.push({
      id,
      entity
    })
  }

}

export default Game