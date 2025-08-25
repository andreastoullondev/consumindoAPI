'use strict'

async function extrairEstilosDiceBear(){
    const urlProxy = 'GET https://api.codetabs.com/v1/proxy?quest='
    const url = 'https://www.dicebear.com/styles/'
    const response = await fetch(`${urlProxy}${url}`)
    const html = await response.text()
    console.log(html);
}

function carregarEstilos(){
    const estilos = extrairEstilosDiceBear()
}

carregarEstilos()