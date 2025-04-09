import { valorCarta } from "./valor-carta";

/**
 * jugador es el jugador en turno para el que se acunulara puntos, el cpu es el ultimo.
 * carta es el valor de la carta a contar 
 * @param {String} carta 
 * @param {Array<String>} jugador 
 * @param {Array<Number>} puntosJugadores
 * @param {Array<String} puntosHtml
 * @returns 
 */
   export const acumularPuntos = (carta, jugador, puntosJugadores, puntosHtml)=>{
        puntosJugadores[jugador] = puntosJugadores[jugador] + valorCarta(carta);
        puntosHtml[jugador].innerText = puntosJugadores[jugador];
        return puntosJugadores[jugador];
}
