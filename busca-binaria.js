// **Problema:** Implemente uma função que realize uma busca binária em um array ordenado de números.

// **Descrição:** Dado um array ordenado de números inteiros e um valor alvo, retorne o índice onde o valor alvo se encontra. 
// Se o valor não existir no array, retorne -1.

// **Input:**

// - nums: Um array ordenado de números inteiros
// - target: O número que você está procurando

// **Output:** O índice onde o número foi encontrado, ou -1 se não existir

// **Exemplo:**
// Input: nums = [1, 3, 5, 7, 9, 11, 13, 15], target = 9
// Output: 4

// Input: nums = [1, 3, 5, 7, 9, 11, 13, 15], target = 10
// Output: -1

// Input: nums = [1, 3, 5, 7, 9, 11, 13, 15], target = 1
// Output: 0
// **Restrições:**

// - 1 <= nums.length <= 10^4
// - -10^4 <= nums[i] <= 10^4
// - Todos os números em nums são únicos
// - nums está ordenado em ordem crescente

// **Dicas:**

// - Pense em como você procura uma palavra no dicionário - você não olha página por página
// - Use dois ponteiros (left e right) para marcar a região de busca
// - Compare o elemento do meio com o alvo para decidir qual metade do array examinar

// **Complexidade esperada:** O(log n), onde n é o tamanho do array

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Calcula o índice do meio
        const mid = Math.floor((left + right) / 2);

        // Se encontramos o target, retorna o índice
        if (nums[mid] === target) {
            return mid;
        }

        // Se o target é maior que o elemento do meio,
        // procuramos na metade direita
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // Se o target é menor que o elemento do meio,
            // procuramos na metade esquerda
            right = mid - 1;
        }
    }

    // Se não encontramos o target, retorna -1
    return -1;
}

// Implementação usando for (busca linear)
function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

// Implementação da busca binária usando for
function binarySearchWithFor(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    // O número máximo de iterações será log2(n)
    const maxIterations = Math.ceil(Math.log2(nums.length));
    
    for (let i = 0; i < maxIterations; i++) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        
        // Se left > right, o elemento não existe
        if (left > right) {
            return -1;
        }
    }
    
    return -1;
}

// Testes
console.log("Busca Binária (while):");
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 9));  // 4
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 10)); // -1
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 1));  // 0

console.log("\nBusca Linear (for):");
console.log(linearSearch([1, 3, 5, 7, 9, 11, 13, 15], 9));  // 4
console.log(linearSearch([1, 3, 5, 7, 9, 11, 13, 15], 10)); // -1
console.log(linearSearch([1, 3, 5, 7, 9, 11, 13, 15], 1));  // 0

console.log("\nBusca Binária (for):");
console.log(binarySearchWithFor([1, 3, 5, 7, 9, 11, 13, 15], 9));  // 4
console.log(binarySearchWithFor([1, 3, 5, 7, 9, 11, 13, 15], 10)); // -1
console.log(binarySearchWithFor([1, 3, 5, 7, 9, 11, 13, 15], 1));  // 0

nums = [1, 3, 5, 7, 9, 11, 13, 15], 
target = 9

