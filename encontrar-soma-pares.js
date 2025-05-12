//Imagine que você quer encontrar todos os pares de números que somam 10:

// O(n²) - Força bruta
function findPairsSumTen(arr) {
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

// O(n) - Usando Set/Hash
function findPairsSumTenOptimized(arr) {
    const pairs = [];
    const seen = new Set(); // como funciona o set? 


    for (let num of arr) {
        const complement = 10 - num;
        if (seen.has(complement)) { 
            // se o complemento já está no conjunto, significa que encontramos um par   
            // que soma 10
            pairs.push([complement, num]);
        }
        seen.add(num); // adiciona o número atual ao conjunto
    }

    return pairs;
}

// Exemplo de uso
const numbers = [1, 4, 6, 5, 9, 2, 8, 3, 7, 0];
console.log(findPairsSumTen(numbers));
console.log(findPairsSumTenOptimized(numbers));
