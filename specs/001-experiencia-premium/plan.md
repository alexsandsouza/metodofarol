# Plano de implementação

## Arquitetura

Manter HTML semântico, CSS e JavaScript nativos, compatíveis com o fluxo estático existente do GitHub Pages. Separar regras do planejador em `planner.js`, dados dos recursos em `resources.json`, interações em `app.js` e tokens visuais em `styles.css`.

A escolha evita um processo de build desnecessário. SDD organiza o desenvolvimento e seus critérios; não é uma biblioteca visual a ser carregada no navegador.

## Experiência

1. Header fixo leve com navegação e menu mobile.
2. Hero com título conciso e uma demonstração interativa do percurso FAROL.
3. Caminhos de entrada para iniciantes, usuários de NotebookLM e colaboradores.
4. Explorador do método com pergunta, entregável e próxima ação.
5. Biblioteca pesquisável com categorias, contagem e favoritos locais.
6. Planejador de três passos: contexto, intenção e revisão.
7. Perguntas frequentes, colaboração e autoria.

## Direção visual

Base azul petróleo, superfícies claras, turquesa e âmbar. Tipografia de interface com fontes de sistema, títulos bem proporcionados, espaço para leitura e detalhes editoriais. A nova composição substitui o farol ilustrado gigante por um painel que demonstra o produto e orienta a ação.

## Dados e estado

- `stage`: etapa selecionada, compartilhada pelo hero e explorador.
- `category` e `query`: filtros da biblioteca.
- `favorites`: IDs de recursos; somente estes IDs podem ser salvos em localStorage.
- `step` e `brief`: estado temporário do formulário; nenhum conteúdo digitado é enviado para servidor ou persistido.
- `output`: comando montado localmente, revisável e exportável.

## Verificação

Testes de regras do planejador e da integridade dos recursos. Teste de navegador de etapas, busca, favoritos, menu, formulário, resultado e cópia. Inspeção visual da versão local e da publicada. Registrar limitações reais em validation.md, sem declarar testes não executados.
