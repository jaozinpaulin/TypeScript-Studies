import { Anime } from "../types/Anime";

export const mostrarAnime = (anime: Anime): void => {
    console.log(anime.titulo)
    console.log(anime.nota)
}
