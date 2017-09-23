class Canvas {
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
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.context = this.canvas.getContext('2d')

    // Initialise
    document.getElementById(root).appendChild(this.canvas)
  }

}

export default Canvas