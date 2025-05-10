// **Problema:** Implemente funções para adicionar itens, 
// remover itens e calcular o total de um carrinho de compras.

// **Como pensar:**

// 1. Desenhe um carrinho vazio
// 2. Que informações cada produto precisa ter?
// 3. Como calcular o total?

// **Complexidade esperada:** O(1) para adicionar/remover, O(n) para calcular total

const lista = [
    {
        cod: 1,
        item: "Escova",
        preco: 10.0
    },
    {
        cod: 1,
        item: "Pasta",
        preco: 5.0
    },
    {
        cod: 1,
        item: "Fio Dental",
        preco: 3.0
    }
]

const carrinho = []
let item = {}

function addItens(item) {
    carrinho.push(item)
    console.log("Carrinho após add:", carrinho);
}

// Remove um item do carrinho, encontrando pelo código
function removeItens(produto) {
    const idx = carrinho.findIndex(i => i.cod === produto.cod);
    if (idx > -1) {
        carrinho.splice(idx, 1);
    }
    console.log("Carrinho após remover:", carrinho);
}

function calculaValorTotal(carrinho) {
    return carrinho.reduce((acc, curr) => acc + curr.preco, 0);
}

addItens(lista[0])
addItens(lista[1])
addItens(lista[2])

removeItens(lista[2]);


console.log(calculaValorTotal(carrinho))

//usando Map()
class CarrinhoDeCompras {
    constructor() {
        this.items = new Map(); // Usando Map para O(1) em buscas
    }

    addItem(produto) {
        if (!produto?.cod || !produto?.preco) {
            throw new Error('Produto Inválido');
        }
        this.items.set(produto.cod, produto);
        return this.items.size;
    }

    removeItem(cod) {
        if (!this.items.has(cod)) {
            throw new Error('Produto não encontrado');
        }
        return this.items.delete(cod)
    }

    getTotal() {
        return Array.from(this.items.values())
            .reduce((total, item) => total + item.preco, 0);
    }

    getItems() {
        return Array.from(this.items.values())
    }
}

module.exports = { CarrinhoDeCompras };

// Exemplo de uso com todas as melhorias
const cart = new CarrinhoDeCompras();

try {
    cart.addItem({
        cod: 1,
        item: "Escova",
        preco: 10.0
    });
    console.log(`Total: R$ ${cart.getTotal().toFixed(2)}`);
} catch (error) {
    console.error('Erro ao manipular carrinho:', error.message);
}