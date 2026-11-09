# Desenvolvimento guiado por especificações

A experiência do site é organizada com SDD, desenvolvimento guiado por especificações. A referência consultada foi o [Spec Kit do GitHub](https://github.com/github/spec-kit/blob/main/spec-driven.md). A estrutura foi aplicada diretamente ao projeto; não houve execução da CLI Spec Kit nesta entrega.

## Onde está cada decisão

| Documento | Função |
|---|---|
| [Princípios](../.specify/memory/constitution.md) | Regras do produto e limites de escopo |
| [Especificação](../specs/001-experiencia-premium/spec.md) | Jornadas, requisitos e critérios verificáveis |
| [Plano](../specs/001-experiencia-premium/plan.md) | Arquitetura, dados e direção de experiência |
| [Tarefas](../specs/001-experiencia-premium/tasks.md) | Implementação derivada dos requisitos |
| [Validação](../specs/001-experiencia-premium/validation.md) | Testes realizados, observações e limites |

## Arquitetura da página

- `docs/site/index.html`: estrutura semântica e conteúdo.
- `docs/site/styles.css`: tokens, componentes, estados e responsividade.
- `docs/site/resources.json`: dados dos 33 recursos reais da biblioteca.
- `docs/site/planner.js`: normalização, validação e construção do comando.
- `docs/site/app.js`: navegação, filtros, favoritos e interface do planejador.
- `tests/site.test.cjs`: verificação das regras do planejador e da integridade dos dados.

A publicação continua estática no GitHub Pages. Não há cadastro, backend ou chamada de API de IA. O formulário monta um comando com as informações fornecidas e não persiste seu conteúdo. A lista de IDs favoritos pode ficar no localStorage do navegador; é possível desfavoritar cada recurso.

## Rodar as verificações

Com Node.js moderno instalado, execute na raiz do repositório:

```bash
node --test tests/site.test.cjs
node --check docs/site/app.js
node --check docs/site/planner.js
```

Para mudar uma funcionalidade, atualize primeiro o requisito afetado, o plano e as tarefas. Depois implemente e registre evidências observadas na validação. Não marque um critério como verificado apenas porque existe uma implementação.
