// buttons BoxShadow


const botao = document.querySelector('.btn-disabled-shadow'); 

function toggleSombra() {
    const temSombra = botao.style.boxShadow !== '';

    if (temSombra) { 
        botao.style.boxShadow = ''; 
    }
    else {
        botao.style.boxShadow = 'none'; 
    }

}

botao.addEventListener('click', toggleSombra)


// buttons disabled


const botaoDisabled = document.querySelector('.btn-disabled2'); 

function toggleDisabled() {
    const hasBackgound = botaoDisabled.style.background !== '';

    if (hasBackgound) { 
        botaoDisabled.style.background = ''; 
    }
    else {
        botaoDisabled.style.background = 'transparent'; 
    }

}

botaoDisabled.addEventListener('click', toggleDisabled)