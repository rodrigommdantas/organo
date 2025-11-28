import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroInterface, GeneroLiterario as GeneroInterface } from '../livro/livro';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-lista-livros',
    imports: [CommonModule],
    templateUrl: './lista-livros.html',
    styleUrls: ['./lista-livros.css'],
})
export class ListaLivros implements OnInit {
    generos: GeneroInterface[] = [];
    livrosPorGenero: Map<string, LivroInterface[]> = new Map<string, LivroInterface[]>();

  ngOnInit() {
    this.livrosPorGenero = new Map<string, LivroInterface[]>();

        livros.forEach((livro: LivroInterface) => {
            const generoId = String(livro.genero.id);
            if (!this.livrosPorGenero.has(generoId)) {
                this.livrosPorGenero.set(generoId, []);
            }

            // garante que o array existe e push é seguro
            this.livrosPorGenero.get(generoId)!.push(livro);
        });

        // montar a lista de gêneros depois de agrupar todos os livros
        this.generos = [
            {
                id: 'romance',
                value: 'Romance',
                livros: this.livrosPorGenero.get('romance') ?? [],
            },
            {
                id: 'misterio',
                value: 'Mistério',
                livros: this.livrosPorGenero.get('misterio') ?? [],
            },
            {
                id: 'fantasia',
                value: 'Fantasia',
                livros: this.livrosPorGenero.get('fantasia') ?? [],
            },
            {
                id: 'ficcao-cientifica',
                value: 'Ficção Científica',
                livros: this.livrosPorGenero.get('ficcao-cientifica') ?? [],
            },
            {
                id: 'tecnicos',
                value: 'Técnicos',
                livros: this.livrosPorGenero.get('tecnicos') ?? [],
            },
        ];

        console.log(this.livrosPorGenero);
  }
    
}
