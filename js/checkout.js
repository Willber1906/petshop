let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const carrinhobox = document.getElementById('carrinhobox')
let contentProds = ""
    if(carrinho.length){
        carrinho.forEach(item => {
        const itemProd = produtos.find(produto => produto.id === item.id);
        let totalItemPrice = (itemProd.preco) * (item.qtd)
            contentProds += `<div class="item">`
            contentProds += `<div class="qtd-prod">${item.id}</div>`
            contentProds += `<div class="thumb"><img src="${itemProd.img}" alt=""></div>`
            contentProds += `<div class="info">${itemProd.nome}</div>`
            contentProds += `<div class="subtotal">${totalItemPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>`
            contentProds += `</div>`
        })

        sum = carrinho.reduce(function(accumulator,object){ 
            let finalPrice = object.preco * object.qtd
            return accumulator + finalPrice
        },0); 
        sum = sum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        contentProds += `<div class="total">Total: ${sum}</div>`
    }
    else{
    contentProds += `<div class="item-prod empty-cart">Seu carrinho está vazio</div>`
    }
    carrinhobox.innerHTML = contentProds;
