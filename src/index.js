const fetch = require('node-fetch');

async function cotation(currency) {
    const response = await fetch('http://api.promasters.net.br/cotacao/v1/valores');
    const json = await response.json();

    return json.valores[currency].valor;
}

const dolar = async () => {
    return await cotation('USD');
};
const euro = async () => {
    return await cotation('EUR');
};
const peso = async () => {
    return await cotation('ARS');
};
const libra = async () => {
    return await cotation('GBP');
};
const bitcoin = async () => {
    return await cotation('BTC');
};

module.exports = {
    dolar,
    euro,
    peso,
    libra,
    bitcoin
};