# Encontrar Pares que Somam 10

## Problema
Encontrar todos os pares de números em um array que somam 10.

## Implementações

### 1. Força Bruta (O(n²))
```javascript
function findPairsSumTen(arr) {
    const pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    
    return pairs;
}
```

### 2. Otimizada com Set (O(n))
```javascript
function findPairsSumTenOptimized(arr) {
    const pairs = [];
    const seen = new Set();
    
    for (let num of arr) {
        const complement = 10 - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }
    
    return pairs;
}
```

## Explicação Intuitiva

`Vamos imaginar que você está brincando de encontrar pares de números que somam 10! É como se você tivesse um monte de cartas com números.`

`Para cada número que você pega (isso é o 'for (let num of arr)'), você faz assim:`

1. `Pensa: "Qual número eu preciso para chegar em 10?" Por exemplo, se você pegou o número 7, você precisa o 3 para chegar em 10. Isso é o que 'complement = 10 - num' faz`
2. `Olha na sua memória (isso é o 'seen') se você já viu esse número que falta antes`
3. `Se você já viu, oba! Você achou um par! Guarda esse par numa lista (isso é o 'pairs.push')`
4. `Não esquece de guardar na sua memória o número que você acabou de ver (isso é o 'seen.add')`

`É como se você tivesse uma caixinha mágica (seen) onde guarda todos os números que já viu. Cada vez que pega um número novo, você rapidinho consegue ver se o número que precisa já está na caixinha!`

## Explicação do Racional do Complemento

A verificação da soma igual a 10 acontece de forma indireta através do cálculo do `complement`. Vamos analisar o código:

```javascript
const complement = 10 - num;
if (seen.has(complement)) {
    pairs.push([complement, num]);
}
```

Quando encontramos um par onde `seen.has(complement)` é verdadeiro, significa que:
1. `complement` é um número que já vimos antes
2. `num` é o número atual
3. E o mais importante: `complement + num = 10`

Isso acontece porque:
- `complement = 10 - num`
- Então, se `complement + num = (10 - num) + num = 10`

Vamos ver um exemplo prático com o array `[1, 4, 6, 5, 9, 2, 8, 3, 7, 0]`:

1. Quando `num = 6`:
   - `complement = 10 - 6 = 4`
   - `seen.has(4)` é verdadeiro porque 4 já está no Set
   - Então `pairs.push([4, 6])`
   - Porque 4 + 6 = 10

2. Quando `num = 5`:
   - `complement = 10 - 5 = 5`
   - `seen.has(5)` é verdadeiro porque 5 já está no Set
   - Então `pairs.push([5, 5])`
   - Porque 5 + 5 = 10

A diferença entre este algoritmo e o primeiro (força bruta) é que:
- O primeiro algoritmo verifica explicitamente `if (arr[i] + arr[j] === 10)`
- O segundo algoritmo verifica implicitamente através do complemento: se um número e seu complemento (que soma 10) já foram vistos, então temos um par válido

Ambos fazem a mesma coisa, mas o segundo é mais eficiente porque usa o Set para fazer buscas em O(1) em vez de usar dois loops aninhados.

## Análise de Complexidade

### Método Otimizado (O(n))

Vamos fazer um teste de mesa com o método otimizado usando o array [7, 3, 4, 6, 5]:

| Iteração | num | complement | seen | pairs |
| --- | --- | --- | --- | --- |
| 1 | 7 | 3 | {7} | [] |
| 2 | 3 | 7 | {7,3} | [[3,7]] |
| 3 | 4 | 6 | {7,3,4} | [[3,7]] |
| 4 | 6 | 4 | {7,3,4,6} | [[3,7],[4,6]] |
| 5 | 5 | 5 | {7,3,4,6,5} | [[3,7],[4,6]] |

Explicação passo a passo:

1. Primeiro número (7): procura 3 no set (vazio), adiciona 7 ao set
2. Segundo número (3): procura 7 no set (encontra!), adiciona par [3,7], adiciona 3 ao set
3. Terceiro número (4): procura 6 no set (não encontra), adiciona 4 ao set
4. Quarto número (6): procura 4 no set (encontra!), adiciona par [4,6], adiciona 6 ao set
5. Quinto número (5): procura 5 no set (não encontra), adiciona 5 ao set

Resultado final: dois pares que somam 10 foram encontrados: [3,7] e [4,6]

### Método Força Bruta (O(n²))

A primeira solução tem complexidade **O(n²)** porque:

- Para cada número no array (n iterações)
- Precisamos comparar com todos os outros números restantes (n-1 iterações)
- Isso resulta em aproximadamente n * n operações

Vamos fazer um teste de mesa com o método força bruta usando o mesmo array [7, 3, 4, 6, 5]:

| i | j | arr[i] | arr[j] | Soma | pairs |
| --- | --- | --- | --- | --- | --- |
| 0 | 1 | 7 | 3 | 10 | [[7,3]] |
| 0 | 2 | 7 | 4 | 11 | [[7,3]] |
| 0 | 3 | 7 | 6 | 13 | [[7,3]] |
| 0 | 4 | 7 | 5 | 12 | [[7,3]] |
| 1 | 2 | 3 | 4 | 7 | [[7,3]] |
| 1 | 3 | 3 | 6 | 9 | [[7,3]] |
| 1 | 4 | 3 | 5 | 8 | [[7,3]] |
| 2 | 3 | 4 | 6 | 10 | [[7,3],[4,6]] |
| 2 | 4 | 4 | 5 | 9 | [[7,3],[4,6]] |
| 3 | 4 | 6 | 5 | 11 | [[7,3],[4,6]] |

Observe que:

- Precisamos fazer 10 comparações no total (n * (n-1) / 2)
- Cada número é comparado com todos os números que vêm depois dele
- Encontramos os mesmos pares [7,3] e [4,6], mas com muito mais comparações

## Comparação das Implementações

### Método Otimizado (O(n))
- Usa um Set para armazenar números já vistos
- Percorre o array apenas uma vez
- Operações de Set (add/has) são O(1)
- Muito mais eficiente para arrays grandes

### Método Força Bruta (O(n²))
- Compara cada número com todos os outros
- Não usa estrutura de dados adicional
- Mais simples de entender
- Muito menos eficiente para arrays grandes

## Conclusão

Esta é uma excelente demonstração de como podemos melhorar a eficiência de um algoritmo usando estruturas de dados adequadas! A versão otimizada com Set é significativamente mais rápida, especialmente para arrays grandes, pois reduz a complexidade de O(n²) para O(n). 