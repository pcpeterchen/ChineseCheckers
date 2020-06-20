import Client from 'boardgame.io/client'
import Board from './components/Board'
import ChineseChecker from './game'

var App = Client({
  board: Board,
  game: ChineseChecker,
  debug: false,
  // multiplayer: true,
})

export default App