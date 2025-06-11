import readAll from './service/api.js';

const formEndereco = document.querySelector('#formValid');

formEndereco.addEventListener('submit', (e) => {
    e.preventDefault();
});

async function ValidCep(cep){
console.log(cep)
const data = await readAll(cep)
const rua =  document.querySelector("#endereco")
console.log(data.logradouro)
rua.value = data.logradouro
}

const cepUser = document.querySelector("#cep");
console.log(cepUser);
cepUser.addEventListener("keyup",(e)=>{
    console.log('fora oi');
    if(e.which === 13){
        console.log('dentro oi')
        console.log(cepUser.value)
        ValidCep(cepUser.value)
    }
});
