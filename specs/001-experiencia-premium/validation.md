# Registro de validação

Versão: 0.4.0. Data: 09/11/2026.

## Regras e integridade

Executado `node --test tests/site.test.cjs`: 8 testes aprovados. Cobertura: campos obrigatórios por etapa, limites de duração, rejeição de entradas inválidas, contexto e regras do comando, normalização, IDs e caminhos dos 33 recursos, hífens e endereço atual e ausência de inferência da área quando não informada.

Executado `node --check` em app.js e planner.js, sem erro de sintaxe.

## Navegador: versão local

| Critério | Observação |
|---|---|
| UX01 | Hero inspecionado visualmente; CTA principal e demonstração identificada |
| UX03 | Botão Próxima etapa alterou hero e painel do método de Fundamentar para Alinhar |
| UX04 | Busca por acessibilidade retornou prompt e módulo correspondentes; estado vazio apareceu ao remover o único favorito filtrado |
| UX05 | Envio vazio bloqueado com mensagem e foco no campo; contexto preenchido avançou; tema e materiais apareceram na revisão; retorno manteve os campos |
| UX06 | Comando contextualizado gerado; cópia no ambiente local seguiu pelo fallback de seleção; clique em Baixar TXT produziu evento de download |
| UX07 | Menu em 390 px abriu; Escape fechou e devolveu o foco ao botão |
| UX10 | Favoritar atualizou contador e filtro; remover atualizou a lista para o estado vazio |
| UX11 | Sem rolagem horizontal observada em 390 px, 768 px e viewport desktop de 1363 px |

As larguras de 390 px e 768 px foram verificadas em frames locais com esse tamanho de viewport, não em aparelhos físicos. O evento de download foi observado; a transferência dos bytes para o ambiente de inspeção não ficou disponível. A cópia pelo Clipboard API em HTTPS será conferida na publicação, se a permissão do navegador permitir.

## Leitura e acessibilidade

Corpo de 18 px; textos de leitura de pelo menos 17 px no mobile. Campos de formulário em 16 px para evitar zoom de foco em navegadores móveis. Contraste medido das cores do texto principal (#53685e sobre #f7f8f3): 5,61:1. Placeholders revisados (#607654 sobre #fffefb): 4,94:1. As miniaturas decorativas do hero usam escala reduzida e não substituem o explorador completo do método.

Há foco visível, navegação por teclado nas etapas, áreas e rótulos semânticos e regra de movimento reduzido. A regra CSS de prefers-reduced-motion foi inspecionada; não foi feita certificação integral de acessibilidade com tecnologias assistivas nesta entrega.

## Ajustes após a observação

- Corrigido contraste do selo flutuante.
- Removida a seleção automática de área; o campo começa sem área definida.
- Ajustados textos de apoio e placeholders de baixo contraste.
- Preservadas preferências locais sem guardar conteúdo do formulário.

## Publicação

Pendente até a execução do workflow. Registrar o resultado e conferir o endereço público antes de concluir a entrega.
