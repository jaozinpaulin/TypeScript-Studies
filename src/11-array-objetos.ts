interface Filme {
    titulo: string;
    nota: number;
    assitido: boolean
}

const filmes: Filme[] = [

    {
        titulo: 'Her',
        nota: 9.6,
        assitido: true
    },
    {
        titulo: 'MIB',
        nota: 8.5,
        assitido: true
    },
    {
        titulo: 'Livro de Eli',
        nota: 8.4,
        assitido: true
    },
    {
        titulo: 'Vingadores',
        nota: 9.7,
        assitido: false
    },
    {
        titulo: 'Detetive pikachu',
        nota: 8,
        assitido: false
    },
]


console.log(filmes)