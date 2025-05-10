const { CarrinhoDeCompras } = require('./carrinho-de-compras');

describe('CarrinhoDeCompras', () => {
    let carrinho;

    beforeEach(() => {
        carrinho = new CarrinhoDeCompras();
    });

    describe('addItem', () => {
        test('deve adicionar um item válido ao carrinho', () => {
            const produto = {
                cod: 1,
                item: "Escova",
                preco: 10.0
            };

            carrinho.addItem(produto);
            expect(carrinho.getItems()).toHaveLength(1);
            expect(carrinho.getItems()[0]).toEqual(produto);
        });

        test('deve lançar erro ao adicionar produto inválido', () => {
            const produtoInvalido = {
                item: "Produto sem código",
                preco: 10.0
            };

            expect(() => carrinho.addItem(produtoInvalido)).toThrow('Produto Inválido');
        });
    });

    describe('removeItem', () => {
        test('deve remover um item existente do carrinho', () => {
            const produto = {
                cod: 1,
                item: "Escova",
                preco: 10.0
            };

            carrinho.addItem(produto);
            carrinho.removeItem(1);
            expect(carrinho.getItems()).toHaveLength(0);
        });

        test('deve lançar erro ao tentar remover item inexistente', () => {
            expect(() => carrinho.removeItem(999)).toThrow('Produto não encontrado');
        });
    });

    describe('getTotal', () => {
        test('deve calcular o total corretamente com múltiplos itens', () => {
            const produtos = [
                { cod: 1, item: "Escova", preco: 10.0 },
                { cod: 2, item: "Pasta", preco: 5.0 },
                { cod: 3, item: "Fio Dental", preco: 3.0 }
            ];

            produtos.forEach(produto => carrinho.addItem(produto));
            expect(carrinho.getTotal()).toBe(18.0);
        });

        test('deve retornar 0 para carrinho vazio', () => {
            expect(carrinho.getTotal()).toBe(0);
        });
    });
}); 