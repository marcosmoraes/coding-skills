# Merge de Arrays Ordenados

## Problema
Dado dois arrays ordenados em ordem crescente, combine-os em um único array ordenado.

## Exemplos
```javascript
Input: 
array1 = [1, 3, 5, 7]
array2 = [2, 4, 6, 8]
Output: [1, 2, 3, 4, 5, 6, 7, 8]

Input:
array1 = [1, 2, 3, 8, 9]
array2 = [4, 5, 6, 7]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Implementações

### 1. Solução Não Otimizada
```javascript
function twoMergedSorted(arr1, arr2){
    for (let index = 0; index < arr2.length; index++) {
        arr1.push(arr2[index])    
    }
    return arr1.sort()
}
```
- **Complexidade de Tempo**: O((n + m) log(n + m)) devido ao uso do sort()
- **Complexidade de Espaço**: O(1) pois modifica o array original
- **Observações**: 
  - Modifica o array original
  - Usa sort() que é menos eficiente
  - Não é a solução ideal para entrevistas

### 2. Solução Otimizada (Two-Pointer)
```javascript
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0; // ponteiro para arr1
    let j = 0; // ponteiro para arr2

    // Compara elementos e adiciona o menor
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Adiciona elementos restantes de arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Adiciona elementos restantes de arr2
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}
```
- **Complexidade de Tempo**: O(n + m)
- **Complexidade de Espaço**: O(n + m)
- **Vantagens**:
  - Mantém a ordem dos arrays originais
  - Não modifica os arrays de entrada
  - Mais eficiente que a solução com sort()

## Teste de Mesa
Vamos analisar o funcionamento da solução otimizada com o exemplo:
```javascript
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]
```

### Iteração 1:
- i = 0, j = 0
- arr1[0] = 1, arr2[0] = 2
- 1 ≤ 2? Sim
- result = [1]
- i = 1

### Iteração 2:
- i = 1, j = 0
- arr1[1] = 3, arr2[0] = 2
- 3 ≤ 2? Não
- result = [1, 2]
- j = 1

### Iteração 3:
- i = 1, j = 1
- arr1[1] = 3, arr2[1] = 4
- 3 ≤ 4? Sim
- result = [1, 2, 3]
- i = 2

### Iteração 4:
- i = 2, j = 1
- arr1[2] = 5, arr2[1] = 4
- 5 ≤ 4? Não
- result = [1, 2, 3, 4]
- j = 2

### Iteração 5:
- i = 2, j = 2
- arr1[2] = 5, arr2[2] = 6
- 5 ≤ 6? Sim
- result = [1, 2, 3, 4, 5]
- i = 3

### Iteração 6:
- i = 3, j = 2
- arr1[3] = 7, arr2[2] = 6
- 7 ≤ 6? Não
- result = [1, 2, 3, 4, 5, 6]
- j = 3

### Iteração 7:
- i = 3, j = 3
- arr1[3] = 7, arr2[3] = 8
- 7 ≤ 8? Sim
- result = [1, 2, 3, 4, 5, 6, 7]
- i = 4

### Iteração 8:
- i = 4 (fim de arr1), j = 3
- Adiciona elementos restantes de arr2
- result = [1, 2, 3, 4, 5, 6, 7, 8]

## Casos de Teste Importantes
1. Arrays vazios
2. Arrays de tamanhos diferentes
3. Arrays com elementos duplicados
4. Arrays com números negativos
5. Arrays com um único elemento

## Variações Comuns em Entrevistas
1. Merge k arrays ordenados
2. Merge in-place (sem array auxiliar)
3. Merge com remoção de duplicatas
4. Merge com condição específica de ordenação

## Perguntas Típicas em Entrevistas
1. Qual a complexidade de tempo e espaço da sua solução?
2. Como você lidaria com arrays de tamanhos muito diferentes?
3. Como você otimizaria a solução para arrays muito grandes?
4. Como você testaria sua solução?
5. Como você lidaria com arrays que não estão ordenados?

## Dicas para Entrevistas
1. Comece com a solução mais simples e depois otimize
2. Explique seu raciocínio passo a passo
3. Considere casos de borda
4. Teste sua solução com diferentes inputs
5. Discuta trade-offs entre diferentes abordagens

## Exercícios para Praticar
1. Implemente a solução in-place
2. Implemente a solução com remoção de duplicatas
3. Implemente a solução para k arrays ordenados
4. Implemente a solução com ordenação personalizada
5. Implemente a solução com validação de entrada 