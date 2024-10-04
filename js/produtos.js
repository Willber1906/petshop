let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const carrinhobox = document.getElementById('carrinhobox');

carrinhobox.style.top = `-${carrinhobox.clientHeight}px`
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
        item.disabled = true;
        const id = parseInt(event.target.getAttribute('data-id'));
        const qtd = parseInt(event.target.getAttribute('data-qtd'));
        const produto = produtos.find(produto => produto.id === id);

        adicionarCarrinho(id, qtd, produto.nome, produto.preco);

        item.disabled = false;
    });
});

function adicionarCarrinho(id, qtd, nome, preco) {

    const produto = carrinho.findIndex(item => item.id === id);
    //console.log(carrinho[produto])
    if(produto !== -1){
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
    loadCart()
}

exibircarrinho.addEventListener('click', () => {
    carrinhobox.classList.toggle("mostrar-carrinho");
})

function loadCart(){
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const count_prod = document.getElementById('count_prod')
    const produtoscarrinho = document.getElementById('produtoscarrinho')
    count_prod.innerText = carrinho.length

    let contentProds = ""
    
    carrinho.forEach(item => {
    const itemProd = produtos.find(produto => produto.id === item.id);
    let totalItemPrice = (itemProd.preco) * (item.qtd)
    contentProds += `<div class="item-prod">`
    contentProds += `<div class="qtd-cart">${item.qtd}</div>`
    contentProds += `<div class="thumb"><img src="${itemProd.img}" alt=""></div>`
    contentProds += `<div class="infos">`
    contentProds += `<p>${itemProd.nome}</p>`
    contentProds += `</div>`
    contentProds += `<div class="price">${totalItemPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>`
    contentProds += `</div>`
    })
    produtoscarrinho.innerHTML = contentProds;



}
loadCart();

