enum Genero {
    Romance = 'Romance',
    Acao = 'Acao',
    Drama = 'Drama',
    Comedia = 'Comedia'
}

type Status = "Em andamento" | "Finalizado" | "Pausado";

interface Filme {
    titulo: string;
    nota: number;
    genero: Genero;
    status: Status;
}

const her: Filme = {
    titulo: 'Her',
    nota: 9.6,
    genero: Genero.Romance,
    status: "Finalizado"
}

const mib: Filme = {
    titulo: 'MIB',
    nota: 8.8,
    genero: Genero.Comedia,
    status: "Finalizado"
}

const titanic: Filme = {
    titulo: 'Titanic',
    nota: 9.7,
    genero: Genero.Romance,
    status: "Pausado"
}



const mostrarFilmes = (filme: Filme): void => {
    console.log(`Titulo: ${filme.titulo}`)
    console.log(`Nota: ${filme.nota}`)
    console.log(`Genero: ${filme.genero}`)
    console.log(`Estado: ${filme.status}`)
}

mostrarFilmes(her)
mostrarFilmes(mib)
mostrarFilmes(titanic)


