const {
    organizadorLivros,
    organizadorLivrosPT,
    ordenarLivros,
    cacheMap
} = require('./organizador-biblioteca');

describe('Organizador de Biblioteca', () => {
    const livrosTeste = [
        "os vencedores",
        "accelerate",
        "a vida é injusta",
        "passo pra viver",
        "riqueza é bom",
        "bíblia sagrada"
    ];

    const livrosOrdenados = [
        "a vida é injusta",
        "accelerate",
        "bíblia sagrada",
        "os vencedores",
        "passo pra viver",
        "riqueza é bom"
    ];

    describe('organizadorLivros', () => {
        test('deve ordenar livros corretamente', () => {
            const resultado = organizadorLivros(livrosTeste);
            expect(resultado).toEqual(livrosOrdenados);
        });

        test('deve manter o array original intacto', () => {
            const livrosCopia = [...livrosTeste];
            organizadorLivros(livrosTeste);
            expect(livrosTeste).toEqual(livrosCopia);
        });

        test('deve lidar com array vazio', () => {
            expect(organizadorLivros([])).toEqual([]);
        });
    });

    describe('organizadorLivrosPT', () => {
        test('deve ordenar livros em português corretamente', () => {
            const resultado = organizadorLivrosPT(livrosTeste);
            expect(resultado).toEqual(livrosOrdenados);
        });

        test('deve ignorar acentos na ordenação', () => {
            const livrosComAcentos = [
                "água",
                "bala",
                "café",
                "dado"
            ];
            const resultado = organizadorLivrosPT(livrosComAcentos);
            expect(resultado).toEqual([
                "água",
                "bala",
                "café",
                "dado"
            ]);
        });

        test('deve ignorar maiúsculas e minúsculas', () => {
            const livrosMisturados = [
                "Água",
                "BALA",
                "café",
                "DADO"
            ];
            const resultado = organizadorLivrosPT(livrosMisturados);
            expect(resultado).toEqual([
                "Água",
                "BALA",
                "café",
                "DADO"
            ]);
        });
    });

    describe('ordenarLivros (com cache)', () => {
        beforeEach(() => {
            // Limpa o cache antes de cada teste
            cacheMap.clear();
        });

        test('deve ordenar livros corretamente', () => {
            const resultado = ordenarLivros(livrosTeste);
            expect(resultado).toEqual(livrosOrdenados);
        });

        test('deve usar cache para arrays idênticos', () => {
            const resultado1 = ordenarLivros(livrosTeste);
            const resultado2 = ordenarLivros([...livrosTeste]);
            
            // Verifica se o resultado é o mesmo
            expect(resultado1).toEqual(resultado2);
            
            // Verifica se o cache foi usado (mesmo array de referência)
            expect(resultado1).toBe(resultado2);
        });

        test('deve lidar com array vazio', () => {
            expect(ordenarLivros([])).toEqual([]);
        });

        test('deve manter o array original intacto', () => {
            const livrosCopia = [...livrosTeste];
            ordenarLivros(livrosTeste);
            expect(livrosTeste).toEqual(livrosCopia);
        });
    });
}); 