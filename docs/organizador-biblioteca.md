# Organizador de Biblioteca

## Estruturas de Dados Utilizadas

### 1. Array
```javascript
const livros = ["os vencedores", "accelerate", "a vida é injusta", ...]
```

**Por que usar Array?**
- Estrutura ideal para ordenação de elementos
- Suporta método sort() nativo
- Permite fácil manipulação e transformação
- Mantém ordem dos elementos

**Complexidade das Operações:**
- Ordenação: O(n log n) - usando sort() nativo
- Acesso por índice: O(1)
- Inserção/remoção: O(n)

### 2. Map (Cache)
```javascript
const cacheMap = new Map();
```

**Por que usar Map para cache?**
- Armazena resultados de ordenações anteriores
- Evita reordenar arrays idênticos
- Operações O(1) para inserção e busca
- Chave única baseada no conteúdo do array

## Implementações

### 1. Versão Básica
```javascript
function organizadorLivros(livros) {
    const livrosSorted = livros.sort((a, b) =>
        a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })
    );
    return livrosSorted;
}
```

**Características:**
- Usa sort() com localeCompare
- Suporta ordenação em português
- Ignora acentos e case
- Complexidade: O(n log n)

### 2. Versão com Spread Operator
```javascript
function organizadorLivros(livros) {
    const copia = [...livros];
    return copia.sort();
}
```

**Características:**
- Cria cópia do array original
- Preserva array original
- Usa sort() padrão
- Complexidade: O(n log n)

### 3. Versão com Cache
```javascript
function ordenarLivros(livros) {
    const chave = livros.join('|');
    if (cacheMap.has(chave)) {
        return cacheMap.get(chave);
    }
    const resultado = [...livros].sort();
    cacheMap.set(chave, resultado);
    return resultado;
}
```

**Características:**
- Implementa cache de resultados
- Evita reordenar arrays idênticos
- Mantém imutabilidade do array original
- Complexidade: O(n log n) na primeira vez, O(1) para arrays idênticos

## Comparação das Implementações

### Versão Básica
- Mais simples
- Ordenação em português
- Modifica array original

### Versão com Spread
- Preserva array original
- Ordenação padrão
- Mais segura

### Versão com Cache
- Mais eficiente para arrays repetidos
- Preserva array original
- Usa mais memória

## Exemplo de Uso

```javascript
const livros = ['os vencedores', 'accelerate', 'a vida é injusta'];
console.log(ordenarLivros(livros));
```

## Vantagens da Implementação com Cache

1. **Performance**: Evita reordenar arrays idênticos
2. **Imutabilidade**: Não modifica arrays originais
3. **Flexibilidade**: Suporta diferentes tipos de ordenação
4. **Reutilização**: Cache de resultados anteriores 