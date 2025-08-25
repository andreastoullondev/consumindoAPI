'use strict'

function extrairEstilosDiceBear(){
    const url = 'https://www.dicebear.com/styles/'
    const response = fetch(url)
}

function carregarEstilos(){
    const estilos = extrairEstilosDiceBear()
}

carregarEstilos()