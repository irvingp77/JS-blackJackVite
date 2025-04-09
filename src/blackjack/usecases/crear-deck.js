import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck(baraja); 
 * @param {array <string>} tiposDeCarta  ejemplo ['C', 'D', 'H', 'S']
 * @param {array <string>} tiposEspeciales ejemplo ['A', 'J', 'Q', 'K'];
 * @returns {array <string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales)=>{
    if(!tiposDeCarta || tiposDeCarta.lenght === 0 ) 
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.lenght === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for( let i = 2; i<=10; i++ ){
        for( let tipo of tiposDeCarta ){
            deck.push( i + tipo );    
        }
    }
    
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push( esp + tipo );
        }
    }

    return _.shuffle(deck);
}

//export default crearDeck;