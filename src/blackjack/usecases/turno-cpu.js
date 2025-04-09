 import { pedirCarta, acumularPuntos, dibujaCarta, determinarGanador} from './index';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array <String>} deck 
 * @param {Array <String>} divCartasJugadores
 * @param {Array <Number>} puntosJugadores
 * @param {Array <String>} puntosHtml
 */
// Turno del cpu
 export const turnoCpu = (puntosMinimos, deck = [], divCartasJugadores, puntosJugadores, puntosHtml) =>{
    if(!puntosMinimos)
        throw new Error('Puntos minimos son necesarios');

    let puntosCpu = 0;
    do{
        const carta = pedirCarta(deck);
        puntosCpu = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHtml);
        dibujaCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    
    } while( (puntosCpu < puntosMinimos) && ( puntosMinimos <= 21) );

    determinarGanador(puntosJugadores);
}