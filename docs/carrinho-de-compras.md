# Carrinho de Compras

## Estruturas de Dados Utilizadas

### 1. Map
```javascript
this.items = new Map();
```

**Por que usar Map?**
- O Map é uma estrutura de dados que armazena pares chave-valor
- Oferece operações O(1) para inserção, busca e remoção
- Mantém a ordem de inserção dos elementos
- Permite usar qualquer tipo como chave (neste caso, o código do produto)

**Complexidade das Operações:**
- Adicionar item: O(1)
- Remover item: O(1)
- Buscar item: O(1)
- Calcular total: O(n) - precisa iterar sobre todos os itens

### 2. Array
```javascript
Array.from(this.items.values())
```

**Por que usar Array?**
- Usado para converter os valores do Map em um array
- Necessário para operações como reduce() no cálculo do total
- Permite fácil iteração sobre os itens

## Implementação

### Classe CarrinhoDeCompras
```javascript
class CarrinhoDeCompras {
    constructor() {
        this.items = new Map();
    }
}
```

**Métodos Principais:**

1. `addItem(produto)`
   - Adiciona um produto ao carrinho
   - Valida se o produto tem código e preço
   - Complexidade: O(1)

2. `removeItem(cod)`
   - Remove um produto pelo código
   - Valida se o produto existe
   - Complexidade: O(1)

3. `getTotal()`
   - Calcula o total do carrinho
   - Usa reduce para somar os preços
   - Complexidade: O(n)

4. `getItems()`
   - Retorna todos os itens do carrinho
   - Converte Map para Array
   - Complexidade: O(n)

## Exemplo de Uso

```javascript
const cart = new CarrinhoDeCompras();
cart.addItem({
    cod: 1,
    item: "Escova",
    preco: 10.0
});
```

## Vantagens da Implementação

1. **Eficiência**: Operações principais são O(1)
2. **Validação**: Verifica dados inválidos
3. **Imutabilidade**: Não modifica o array original
4. **Cache**: Implementação com Map permite cache eficiente 