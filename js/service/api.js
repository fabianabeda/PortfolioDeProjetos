const cepApi = "https://viacep.com.br/ws/";

async function readAll(cep) {
    const data = await fetch(`${cepApi}/${cep}/json/`);
    const datajson = await data.json();
    return datajson;
};

export default readAll;