import { Component, input } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  livro = input.required<LivroInterface>();

  altertarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }


  //constructor(public livro: LivroInterface) {}

}

export interface LivroInterface {
  titulo: string;
  autoria: string;
  favorito: boolean;
  genero: GeneroLiterario;
  imagem: string;
}

export interface GeneroLiterario {
       id: string,
      value: string,
      livros: LivroInterface []
}
