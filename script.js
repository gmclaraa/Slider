const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');
const container = document.querySelector('.container');
const lista = document.querySelector('.lista');
const thumb = document.querySelector('.thumb');

btnNext.onclick = () => moveItems('next');
btnBack.onclick = () => moveItems('back');

function moveItems(tipo) {
    const listaItens = document.querySelectorAll('.lista .lista-item');
    const ThumbItens = document.querySelectorAll('.thumb .thumb-item');

    container.classList.remove('next', 'back');
    void container.offsetWidth; 

    if (tipo === 'next') {
        lista.appendChild(listaItens[0]);
        thumb.appendChild(ThumbItens[0]);
        container.classList.add('next');
    } else {
        lista.prepend(listaItens[listaItens.length - 1]);
        thumb.prepend(ThumbItens[listaItens.length - 1]);
        container.classList.add('back');
    }
}

setTimeout(() => {
    container.classList.remove('next');
    container.classList.remove('back');
}, 3000);