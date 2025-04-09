  /**
   * Esta funcion me permite tomar una nueva carta del deck
   * @param {Array <String>} deck es un arreglo de string
   * @returns {String} retorna la carta del deck
   */

  export const pedirCarta = (deck) => {
    if( !deck || deck.length === 0 ){
        throw new Error('deck es obligatorio como un arreglo de string');
    }
    
    return deck.pop();
}