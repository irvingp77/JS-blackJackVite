
/**
 * 
 * @param {Array <Number>} puntosJugadores 
 */
//Determinar el ganador en base al puntaje acumulado
export const determinarGanador = (puntosJugadores)=>{
    const [puntosMinimos, puntosCpu] = puntosJugadores;

    setTimeout(() => {
        alert( ( ( puntosMinimos === puntosCpu )
            ? 'Empate' 
            : ( (puntosMinimos <= 21)  && (puntosMinimos > puntosCpu) ) 
                ? 'Felicidades!!!, Ganaste.' 
                : ( (puntosCpu > 21) )
                ?  'Felicidades!!!, Ganaste.' 
                :  'Lo siento ha ganado la computadora.' )
            );
    }, 500);
}