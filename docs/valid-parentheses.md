# Validação de Parênteses

## Problema
Dada uma string contendo apenas os caracteres '(', ')', '{', '}', '[' e ']', determine se a string de entrada é válida.

**Exemplos:**
- Input: "()" → Output: true
- Input: "()[]{}" → Output: true
- Input: "(]" → Output: false
- Input: "([)]" → Output: false
- Input: "{[]}" → Output: true

## Restrições
- 1 <= s.length <= 10^4
- s consiste apenas dos caracteres '()[]{}'

## Solução

### Abordagem
A solução utiliza uma pilha (stack) para rastrear os parênteses de abertura. A ideia é:
1. Quando encontramos um parêntese de abertura, o adicionamos à pilha
2. Quando encontramos um parêntese de fechamento, verificamos se ele corresponde ao último parêntese de abertura

### Implementação
```javascript
function isValid(s) {
    // Mapa para relacionar parênteses de fechamento com seus correspondentes de abertura
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Pilha para armazenar os parênteses de abertura
    const stack = [];
    
    // Percorre cada caractere da string
    for (let char of s) {
        // Se for um parêntese de abertura, adiciona à pilha
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // Se for um parêntese de fechamento
        else {
            // Se a pilha estiver vazia, não há parêntese de abertura correspondente
            if (stack.length === 0) return false;
            
            // Pega o último parêntese de abertura da pilha
            const lastOpen = stack.pop();
            
            // Verifica se o parêntese de fechamento corresponde ao último de abertura
            if (pairs[char] !== lastOpen) return false;
        }
    }
    
    // Se a pilha estiver vazia no final, todos os parênteses foram fechados corretamente
    return stack.length === 0;
}
```

### Explicação Detalhada

#### 1. Estrutura de Dados
- **pairs**: Um objeto que mapeia cada parêntese de fechamento para seu correspondente de abertura
  ```javascript
  const pairs = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  ```
- **stack**: Um array que funciona como pilha para armazenar os parênteses de abertura

#### 2. Algoritmo
Para cada caractere na string:
1. **Se for parêntese de abertura** (`(`, `{`, `[`):
   - Adiciona à pilha usando `push()`
   - Continua para o próximo caractere

2. **Se for parêntese de fechamento** (`)`, `}`, `]`):
   - Verifica se a pilha está vazia
     - Se estiver vazia → retorna `false` (não há parêntese de abertura correspondente)
   - Remove o último parêntese de abertura da pilha usando `pop()`
   - Verifica se o parêntese de fechamento corresponde ao de abertura
     - Se não corresponder → retorna `false`
     - Se corresponder → continua

3. **Ao final da string**:
   - Verifica se a pilha está vazia
     - Se estiver vazia → retorna `true` (todos os parênteses foram fechados corretamente)
     - Se não estiver vazia → retorna `false` (há parênteses não fechados)

### Teste de Mesa
Vamos analisar a string `"{[]}"`:

```
String: "{[]}"
Pilha inicial: []
pairs = { ')': '(', '}': '{', ']': '[' }

ITERAÇÃO 1: char = "{"
- É parêntese de abertura
- Pilha: ["{"]

ITERAÇÃO 2: char = "["
- É parêntese de abertura
- Pilha: ["{", "["]

ITERAÇÃO 3: char = "]"
- É parêntese de fechamento
- lastOpen = stack.pop() = "["
- pairs["]"] = "["
- "[" === "[" → continua
- Pilha: ["{"]

ITERAÇÃO 4: char = "}"
- É parêntese de fechamento
- lastOpen = stack.pop() = "{"
- pairs["}"] = "{"
- "{" === "{" → continua
- Pilha: []

FIM: Pilha vazia → return true
```

### Complexidade
- **Tempo**: O(n), onde n é o comprimento da string
  - Percorremos a string uma única vez
  - Operações de pilha (push/pop) são O(1)
- **Espaço**: O(n)
  - No pior caso, podemos ter todos os caracteres na pilha

### Casos de Teste
```javascript
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true
console.log(isValid(""));        // true
console.log(isValid("("));       // false
console.log(isValid(")"));       // false
```

### Vantagens da Solução
1. **Eficiência**: O(n) em tempo e espaço
2. **Simplicidade**: Fácil de entender e implementar
3. **Robustez**: Lida com todos os casos de erro possíveis
4. **Manutenibilidade**: Código limpo e bem documentado

### Dicas para Resolver
1. Pense em como você verificaria manualmente se uma expressão está balanceada
2. Use uma estrutura de dados que permita acompanhar a ordem dos parênteses
3. Considere o que acontece quando você encontra um parêntese de fechamento
4. Lembre-se que a ordem dos parênteses é importante 