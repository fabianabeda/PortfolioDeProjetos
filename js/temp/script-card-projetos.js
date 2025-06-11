import dataset from "../model/dataset.js";

const itens = document.querySelector('.itens');

dataset.map(criadordecards);

function criadordecards(cards) {
    const card = `
    <div class="item">
    <div class="cabecalho-item">
    <span>
    ${cards.id}
    </span>
    </div>
    <div class="meio-item">
    <div class="item-img-projeto"><img src="${cards.image}" alt=""></div>  
    </div>
    <div class="bottom-item">
    <p class="description">Descrição</p>
    <p class="text-description">${cards.textodesc}</p>
    </div>
    <div class="botoes-item">
    <a class="interacao-item" href="${cards.endereco}">Ver projeto</a>
    </div>`
    itens.insertAdjacentHTML('beforeend', card);
};
