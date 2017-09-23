class Entity {
  /**
   * 
   * @param {Int} x - X position on canvas
   * @param {Int} y - Y position on canvas
   * @param {Int} width - Entity width
   * @param {Int} height - Entity height
   */
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = '#ff00ff'
  }

  render(context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }

}

export default Entity