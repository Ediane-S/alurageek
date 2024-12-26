const chk = document.getElementById('chk');
const iconAdd = document.querySelector('.buttonAdd');
const formCard = document.querySelector('.formCard');
const cardContainer = document.querySelector('.card-container');
const form = document.querySelector('#add-card-form');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


iconAdd.addEventListener('click', () => {
    if (formCard.style.display === 'none') { formCard.style.display = 'block'; }
    else { formCard.style.display = 'none'; }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('txt-card').value;
    const preco = document.getElementById('preco-card').value;
    const imagem = document.getElementById('img-card').value;

    const novoCard = document.createElement('div');
    novoCard.classList.add('card');

    novoCard.innerHTML = `
        <div class="card">
                    <div class="imgCard"><img src="${imagem}"></div>
                    <p class="txtCard">${nome}</p>
                    <div class="preco-icon">
                        <p class="preco">$${preco} gemas</p>
                        <button class="btnLixeira"><i class="fi fi-rr-trash"></i></button>
                    </div>
                </div>
    `;

    
    cardContainer.appendChild(novoCard);
        
form.reset();
formCard.style.display = 'none';
   
const btnLixeira = novoCard.querySelector('.btnLixeira');
btnLixeira.addEventListener('click', () => {
    cardContainer.removeChild(novoCard);

});
});

