# Merge de Dois Arrays Ordenados

## O que é?
O problema consiste em combinar dois arrays ordenados em um único array ordenado, mantendo a ordem dos elementos.

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

### 1. Solução Simples (Não Otimizada)
```javascript
function twoMergedSorted(arr1, arr2){
    for (let index = 0; index < arr2.length; index++) {
        arr1.push(arr2[index])    
    }
    return arr1.sort()
}
```
**Problemas desta solução:**
- Modifica o array original
- Complexidade: O((n+m)log(n+m)) devido ao sort
- Não aproveita o fato dos arrays já estarem ordenados

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

**Vantagens desta solução:**
- Complexidade: O(n + m)
- Não modifica os arrays originais
- Aproveita o fato dos arrays já estarem ordenados
- Lida com todos os casos de borda

## Complexidade
- **Tempo**: O(n + m)
  - Onde n e m são os tamanhos dos arrays
  - Visitamos cada elemento exatamente uma vez
- **Espaço**: O(n + m)
  - Precisamos de um array auxiliar para o resultado

## Casos de Teste Importantes
```javascript
// Arrays vazios
mergeSortedArrays([], [1, 2, 3])  // [1, 2, 3]
mergeSortedArrays([1, 2, 3], [])  // [1, 2, 3]

// Elementos duplicados
mergeSortedArrays([1, 1, 1], [1, 1, 1])  // [1, 1, 1, 1, 1, 1]

// Números negativos
mergeSortedArrays([-5, -3, -1], [-4, -2, 0])  // [-5, -4, -3, -2, -1, 0]
```

## Variações Comuns em Entrevistas

### 1. Restrições de Espaço
- "Merge os arrays in-place (sem array auxiliar)"
- "Use apenas O(1) de espaço extra"

### 2. Variações de Dados
- Arrays com elementos duplicados
- Arrays com números negativos
- Arrays vazios
- Arrays de tamanhos diferentes

### 3. Extensões do Problema
- Merge de k arrays ordenados
- Merge mantendo a ordem original dos elementos
- Merge com remoção de duplicatas

### 4. Otimizações
- "Como melhorar a performance para arrays muito grandes?"
- "Como lidar com arrays que não cabem na memória?"

## Perguntas Típicas em Entrevistas

### 1. Sobre Complexidade
- "Qual a complexidade da sua solução?"
- "Como você pode otimizar?"
- "Qual o melhor caso? E o pior caso?"

### 2. Sobre Implementação
- "Por que usar two-pointer?"
- "Como lidar com arrays de tamanhos diferentes?"
- "Como garantir que a solução é estável?"

### 3. Sobre Casos de Borda
- "O que acontece com arrays vazios?"
- "E se houver elementos duplicados?"
- "Como tratar números negativos?"

## Dicas para a Entrevista

### 1. Antes de Codar
- Confirme os requisitos
- Pergunte sobre casos de borda
- Explique sua abordagem

### 2. Durante a Implementação
- Use nomes claros para variáveis
- Comente o código
- Teste casos de borda

### 3. Após a Implementação
- Explique a complexidade
- Sugira melhorias
- Discuta trade-offs

## Exercícios para Praticar

1. Implemente a solução in-place (sem array auxiliar)
2. Modifique a solução para remover duplicatas durante o merge
3. Implemente o merge de k arrays ordenados
4. Adicione validação de entrada (verificar se arrays estão ordenados)
5. Implemente uma versão que lida com arrays muito grandes (streaming) 