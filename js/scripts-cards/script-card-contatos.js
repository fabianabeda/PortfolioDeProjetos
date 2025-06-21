import dataset2 from "../model/dataset2.js";

const itens2 = document.querySelector('.itens-contatos');

for (let cards of dataset2) {
    const card2 = criadordecards(cards);
    itens2.insertAdjacentHTML('beforeend', card2);
}

// Função que cria o HTML do card
function criadordecards(cards) {
    return `
        <div class="item">
            <div class="cabecalho-item">
                <span>${cards.id}</span>
            </div>
            <div class="meio-item">
                <div class="item-img-projeto">
                    <img src="${cards.image}" alt="${cards.id}">
                </div>  
            </div>
            <div class="bottom-item">
                <p class="description"></p>
                <p class="text-description">${cards.textodesc}</p>
            </div>
            <div class="botoes-item">
                <a class="interacao-item" href="${cards.endereco}" target="_blank" rel="noopener noreferrer">Acessar perfil</a>
                <button class="interacao-item btn-copiar" data-link="${cards.endereco}">Copiar link</button>
            </div>
        </div>
    `;
}

// Adiciona evento para copiar o link ao clicar no botão "Copiar link"
itens2.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-copiar')) {
        const link = e.target.getAttribute('data-link');
        navigator.clipboard.writeText(link)
            .then(() => alert('Link copiado!'))
            .catch(() => alert('Não foi possível copiar o link.'));
    }
});
