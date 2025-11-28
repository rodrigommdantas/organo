import { Component, signal } from '@angular/core';

import { Rodape } from "./componentes/rodape/rodape";
import { Cabecalho } from './componentes/cabecalho/cabecalho';

import { ListaLivros } from "./componentes/lista-livros/lista-livros";
import { GeneroLiterario } from "./componentes/genero-literario/genero-literario";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaLivros, GeneroLiterario],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('organo');
}
