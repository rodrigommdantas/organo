import { Component, input } from '@angular/core';
import { Livro } from "../livro/livro";
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})

export class GeneroLiterario {
   id = input.required<string>();
    
    livro = livros[0]
}
