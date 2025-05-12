// **Problem:** Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Input: "()"
// Output: true

// Input: "()[]{}"
// Output: true

// Input: "(]"
// Output: false

// Input: "([)]"
// Output: false

// Input: "{[]}"
// Output: true

// **Restrições:**

// - 1 <= s.length <= 10^4
// - s consiste apenas dos caracteres '()[]{}'

// **Dicas:**

// - Pense em como você verificaria manualmente se uma expressão está balanceada
// - Considere usar uma estrutura de dados que permita acompanhar a ordem dos parênteses
// - O que acontece quando você encontra um parêntese de fechamento?

// **Complexidade esperada:** O(n), onde n é o comprimento da string

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
            console.log(stack)
        }
        // Se for um parêntese de fechamento
        else {
            // Se a pilha estiver vazia, não há parêntese de abertura correspondente
            if (stack.length === 0) return false;

            // Pega o último parêntese de abertura da pilha
            const lastOpen = stack.pop();
            console.log(stack)

            // Verifica se o parêntese de fechamento corresponde ao último de abertura
            if (pairs[char] !== lastOpen) return false;
        }
    }

    // Se a pilha estiver vazia no final, todos os parênteses foram fechados corretamente
    return stack.length === 0;
}

// Testes
// console.log(isValid("()"));      // true
// console.log(isValid("()[]{}"));  // true
// console.log(isValid("(]"));      // false
// console.log(isValid("([)]"));    // false
 console.log(isValid("{[]}"));    // true
// console.log(isValid(""));        // true
// console.log(isValid("("));       // false
// console.log(isValid(")"));       // false
