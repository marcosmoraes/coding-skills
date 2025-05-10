// ### 1. Contador de Vagões 🚂

// **Problema:** Crie uma função que conta quantos números pares existem em um array.

// **Como pensar:**

// 1. Desenhe um trem com números em cada vagão
// 2. Marque os vagões com números pares
// 3. Conte quantas marcações você fez

// **Complexidade esperada:** O(n) - você precisa olhar cada número uma vez

// **Dúvida comum:** A contagem deve ser baseada nos *valores* dentro do array, não nos índices. 
// Por exemplo, em [1,2,3,4], temos 2 números pares (2 e 4), independente de suas posições.

// **Exemplo:** Para o array [7,12,3,8,5], a função deve retornar 2 (pois apenas 12 e 8 são pares)

// ###

function countador_vagoes() {
    const trem = [1, 5, 8, 2, 9, 13, 18, 43245,];
    const conta_pares = [];
    trem.forEach(element => {
        if (element % 2 == 0) {
            conta_pares.push(element);
        }
    });
    return conta_pares.length;
}

//**Análise da Sua Solução:**

// - ✅ **Funcionalidade**: A solução está correta e retorna o resultado esperado
// - ✅ **Complexidade**: O(n) - adequada para o problema
// - ⚠️ **Pontos de melhoria**:
//     - 1. O nome da função deveria seguir camelCase (contadorVagoes)
//     - 2. O array 'trem' poderia ser um parâmetro da função ao invés de hardcoded
//     - 3. Criar um array auxiliar (conta_pares) é desnecessário para apenas contar
function contadorVagoes(trem) {
    let count = 0;
    trem.array.forEach(element => {
        if (element % 2 === 0) count++
    });
    return count;
}

// **Por que é melhor?**

// 1. Usa menos memória (não cria array auxiliar)
// 2. É mais reutilizável (aceita qualquer array como input)
// 3. Segue convenções de nomenclatura JavaScript
// 4. Usa operador de igualdade estrita (===)

//     `Em JavaScript, existem duas formas de comparação:`

//     **`==** (igualdade solta/normal):`

//     - `Compara apenas o valor, fazendo conversão automática de tipos`
//     - `Ex: "5" == 5 retorna true`

//     **`===** (igualdade estrita):`

//     - `Compara valor e tipo de dado`
//     - `Ex: "5" === 5 retorna false`

//     `É recomendado usar === pois evita bugs inesperados causados pela conversão automática de tipos.`


// Em uma prova técnica, sua solução original provavelmente passaria nos testes básicos, 
// mas a versão otimizada demonstraria melhor domínio das boas práticas de programação. 🎯

// ###

//Outras soluções
// Solução 1: Usando forEach (sua solução)
function contadorVagoesForEach() {
    const trem = [1, 5, 8, 2, 9, 13, 18, 43245, 45678912];
    console.time('forEach');
    const t0 = performance.now();

    const conta_pares = [];
    trem.forEach(element => {
        if (element % 2 === 0) {
            conta_pares.push(element);
        }
    });

    const t1 = performance.now();
    console.timeEnd('forEach');
    console.log(`Tempo de execução usando forEach: ${t1 - t0} milliseconds`);
    return conta_pares.length;
}

//solução 2: Usando Filter
function contadorVagoesFilter() {
    const trem = [1, 5, 8, 2, 9, 13, 18, 43245, 45678912];
    console.time('filter');
    const t0 = performance.now();

    const numeroPares = trem.filter(num => num % 2 === 0).length;

    const t1 = performance.now();
    console.timeEnd('filter');
    console.log(`Tempo de execução usando Filter: ${t1 - t0} milliseconds`);
    return numeroPares;
}

//Solução usando o reduce
function contadorVagoesReduce() {
    const trem = [1, 5, 8, 2, 9, 13, 18, 43245, 45678912];
    console.time('reduce');
    const t0 = performance.now();

    const numeroPares = trem.reduce((acc, curr) =>
        curr % 2 === 0 ? acc + 1 : acc, 0);

    const t1 = performance.now();
    console.timeEnd('reduce');
    console.log(`Tempo de execução usando Reduce: ${t1 - t0} milliseconds`);
    return numeroPares;
}

// Solução 4: Usando for...of (mais moderno que for tradicional)
function contadorVagoesForOf() {
    const trem = [1, 5, 8, 2, 9, 13, 18, 43245, 45678912];
    console.time('forOf');
    const t0 = performance.now();

    let count = 0;
    for (const num of trem) {
        if (num % 2 === 0) count++;
    }

    const t1 = performance.now();
    console.timeEnd('forOf');
    console.log(`Tempo de execução usando ForOf: ${t1 - t0} milliseconds`);
    return count;
}

// Executando todas as soluções
console.log('forEach:', contadorVagoesForEach());
console.log('filter:', contadorVagoesFilter());
console.log('reduce:', contadorVagoesReduce());
console.log('forOf:', contadorVagoesForOf());

//Função para Comparar Performance:
const comparaPerformance = (funcoes) => {
    const resultados = [];

    funcoes.forEach((funcao, index) => {
        console.time(`Função ${index + 1}`);
        const t0 = performance.now();

        // Executa a função
        const resultado = funcao();

        const t1 = performance.now();
        console.timeEnd(`Função ${index + 1}`);

        resultados.push({
            indice: index + 1,
            tempo: t1 - t0,
            resultado: resultado
        });
    });

    // Ordena por tempo de execução
    resultados.sort((a, b) => a.tempo - b.tempo);

    console.log('\nResultados ordenados por performance:');
    resultados.forEach(r => {
        console.log(`Função ${r.indice}: ${r.tempo.toFixed(4)}ms`);
    });

    return `A função mais rápida foi a Função ${resultados[0].indice} 
            com tempo de ${resultados[0].tempo.toFixed(4)}ms`;
};

const resultado = comparaPerformance([
    contadorVagoesForEach,
    contadorVagoesFilter,
    contadorVagoesReduce,
    contadorVagoesForOf
]);

console.log(resultado)
