class Collision {

  isColliding(a, b) {
    if (a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height) {
      return false
    }

    if (a.x <= b.x + b.width &&
      a.x + a.width >= b.x &&
      a.y <= b.y + b.height &&
      a.height + a.y >= b.y) {
      return true
    }
  }

  collide(a, b) {

    let cax = a.x + (a.width / 2) // Center of a.x
    let cay = a.y + (a.height / 2) // Center of a.y
    let cbx = b.x + (b.width / 2) // Center of b.x
    let cby = b.y + (b.height / 2) // Center of b.y

    let dx = (cax - cbx) / (b.width / 2) // Horizontal Distance
    let dy = (cay - cby) / (b.height / 2) // Vertical Distance

    if (a.isMoveable) {
      if (dx < 0) {
        a.x = (b.x - a.width)
      } else {
        a.x = (b.x + a.width)
      }

      if (dy < 0) {
        a.y = (b.y - a.height)
      } else {
        a.y = (b.y + a.height)
      }
    }
  }
}

export default Collision