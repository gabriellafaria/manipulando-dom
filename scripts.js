const body = document.querySelector('body');
const button = document.getElementById('myButton');
const h1 = document.querySelector('h1');
const items = document.querySelectorAll('.item');

function changeMode() {
    button.classList.toggle('button-dark');
    body.classList.toggle('body-dark');
    h1.classList.toggle('title-dark');
    for (let i of items) {
        i.classList.toggle('item-dark');
        i.classList.toggle('container-dark');
    }
}


/* Aqui nos "importamos o conteudo como objetos"*/


/* let objeto1 = {
    title: 'O tigre',
    img: '',
    descricao: 'lorem ips'
}
 */