/**
 * 
 * @param {String} carta 
 * @param {String} turno 
 * @param {String} divCartasJugadores
 * @returns {HTMLImageElement} imagen de carta de retorno
 */
  //Dibuja la carta tomada del deck para el jugador correspondiente
  export const dibujaCarta = (carta, turno, divCartasJugadores)=>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}