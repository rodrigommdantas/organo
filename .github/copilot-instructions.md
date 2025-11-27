## Propósito

Estas instruções ajudam agentes de codificação (estilo Copilot) a serem produtivos rapidamente neste projeto Angular 21.

## Visão geral

- Tipo de projeto: app Angular única gerada com Angular CLI v21 (`package.json` mostra `@angular/*@^21`).
- Pontos de entrada:
  - `src/main.ts` (bootstrap do Angular)
  - `src/app/app.ts` — componente raiz; usa `signal()` para estado local e importa `RouterOutlet`.
  - `src/app/app.config.ts` — `ApplicationConfig` que registra `provideRouter(routes)` e listeners globais de erro.
  - `src/app/app.routes.ts` — tabela de rotas (atualmente vazia).
- Padrões a esperar: componentes no estilo standalone (sem arquivo NgModule). Componentes declaram `imports: [...]` no decorator. Templates usam as sintaxes nativas de controle de fluxo do Angular v20+ como `@for` (veja `src/app/app.html`).

## Fluxos de trabalho e comandos principais

- Iniciar servidor de desenvolvimento: `npm start` (executa `ng serve`).
- Build: `npm run build` (`ng build`).
- Build em modo watch: `npm run watch` (`ng build --watch --configuration development`).
- Testes unitários: `npm test` (`ng test`) — o projeto usa `vitest` conforme `devDependencies`.
- E2E: não está pré-configurado; o `README` sugere `ng e2e` caso adicione um framework.

## Convenções específicas do projeto

- Use `signal` para estado local de componentes. Exemplo: `protected readonly title = signal('organo');` em `src/app/app.ts`.
- Prefira usar `imports` no `@Component` para trazer diretivas (ex.: `RouterOutlet`) — siga isso ao invés de adicionar NgModules.
- Templates podem usar controle de fluxo nativo (`@if`, `@for`) em vez de `*ngIf`/`*ngFor` — `src/app/app.html` usa `@for`.
- CSS: estilos estão embutidos em alguns templates (veja `src/app/app.html`) e usam variáveis CSS personalizadas para theming — prefira editar as variáveis em `:host` ao ajustar cores.
- Roteamento: o router é configurado via `app.config.ts`. Para adicionar rotas, exporte-as em `src/app/app.routes.ts` e atualize `provideRouter(routes)` se necessário.

## Arquivos-chave para revisar antes de editar

- `src/app/app.ts` — formato do componente raiz e uso de `signal()` e `imports`.
- `src/app/app.config.ts` — onde providers e roteador são registrados.
- `src/app/app.routes.ts` — definições de rota.
- `src/app/app.html` — template raiz; demonstra controle de fluxo nativo, variáveis CSS e padrões de acessibilidade (ex.: `role="separator"`, `aria-label`).
- `package.json` — scripts e versões do Angular / runner de testes.

## Integrações e dependências externas

- Router: `@angular/router` é usado e registrado com `provideRouter(routes)`.
- Listeners de erro globais: `provideBrowserGlobalErrorListeners()` está ativado em `app.config.ts`.
- Runner de testes: `vitest` (invocado implicitamente por `ng test`).

## Orientações práticas para agentes de IA

- Mantenha as mudanças mínimas e consistentes com o estilo existente (componentes standalone, `signal`, `imports`).
- Ao adicionar um componente:
  - Use formato standalone (não crie NgModule).
  - Adicione diretivas necessárias no array `imports` do decorator `@Component`.
  - Prefira componentes pequenos e focados; atualize `app.routes.ts` se for uma rota.
- Ao editar templates, preserve o uso de controle de fluxo nativo e os atributos ARIA existentes.
- Ao editar estilos, prefira ajustar variáveis CSS no topo de `src/app/app.html` ou os estilos locais do componente.

## Exemplos (diretos)

- Adicionar uma rota: edite `src/app/app.routes.ts` para exportar um array `Routes`, por exemplo:

  ```ts
  import { Routes } from '@angular/router';
  import { Home } from './home.component';

  export const routes: Routes = [ { path: '', component: Home } ];
  ```

- Providers globais ficam em `src/app/app.config.ts`. Para adicionar providers globais, utilize o array `providers` ali.

## O que não foi possível inferir

- Não há configuração de backend ou APIs externas no repositório; se existirem integrações, estarão em pacotes separados ou arquivos de ambiente não presentes aqui.

Se algo importante estiver faltando ou se quiser que eu expanda exemplos (ex.: scaffold de componente, rota exemplo, ou exemplo de teste), diga o que incluir e eu atualizo.

## Boas práticas TypeScript observadas

- Use checagem estrita de tipos (`strict`).
- Prefira inferência de tipos quando óbvia.
- Evite o tipo `any`; use `unknown` quando incerto.

## Boas práticas Angular observadas

- Use sempre componentes standalone em vez de NgModules.
- NÃO defina `standalone: true` dentro de decorators (é o padrão no Angular v20+).
- Use `signal` para gerenciamento de estado local.
- Prefira lazy loading para rotas de features.
- NÃO use `@HostBinding` ou `@HostListener`; em vez disso use o objeto `host` no decorator `@Component` ou `@Directive`.
- Use `NgOptimizedImage` para imagens estáticas.
  - `NgOptimizedImage` não funciona para imagens base64 inline.

## Requisitos de acessibilidade

- O código deve passar checks do AXE.
- Deve seguir WCAG AA (contraste, gerenciamento de foco, atributos ARIA mínimos).

### Componentes

- Mantenha componentes pequenos e com responsabilidade única.
- Use `input()` e `output()` (funções) ao invés de decoradores.
- Use `computed()` para estado derivado.
- Defina `changeDetection: ChangeDetectionStrategy.OnPush` no decorator `@Component`.
- Prefira templates inline para componentes pequenos.
- Prefira formulários reativos em vez de template-driven.
- NÃO use `ngClass`; use bindings de `class`.
- NÃO use `ngStyle`; use bindings de `style`.
- Quando usar templates/estilos externos, use caminhos relativos ao arquivo TS do componente.

## Gerenciamento de estado

- Use `signal` para estado local.
- Use `computed()` para estado derivado.
- Mantenha transformações de estado puras e previsíveis.
- NÃO use `mutate` em signals; use `update` ou `set`.

## Templates

- Mantenha templates simples; evite lógica complexa.
- Use controle de fluxo nativo (`@if`, `@for`, `@switch`) em vez de `*ngIf`, `*ngFor`, `*ngSwitch`.
- Use `async` pipe para Observables.
- Não assuma a disponibilidade de globais como `new Date()` no template.
- Não escreva arrow functions em templates (não são suportadas).

## Services

- Projete services com responsabilidade única.
- Use `providedIn: 'root'` para singletons.
- Prefira `inject()` ao invés de injeção via construtor.

