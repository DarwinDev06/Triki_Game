import { WINNWE_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para verificar si X u O ganó
  for (const combo of WINNWE_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay empate
  // si hay mas espacios vacios en el tablero
  return newBoard.every((square) => square !== null)
}
