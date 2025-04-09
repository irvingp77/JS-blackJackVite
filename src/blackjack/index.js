//import {crearDeck as crearNuevoDeck} from './usecases/crear-deck';
//import {cualquierCosa} from './usecases/crear-deck';
import { crearDeck, pedirCarta, valorCarta, turnoCpu, acumularPuntos, determinarGanador, dibujaCarta } from "./usecases";
/**
 * 10C = Ten of clubs(treboles)
 * 10D = Ten of diamonds(diamantes)
 * 10H = Ten of Hearts(corazones)
 * 10S = Ten of Spades(spadas)
 */
const miModulo = (() => {
  'use strict'
  
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  //Referencias del html
  const btnPedir = document.querySelector('#btnPedir'), 
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('small');
  
  //Inicaliza todos los valores y la pantalla para un nuevo juego
  const inicializaJuego = ( numJugadores = 1 )=> {
      console.clear();
      deck = crearDeck( tipos, especiales);
      puntosJugadores = [];
      for(let i = 0; i <= numJugadores; i++){
          puntosJugadores.push(0);
      }
      
      puntosHtml.forEach( elem => elem.innerText = 0);
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }

  ////Inician Eventos
  btnPedir.addEventListener('click', ()=>{
      const carta = pedirCarta(deck);

      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHtml);
      
      dibujaCarta(carta, 0, divCartasJugadores);

      if(puntosJugador > 21){
          console.warn('Lo siento has perdido, vuelve a intentarlo.');
          btnPedir.disabled = true;
          turnoCpu(puntosJugador, deck, divCartasJugadores, puntosJugadores, puntosHtml);

      }else if( puntosJugador === 21){
          console.warn('21 genial!!!');
          btnPedir.disabled = true;
          turnoCpu(puntosJugador, deck, divCartasJugadores, puntosJugadores, puntosHtml);
      }
  });

  btnDetener.addEventListener('click', ()=>{
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoCpu(puntosJugadores[0], deck, divCartasJugadores, puntosJugadores, puntosHtml);
  });

  btnNuevo.addEventListener('click', ()=>{
      inicializaJuego();
  });
  ////Terminan Eventos

  return {
      nuevoJuego : inicializaJuego
  };
})();
