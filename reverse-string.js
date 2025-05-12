// **Problema:** Dada uma string como entrada, retorne a string ao contrário (invertida).
// Input: s = "hello"
// Output: "olleh"

// Input: s = "mundo"
// Output: "odnum"

// **Restrições:**

// - 1 <= s.length <= 10^5
// - s consiste de caracteres ASCII printáveis

// **Como pensar:**

// 1. Considere como você escreveria uma palavra ao contrário no papel
// 2. Pense nas diferentes formas de percorrer uma string em JavaScript
// 3. Considere se você precisa de espaço extra ou pode fazer in-place

// **Complexidade esperada:** O(n), onde n é o comprimento da string

// **Dica:** JavaScript tem diferentes métodos built-in para manipular strings. Considere quais seriam mais eficientes para este caso.

// Solução 1: Usando concat (O(n))
function reverseStringConcat(word){
    const arr = word.split("")
    let element = ""
    for (let index = arr.length - 1; index >= 0; index--) {
        element = element.concat(arr[index]);
    }
    return element;
}

// Solução 2: Usando array e join (O(n))
function reverseStringArray(word) {
    const arr = word.split("");
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result.join("");
}

// Solução 3: Usando métodos built-in (O(n))
function reverseStringBuiltIn(word) {
    return word.split("").reverse().join("");
}

// Solução 4: Usando dois ponteiros (O(n)) - Mais eficiente em memória
function reverseString(word) {
    const arr = word.split("");
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Troca os caracteres
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr.join("");
}

// Testando todas as soluções
console.log("Solução concat:", reverseStringConcat("marcos"));
console.log("Solução array:", reverseStringArray("marcos"));
console.log("Solução built-in:", reverseStringBuiltIn("marcos"));
console.log("Solução dois ponteiros:", reverseString("marcos"));