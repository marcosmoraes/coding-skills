# Detector de Temperatura

## Estruturas de Dados Utilizadas

### 1. Array
```javascript
const temperaturas = [19, 21, 32, 28, 12, 30, 29]
```

**Por que usar Array?**
- Estrutura simples para armazenar sequência de valores
- Permite acesso direto aos elementos por índice
- Suporta métodos de iteração como forEach, reduce, filter
- Ideal para processamento sequencial de dados

**Complexidade das Operações:**
- Acesso por índice: O(1)
- Iteração completa: O(n)
- Busca: O(n)

## Implementações

### 1. Versão Básica
```javascript
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
```

**Características:**
- Usa forEach para iteração
- Cria novo array para resultados
- Complexidade: O(n) - duas passagens pelo array

### 2. Versão Otimizada
```javascript
function detectorTemperaturaOtimizado(temperaturas) {
    if (!Array.isArray(temperaturas) || temperaturas.length === 0) {
        throw new Error('Input inválido');
    }
    const media = temperaturas.reduce((sum, temp) => sum + temp, 0) / temperaturas.length
    return temperaturas.filter(temp => temp > media).length;
}
```

**Características:**
- Usa reduce para calcular média
- Usa filter para contar temperaturas acima da média
- Inclui validação de input
- Complexidade: O(n) - uma única passagem para cada operação

## Comparação das Implementações

### Versão Básica
- Mais verbosa
- Duas passagens pelo array
- Retorna array com temperaturas

### Versão Otimizada
- Mais concisa
- Usa métodos funcionais
- Retorna apenas a contagem
- Inclui validação de input

## Exemplo de Uso

```javascript
const temperaturas = [19, 21, 32, 28, 12, 30, 29];
console.log(detectorTemperaturaOtimizado(temperaturas)); // 4
```

## Vantagens da Implementação Otimizada

1. **Validação**: Verifica input inválido
2. **Eficiência**: Usa métodos nativos do JavaScript
3. **Legibilidade**: Código mais limpo e expressivo
4. **Manutenibilidade**: Mais fácil de modificar e estender 