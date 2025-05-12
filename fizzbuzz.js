// **Problema:** Escreva uma função que recebe um número n e imprime todos os números de 1 até n, mas:

// - Para múltiplos de 3, imprima "Fizz" ao invés do número
// - Para múltiplos de 5, imprima "Buzz" ao invés do número
// - Para números que são múltiplos de both 3 e 5, imprima "FizzBuzz"

// **Exemplo:** Para n = 15, a saída deve ser:
// **Complexidade esperada:** O(n) - você precisa verificar cada número uma vez
// **Dica:** Pense na ordem das condições! Verificar FizzBuzz primeiro pode evitar código duplicado.


function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
}

function fizzBuzzContatenado(num) {
    for (let i = 1; i <= num; i++) {
        let result = '';
        if (i % 3 === 0) result += 'Fizz';
        if (i % 5 === 0) result += 'Buzz';
        console.log(result || i);
    }
}

function fizzBuzzArrayDeclarativo(num) {
    return Array.from({length: num}, (_, i) => {
        i++;
        return (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
    });
}

fizzBuzz(15);