import { Game } from '../Engine'
import Block from './Block'
import Player from './Player'

class MyGame extends Game {
  constructor(width, height, root) {
    super(640, 480, 'root')
  }

  load() {
    for (let i = 0; i < 20; i++) {
      this.add(`block-${i}`, new Block(Math.floor(Math.random() * (this.width - 20)) + 1, Math.floor(Math.random() * (this.height - 20)) + 1, 20, 20))
    }
    this.add('player', new Player(this.width / 2 - 10, this.height / 2 - 10, 20, 20, this.input))
  }
}

let myGame = new MyGame()
myGame.start()

