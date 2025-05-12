//**Problema:** Dado um array de números e um valor alvo (target), 
// encontre dois números no array que somam ao valor alvo.
// nums = [2, 7, 11, 15]
// target = 9
// Saída: [0, 1] // porque nums[0] + nums[1] = 2 + 7 = 9

// **Restrições:**
// - Cada input tem exatamente uma solução
// - Não pode usar o mesmo elemento duas vezes
// - Você pode retornar a resposta em qualquer ordem

// **Como pensar:**
// 1. Para cada número, você precisa encontrar seu complemento (target - número atual)
// 2. Use um hash map para armazenar números já vistos
// 3. Verifique se o complemento já existe no hash map

nums = [2, 7, 11, 15]
target = 9

function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // retorna índices
        }
        map.set(arr[i], i); // armazena o número e seu índice
    }
    return []; // caso não encontre
}

console.log(twoSum(nums, target))