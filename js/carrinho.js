let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
console.log(carrinho);
const qtd = document.getElementsByName('quantidade');
const boxprodutos = document.getElementById('produtos');


let produtos = [
    {
        id: 1,
        nome: 'Ração Premium',
        preco: 100.00,
        img: '../assets/img/produtos/racao.webp',
        descricao: 'Ração nutritiva para cães e gatos de todas as idades.',
    },
    {
        id: 2,
        nome: 'Brinquedo Interativo',
        preco: 70.00,
        img: '../assets/img/produtos/brinquedos.webp',
        descricao: 'Brinquedo para manter seu pet entretido e ativo.',
    },
    {
        id: 3,
        nome: 'Cama Super Macia',
        preco: 150.00,
        img: '../assets/img/produtos/cama.webp',
        descricao: 'Cama super macia para o conforto do seu pet.',
    },
];


let conteudoprodutos = '';

produtos.forEach((item,index) => {
    let result = "";

    result +=  `<div class="produto">`
    result +=  `<img src="${item.img}" alt="Produto 1"></img>`
    result +=  `<h2>${item.nome}</h2>`
    result +=  `<p>${item.descricao}</p> `  
    result +=  `<button class="add-carrinho" data-id="${item.id}" data-qtd="1" data-index="${index}">Comprar</button>`
    result +=  `</div>`

    conteudoprodutos += result;
    
});

boxprodutos.innerHTML = conteudoprodutos;
const addCarrinho = document.querySelectorAll('.add-carrinho');
addCarrinho.forEach(item => {
    item.addEventListener('click', (event) => {
        const id = parseInt(event.target.getAttribute('data-id'));
        const qtd = parseInt(event.target.getAttribute('data-qtd'));
        const produto = produtos.find(produto => produto.id === id);

        adicionarCarrinho(id, qtd, produto.nome, produto.preco);
    });
});

function adicionarCarrinho(id, qtd, nome, preco) {

    const produto = carrinho.findIndex(item => item.id === id);
    if(!produto){
        carrinho[produto].qtd += 1;
        console.log(carrinho)
    }
    else {
        carrinho.push({
            id: id,
            qtd: qtd,
            nome: nome,
            preco: preco
        })
    }    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

}