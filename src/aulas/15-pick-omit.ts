// // interface Pessoa {
// //     nome: string;
// //     idade: number;
// //     cidade: string;
// //     profissao: string;
// // }

// // type PessoaResumo = Pick<Pessoa, "nome" | "cidade">;

// // const joao: PessoaResumo = {
// //     nome: 'Joao',
// //     cidade: "Piracicaba"
// // }

// // console.log(joao)

// // interface Usuario {
// //     id: number | string;
// //     nome: string;
// //     email: string;
// //     senha: string
// // }

// // type UsuarioPerfil = Omit<Usuario, "senha">;

// // const perfil: UsuarioPerfil = {
// //     id: '2dwgf33f',
// //     email: 'teste@gmail.com',
// //     nome: 'joao'
// // }

// interface Pessoa {
//     id: number | string;
//     nome: string;
//     nota: number;
//     senha: string;
// }

// type PessoaNome = Pick<Pessoa, "nome">

// const pessoaNome: PessoaNome = {
//     nome: 'Joao'
// };


// interface Pessoa {
//     id: number | string;
//     nome: string;
//     nota: number;
//     senha: string;
// }

// type PessoaInfo = Omit<Pessoa, "senha">

// const pessoaPerfil: PessoaInfo = {
//     id: '24ddw224d',
//     nome: 'Pedro',
//     nota: 7
// }


// console.log(pessoaNome)
// console.log(pessoaPerfil)

