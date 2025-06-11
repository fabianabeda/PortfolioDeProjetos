const hist = [];

function soma() {
  // e.preventDefault();
  cont = 1;
  let arraynumber = [];
  let num1 = document.querySelector('#num1').value;
  let num2 = document.querySelector('#num2').value;
  arraynumber.push(Number(num1)); arraynumber.push(Number(num2));
  result = arraynumber.reduce((addition, value) => addition + value, 0)
  let h1 = document.querySelector('h1');
  h1.innerHTML = result;

  hist.push(result);

  limpt = document.querySelector('.tela');
  limpt.innerHTML = '';

  lista = document.querySelector('.tela');
  for(var i = 0; i < hist.length; i++){
    let item = document.createElement('p');
    item.appendChild(document.createTextNode(hist[i]));
    lista.appendChild(item);
  }

}

function sub() {
  // e.preventDefault();
  let num1 = document.querySelector('#num1').value;
  let num2 = document.querySelector('#num2').value;   
  let result = Number(num1) - Number(num2);
  let h1 = document.querySelector('h1');
  h1.innerHTML = result;
  hist.push(result)

  limpt = document.querySelector('.tela');
  limpt.innerHTML = '';

  lista = document.querySelector('.tela');
  for(var i = 0; i < hist.length; i++){
    let item = document.createElement('p');
    item.appendChild(document.createTextNode(hist[i]));
    lista.appendChild(item);
  }

}

function mult() {
  // e.preventDefault();
  let num1 = document.querySelector('#num1').value;
  let num2 = document.querySelector('#num2').value;
  let result = Number(num1) * Number(num2);
  let h1 = document.querySelector('h1');
  h1.innerHTML = result;

  hist.push(result)

  limpt = document.querySelector('.tela');
  limpt.innerHTML = '';

  lista = document.querySelector('.tela');
  for(var i = 0; i < hist.length; i++){
    let item = document.createElement('p');
    item.appendChild(document.createTextNode(hist[i]));
    lista.appendChild(item);
  }
}

function div() {
  // e.preventDefault();
  let num1 = document.querySelector('#num1').value;
  let num2 = document.querySelector('#num2').value;
  
  if (num2 == 0) {
    let result = 0;
    let h1 = document.querySelector('h1');
    h1.innerHTML = result;
    hist.push(result)

    limpt = document.querySelector('.tela');
    limpt.innerHTML = '';

    lista = document.querySelector('.tela');
    for(var i = 0; i < hist.length; i++){
      let item = document.createElement('p');
      item.appendChild(document.createTextNode(hist[i]));
      lista.appendChild(item);
    }

  }
  else {
    let result = Number(num1) / Number(num2);
    let h1 = document.querySelector('h1');
    h1.innerHTML = result;

      hist.push(result)

    limpt = document.querySelector('.tela');
    limpt.innerHTML = '';

    lista = document.querySelector('.tela');
    for(var i = 0; i < hist.length; i++){
      let item = document.createElement('p');
      item.appendChild(document.createTextNode(hist[i]));
      lista.appendChild(item);
    }
  }
  
}

function historico() {
  // e.preventDefault();
  let telahistorico = document.querySelector('.tela-historico');
  telahistorico.setAttribute('style','Display: block;');
}

function fechahistorico() {
  // e.preventDefault();
  let telahistorico = document.querySelector('.tela-historico');
  telahistorico.setAttribute('style','Display: none;');
}
