// **Problema:** Crie uma função que recebe um array de temperaturas 
// da semana e retorna quantos dias ficaram acima da média.

// **Como pensar:**

// 1. Desenhe um gráfico com as temperaturas
// 2. Calcule a média primeiro
// 3. Compare cada dia com a média

// **Complexidade esperada:** O(n) - precisa passar pelos dados duas vezes

// ###

const temperaturas = [19, 21, 32, 28, 12, 30, 29]

function detectorTemperatura(temperaturas) {
    let temperaturasAcimaDaMedia = []
    let media = calculaMediaTemperatura(temperaturas)
    temperaturas.forEach(element => {
        if (element > media) {
            temperaturasAcimaDaMedia.push(element)
        }
    });
    return temperaturasAcimaDaMedia
}

function calculaMediaTemperatura(temperaturas) {
    let somaTemperatura = 0
    temperaturas.forEach(element => {
        somaTemperatura += element
    });
    return somaTemperatura / temperaturas.length
}

function detectorTemperaturaOtimizado(temperaturas) {
    if (!Array.isArray(temperaturas) || temperaturas.length === 0) {
        throw new Error('Input inválido');
    }
    const media = temperaturas.reduce((sum, temp) => sum + temp, 0) / temperaturas.length
    return temperaturas.filter(temp => temp > media).length; //retorna a qtd de dias
}

module.exports = {
    detectorTemperatura,
    calculaMediaTemperatura,
    detectorTemperaturaOtimizado
};

// Exemplos de uso
console.log(`Média das temperaturas ${calculaMediaTemperatura(temperaturas).toFixed(1)}`)
console.log(detectorTemperatura(temperaturas))
console.log(detectorTemperaturaOtimizado(temperaturas))