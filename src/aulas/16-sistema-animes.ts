
// type Generos = "Drama" | "Acao" | "Romance";
type Status = "Em andamento" | "Assitido" | "Finalizado"

interface Anime {
    id: number | string;
    nome: string;
    favorito: boolean;
    genero: string;
    status: Status;
    lore?: string;
}


const animes: Anime[] = [
    {
        id: 1,
        nome: "Naruto",
        favorito: true,
        genero: "Ação",
        status: "Assitido",
        lore: "Um jovem ninja busca o reconhecimento dos seus líderes e o sonho de se tornar Hokage."
    },
    {
        id: "2",
        nome: "One Piece",
        favorito: true,
        genero: "Aventura",
        status: "Finalizado"
    },
    {
        id: 3,
        nome: "Steins;Gate",
        favorito: false,
        genero: "Sci-Fi",
        status: "Em andamento",
        lore: "Um grupo de amigos descobre acidentalmente uma forma de enviar mensagens para o passado."
    }
];

const animeFav = animes.filter(ani => ani.favorito)

type AnimeShowl = Omit<Anime, "id">
type AnimeNome = Pick<Anime, "nome">

const atualizarFav = (ani: Partial<AnimeShowl>): void => {
    console.log(ani)
    // setFav(anime)
}
atualizarFav({ favorito: true })


const listaGenericas = <T>(lista: T[]): T => {
    return lista[0]
}
listaGenericas(animeFav)




