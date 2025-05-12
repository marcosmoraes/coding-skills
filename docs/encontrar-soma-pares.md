# Encontrar Pares que Somam 10

Este algoritmo resolve o problema de encontrar todos os pares de números em um array que somam 10.

## Implementações

### 1. Força Bruta (O(n²))
A primeira implementação usa dois loops aninhados para testar todas as combinações possíveis de pares de números. É mais simples de entender, mas menos eficiente.

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

### 2. Usando Set (O(n))
A segunda implementação é mais eficiente, usando um Set para armazenar os números já vistos. A ideia é:

1. Para cada número que vemos, calculamos qual número precisamos para completar 10
2. Verificamos se já vimos esse número antes
3. Se já vimos, encontramos um par!

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

## Exemplo Prático

Vamos ver como funciona com o array `[1, 4, 6, 5, 9, 2, 8, 3, 7, 0]`:

1. Quando vemos o número 6:
   - Precisamos do 4 para completar 10 (10 - 6 = 4)
   - Já vimos o 4 antes
   - Encontramos o par [4, 6]

2. Quando vemos o número 5:
   - Precisamos do 5 para completar 10 (10 - 5 = 5)
   - Já vimos o 5 antes
   - Encontramos o par [5, 5]

## Complexidade

- Força Bruta: O(n²) - precisa testar todas as combinações possíveis
- Usando Set: O(n) - faz apenas uma passagem pelo array

## Uso

```javascript
const numbers = [1, 4, 6, 5, 9, 2, 8, 3, 7, 0];
console.log(findPairsSumTen(numbers));        // Força bruta
console.log(findPairsSumTenOptimized(numbers)); // Usando Set
``` 