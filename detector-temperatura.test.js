const { 
    detectorTemperatura, 
    calculaMediaTemperatura, 
    detectorTemperaturaOtimizado 
} = require('./detector-temperatura');

describe('Detector de Temperatura', () => {
    describe('calculaMediaTemperatura', () => {
        test('deve calcular a média corretamente', () => {
            const temperaturas = [19, 21, 32, 28, 12, 30, 29];
            expect(calculaMediaTemperatura(temperaturas)).toBe(24.428571428571427);
        });

        test('deve retornar o próprio valor para array com um elemento', () => {
            const temperaturas = [25];
            expect(calculaMediaTemperatura(temperaturas)).toBe(25);
        });
    });

    describe('detectorTemperatura', () => {
        test('deve retornar array com temperaturas acima da média', () => {
            const temperaturas = [19, 21, 32, 28, 12, 30, 29];
            const resultado = detectorTemperatura(temperaturas);
            expect(resultado).toEqual([32, 28, 30, 29]);
        });

        test('deve retornar array vazio quando todas temperaturas são iguais', () => {
            const temperaturas = [25, 25, 25];
            expect(detectorTemperatura(temperaturas)).toEqual([]);
        });
    });

    describe('detectorTemperaturaOtimizado', () => {
        test('deve retornar quantidade correta de dias acima da média', () => {
            const temperaturas = [19, 21, 32, 28, 12, 30, 29];
            expect(detectorTemperaturaOtimizado(temperaturas)).toBe(4);
        });

        test('deve retornar 0 quando todas temperaturas são iguais', () => {
            const temperaturas = [25, 25, 25];
            expect(detectorTemperaturaOtimizado(temperaturas)).toBe(0);
        });

        test('deve lançar erro para input inválido (array vazio)', () => {
            expect(() => detectorTemperaturaOtimizado([])).toThrow('Input inválido');
        });

        test('deve lançar erro para input inválido (não array)', () => {
            expect(() => detectorTemperaturaOtimizado(null)).toThrow('Input inválido');
            expect(() => detectorTemperaturaOtimizado(undefined)).toThrow('Input inválido');
            expect(() => detectorTemperaturaOtimizado('não é um array')).toThrow('Input inválido');
        });
    });
}); 