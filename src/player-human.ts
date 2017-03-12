import {Player} from './player';
import {Board, BoardPiece} from './board';

export class PlayerHuman extends Player {
  constructor(boardPiece : BoardPiece) {
    super(boardPiece)
  }
  getAction(board : Board) : number {
    return 0
  }
}