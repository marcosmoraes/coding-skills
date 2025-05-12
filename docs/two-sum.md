# Two Sum - Análise e Implementação

## Problema
Dado um array de números e um valor alvo (target), encontre dois números no array que somam ao valor alvo.

**Exemplo:**
```javascript
nums = [2, 7, 11, 15]
target = 9
// Saída: [0, 1] // porque nums[0] + nums[1] = 2 + 7 = 9
```

**Restrições:**
- Cada input tem exatamente uma solução
- Não pode usar o mesmo elemento duas vezes
- Você pode retornar a resposta em qualquer ordem

## Implementações

### 1. Força Bruta (O(n²))
```javascript
function twoSumBruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
```

### 2. Otimizada com Map (O(n))
```javascript
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [];
}
```

## Análise de Complexidade

### Método Força Bruta (O(n²))
- Usa dois loops aninhados
- Para cada número, compara com todos os outros números
- Complexidade de tempo: O(n²)
- Complexidade de espaço: O(1)

### Método com Map (O(n))
- Usa um único loop
- Armazena números já vistos em um Map
- Complexidade de tempo: O(n)
- Complexidade de espaço: O(n)

## Por que usar Map?

1. **Busca Eficiente**
   - O Map permite buscas em O(1)
   - Operações `set()` e `get()` são constantes
   - Muito mais rápido que buscar em um array

2. **Armazenamento de Pares Chave-Valor**
   - Permite armazenar o número e seu índice
   - Facilita a recuperação do índice quando encontramos um par

3. **Evita Duplicação**
   - Cada número é armazenado apenas uma vez
   - Garante que não usaremos o mesmo elemento duas vezes

## Exemplo de Execução

Vamos analisar o funcionamento com o array `[2, 7, 11, 15]` e target `9`:

| Iteração | i | num | complement | map | Ação |
|----------|---|-----|------------|-----|------|
| 1 | 0 | 2 | 7 | {} | Adiciona {2: 0} |
| 2 | 1 | 7 | 2 | {2: 0} | Encontra par! Retorna [0, 1] |

## Comparação de Performance

### Método Força Bruta
- Precisa fazer n * (n-1) / 2 comparações
- Para array de 1000 elementos: ~500.000 comparações
- Ineficiente para arrays grandes

### Método com Map
- Precisa fazer apenas n iterações
- Para array de 1000 elementos: 1000 iterações
- Muito mais eficiente para arrays grandes

## Dicas de Implementação

1. **Uso do Map**
   - Use `Map` em vez de objeto para melhor performance
   - O Map é mais eficiente para operações de inserção e busca

2. **Tratamento de Casos Especiais**
   - Considere números negativos
   - Verifique se o array está vazio
   - Trate casos onde não há solução

3. **Otimizações**
   - Armazene o complemento em uma variável para evitar recálculos
   - Use `const` para valores que não mudam
   - Considere usar `for...of` se não precisar do índice

## Conclusão

O uso do Map é crucial para otimizar a solução do Two Sum, reduzindo a complexidade de O(n²) para O(n). Esta é uma excelente demonstração de como a escolha da estrutura de dados correta pode impactar significativamente a performance de um algoritmo. 

## Trade-off de Espaço vs. Tempo em Two Sum

- A solução força bruta (O(n²)) não usa memória extra, mas é mais lenta
- A solução com Map (O(n)) é mais rápida, mas usa O(n) de memória extra

**Exemplo prático:**

- Para array pequeno [2,7,11,15]: diferença de performance é mínima
- Para array grande [1...1000000]: solução Map é muito mais rápida, mas usa mais memória

**Situações onde o consumo de memória do Map pode ser problemático:**

- Em sistemas embarcados ou dispositivos com memória limitada (IoT, por exemplo)
- Quando processando múltiplos arrays grandes simultaneamente em memória
- Em aplicações serverless com limites rigorosos de memória

**Soluções alternativas para estes casos:**

- Processar o array em chunks menores
- Implementar uma solução in-place (modificando o array original)
- Usar força bruta quando o dataset for pequeno o suficiente para não impactar performance

**Quando escolher cada abordagem:**

- Use força bruta se memória for extremamente limitada
- Use Map se performance for prioridade (caso mais comum) 