class InputManager {
  constructor() {

    this.KEYS = {
      W: 87,
      A: 65,
      S: 83,
      D: 68
    }

    this.keysDown = {}
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
    window.addEventListener('keyup', this.handleKeyUp.bind(this))
  }

  isKeyDown(key) {
    return this.keysDown[key]
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case this.KEYS.W:
        this.keysDown['w'] = true
        break
      case this.KEYS.A:
        this.keysDown['a'] = true
        break
      case this.KEYS.S:
        this.keysDown['s'] = true
        break
      case this.KEYS.D:
        this.keysDown['d'] = true
        break
    }
  }

  handleKeyUp(e) {
    switch (e.keyCode) {
      case this.KEYS.W:
        this.keysDown['w'] = false
        break
      case this.KEYS.A:
        this.keysDown['a'] = false
        break
      case this.KEYS.S:
        this.keysDown['s'] = false
        break
      case this.KEYS.D:
        this.keysDown['d'] = false
        break
    }
  }
}

export default InputManager