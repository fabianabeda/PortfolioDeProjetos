import datasethabilidades from '../model/dataset-habilidades.js'



for ( let cards of datasethabilidades ) {
    const hab = document.querySelector('.habilidades');
    let card = criadordecardshab(cards);
    hab.insertAdjacentHTML('beforeend', card);
  };

function criadordecardshab(cards) {
    return `
    <strong class="hab-context" style="background: ${cards.background}; color: ${cards.color};">${cards.conteudo}</strong>
    `
};



