// 2. **Merge Two Sorted Arrays**
//     - *Nível*: Média
//     - *Estratégia*: two-pointer → O(n + m)
    
//     **Problema:** Dado dois arrays ordenados em ordem crescente, combine-os em um único array ordenado.
    
//     **Input:**
    
//     - array1: Um array ordenado de números inteiros
//     - array2: Um array ordenado de números inteiros
    
//     **Output:** Um novo array ordenado contendo todos os elementos de array1 e array2
    
//     **Exemplo:**
    
//     ```jsx
//     Input: 
//     array1 = [1, 3, 5, 7]
//     array2 = [2, 4, 6, 8]
    
//     Output: [1, 2, 3, 4, 5, 6, 7, 8]
    
//     Input:
//     array1 = [1, 2, 3, 8, 9]
//     array2 = [4, 5, 6, 7]
    
//     Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     ```
    
const array1 = [1, 3, 5, 7]
const array2 = [2, 4, 6, 8]

// Solução original (não otimizada)
function twoMergedSorted(arr1, arr2){
    for (let index = 0; index < arr2.length; index++) {
        arr1.push(arr2[index])    
    }
    return arr1.sort()
}

// Solução otimizada usando two-pointer
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

// Testes
console.log("Solução original:");
console.log(twoMergedSorted([1, 3, 5, 7], [2, 4, 6, 8]));  // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(twoMergedSorted([1, 2, 3, 8, 9], [4, 5, 6, 7]));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("\nSolução otimizada:");
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));  // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSortedArrays([1, 2, 3, 8, 9], [4, 5, 6, 7]));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Casos de teste adicionais
console.log("\nCasos de teste adicionais:");
console.log(mergeSortedArrays([], [1, 2, 3]));  // [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], []));  // [1, 2, 3]
console.log(mergeSortedArrays([1, 1, 1], [1, 1, 1]));  // [1, 1, 1, 1, 1, 1]
console.log(mergeSortedArrays([-5, -3, -1], [-4, -2, 0]));  // [-5, -4, -3, -2, -1, 0]