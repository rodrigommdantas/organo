import { Component, signal } from '@angular/core';

import { Rodape } from "./componentes/rodape/rodape";
import { Cabecalho } from './componentes/cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
