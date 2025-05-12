# Busca Binária

## O que é?
A busca binária é um algoritmo eficiente para encontrar um elemento em um array ordenado. É como procurar uma palavra no dicionário - você não olha página por página, mas abre no meio e vai dividindo o livro pela metade.

## Por que usar?
- **Eficiência**: O(log n) - muito mais rápido que busca linear O(n)
- **Ideal para**: Arrays grandes e ordenados
- **Quando usar**: Quando precisamos fazer muitas buscas em um array ordenado

## Como funciona?
1. Divide o array pela metade
2. Compara o elemento do meio com o que procuramos
3. Se for maior, procura na metade direita
4. Se for menor, procura na metade esquerda
5. Repete até encontrar ou esgotar as opções

## Exemplo Prático
```
Array: [1, 3, 5, 7, 9, 11, 13, 15]
Procurando por: 9

1. Primeira divisão:
   [1, 3, 5, 7, 9, 11, 13, 15]
   Meio = 7
   9 > 7, então vamos para direita

2. Segunda divisão:
   [9, 11, 13, 15]
   Meio = 11
   9 < 11, então vamos para esquerda

3. Terceira divisão:
   [9]
   Encontramos o 9!
```

## Implementação
```javascript
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

## Complexidade
- **Tempo**: O(log n)
  - A cada iteração, dividimos o array pela metade
  - Exemplo: 8 elementos → 4 → 2 → 1 (3 iterações)
  - log₂(8) = 3

- **Espaço**: O(1)
  - Usa apenas variáveis para controlar os índices

## Perguntas Comuns em Entrevistas

### 1. Por que a complexidade é O(log n)?
- A cada iteração, reduzimos o espaço de busca pela metade
- Se temos n elementos, precisamos de log₂(n) divisões
- Exemplo: 1000 elementos → log₂(1000) ≈ 10 iterações

### 2. E se o array tiver tamanho ímpar?
- Funciona igual! O `Math.floor()` garante um índice válido
- Exemplo: [1, 3, 5, 7, 9]
  - Meio = (0 + 4) / 2 = 2
  - nums[2] = 5

### 3. Posso usar for ao invés de while?
Sim! Duas formas de implementar:

```javascript
// Com while (mais comum)
while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // ... resto do código
}

// Com for
const maxIterations = Math.ceil(Math.log2(nums.length));
for (let i = 0; i < maxIterations; i++) {
    const mid = Math.floor((left + right) / 2);
    // ... resto do código
}
```

### 4. Quando usar busca binária vs busca linear?
- **Busca Binária**: 
  - Array ordenado
  - Array grande
  - Muitas buscas
  - Complexidade: O(log n)

- **Busca Linear**: 
  - Array pequeno
  - Array não ordenado
  - Busca única
  - Complexidade: O(n)

## Dicas para a Entrevista
1. **Sempre verifique**:
   - Se o array está ordenado
   - Se o array está vazio
   - Se o target existe

2. **Explique seu raciocínio**:
   - "Vou usar busca binária porque o array está ordenado"
   - "A complexidade é O(log n) porque dividimos pela metade a cada vez"

3. **Teste casos especiais**:
   - Array vazio
   - Target no início
   - Target no fim
   - Target não existe

4. **Pratique**:
   - Implemente sem olhar
   - Explique em voz alta
   - Faça testes de mesa

## Exercícios para Praticar
1. Encontrar o primeiro elemento maior que X
2. Encontrar o último elemento menor que X
3. Encontrar o elemento mais próximo de X
4. Verificar se um número é quadrado perfeito 