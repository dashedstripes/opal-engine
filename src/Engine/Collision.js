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

    let hd = cax - cbx // Horizontal Distance
    let vd = cay - cby // Vertical Distance

    if (a.isMoveable) {
      if (hd < 0) {
        a.x = b.x - a.width
        if (a.vx > 0) {
          a.vx = 0
        }
      }
      else if (hd > 0) {
        a.x = b.x + b.width
        if (a.vx < 0) {
          a.vx = 0
        }
      }
    }
  }
}

export default Collision