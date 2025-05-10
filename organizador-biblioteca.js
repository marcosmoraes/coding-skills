// **Problema:** Faça uma função que recebe um array de livros (strings) e organize em ordem alfabética.

// **Como pensar:**

// 1. Desenhe vários livros em uma mesa
// 2. Como você organizaria manualmente?
// 3. Que comparações precisa fazer?

// **Complexidade esperada:** O(n log n) - devido à ordenação

function organizadorLivros(livros) {
    const livrosSorted = livros.sort((a, b) =>
        a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })
    );
    return livrosSorted;
}


let livros = ["os vencedores", "accelerate", "a vida é injusta", "passo pra viver", "riqueza é bom", "bíblia sagrada"]
console.log(organizadorLivros(livros));

//outra forma de locale com arrow function
function organizadorLivrosPT(livros) {
    return [...livros].sort((a, b) =>
        // 'pt-BR' e sensitivity: 'base' ignoram acentos e caixa
        a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })
    );
}

//se quiser manter uma cópia do array
function organizadorLivros(livros) {
    const copia = [...livros];//o spread ([...]) é a forma mais moderna e concisa.
    return copia.sort();
}

//usando cache
const cacheMap = new Map();

function ordenarLivros(livros) {
    // Gera uma chave única baseada no array de entrada
    const chave = livros.join('|');

    // Verifica se já temos esse array ordenado no cache
    if (cacheMap.has(chave)) {
        return cacheMap.get(chave);
    }

    // Se não estiver no cache, faz a ordenação
    const resultado = [...livros].sort();

    // Guarda no cache e retorna
    cacheMap.set(chave, resultado);
    return resultado;
}

module.exports = {
    organizadorLivros,
    organizadorLivrosPT,
    ordenarLivros,
    cacheMap
};

// Exemplos de uso
const livros1 = ['os vencedores', 'accelerate', 'a vida é injusta', 'passo pra viver', 'riqueza é bom', 'bíblia sagrada'];
console.log(ordenarLivros(livros1));
