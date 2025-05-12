# Invertendo Strings em JavaScript

## Problema
Dada uma string como entrada, retorne a string ao contrário (invertida).

**Exemplo:**
- Input: "hello" → Output: "olleh"
- Input: "mundo" → Output: "odnum"

## Restrições
- 1 <= s.length <= 10^5
- s consiste de caracteres ASCII printáveis

## Racional das Soluções

### 1. Usando concatenação manual (O(n))
Percorre a string de trás para frente, concatenando cada caractere em uma nova string.

```js
function reverseStringConcat(word){
    const arr = word.split("")
    let element = ""
    for (let index = arr.length - 1; index >= 0; index--) {
        element = element.concat(arr[index]);
    }
    return element;
}
```
**Vantagens:**
- Simples de entender
- Não modifica o array original

**Desvantagens:**
- Pode ser menos eficiente em grandes strings devido à imutabilidade das strings em JS

---

### 2. Usando array e join (O(n))
Percorre a string de trás para frente, empilhando cada caractere em um array, e depois junta tudo em uma string.

```js
function reverseStringArray(word) {
    const arr = word.split("");
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result.join("");
}
```
**Vantagens:**
- Mais eficiente que concatenação direta para strings grandes
- Simples de implementar

**Desvantagens:**
- Usa espaço extra para o array

---

### 3. Usando métodos built-in (O(n))
A forma mais concisa, usando os métodos nativos do JavaScript: split, reverse e join.

```js
function reverseStringBuiltIn(word) {
    return word.split("").reverse().join("");
}
```
**Vantagens:**
- Muito conciso e legível
- Ideal para uso rápido e scripts pequenos

**Desvantagens:**
- Cria múltiplos arrays temporários
- Pode ser menos eficiente em termos de memória para strings muito grandes

---

### 4. Usando dois ponteiros (O(n))
Converte a string em array, e troca os caracteres das extremidades para o centro, invertendo "in-place".

```js
function reverseString(word) {
    const arr = word.split("");
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join("");
}
```
**Vantagens:**
- Mais eficiente em memória (troca in-place)
- Boa escolha para strings grandes

**Desvantagens:**
- Um pouco mais verboso
- Precisa converter para array e depois juntar novamente

---

## Complexidade
- Todas as soluções têm complexidade O(n), pois é necessário percorrer todos os caracteres da string.
- Não é possível inverter uma string em menos que O(n), pois cada caractere precisa ser lido pelo menos uma vez.

## Conclusão
A escolha da abordagem depende do contexto:
- Para scripts rápidos e legibilidade, use a solução built-in.
- Para grandes volumes de dados, prefira a abordagem dos dois ponteiros.
- Para fins didáticos, todas as soluções são válidas e mostram diferentes formas de manipular strings em JavaScript. 