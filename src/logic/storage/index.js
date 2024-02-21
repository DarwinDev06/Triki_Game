export const saveGameToStorage = ({ board, turn }) => {
  // GUARDAR PARTIDA
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('board')
}
