const cardDesc = document.querySelectorAll('.descricao');
const cards =  document.querySelectorAll('.card');
const crose = document.querySelectorAll('.close');

function cardAtivo(index) {
    cardDesc.forEach((card) => {
        card.classList.remove('ativo');
    });
    cardDesc[index].classList.add('ativo');
}

cards.forEach((itemCard, index) => {
    itemCard.addEventListener('click', () => {
        cardAtivo(index);
    })
});



function descInativo(index) {
    cardDesc.forEach((card) => {
        card.classList.remove('ativo');
    });
}
crose.forEach((itemCard, index) => {
    itemCard.addEventListener('click', () => {
        descInativo(index);
    })
});

const darkMode = document.querySelector('.dark-mode')

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    darkMode.classList.toggle('ativo');
    if(darkMode.classList.contains('ativo')){
        darkMode.innerHTML = '🌞';
    }else{
        darkMode.innerHTML = '🌓';
    }
});
console.log(darkMode.classList.contains('ativo'));