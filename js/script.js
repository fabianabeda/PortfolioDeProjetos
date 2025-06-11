//alert('Atenção! Este portfólio ainda está em desenvolvimento.');

function alternaprojeto() {
  let projetos = document.querySelector('.projetos');
  projetos.setAttribute('style', 'Display: none;');
  let contatos = document.querySelector('.contatos');
  contatos.setAttribute('style','Display: block')
};

function alternarcontato() {
  let projetos = document.querySelector('.projetos');
  projetos.setAttribute('style', 'Display: block;');
  let contatos = document.querySelector('.contatos');
  contatos.setAttribute('style','Display: none')
};
