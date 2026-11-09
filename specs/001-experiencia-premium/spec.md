# Especificação: experiência premium FAROL

Data: 09/11/2026. Versão-alvo: 0.4.0.

## Objetivo

Melhorar compreensão, descoberta e preparação da primeira aula por professores do Ensino Superior. A interface deve parecer um produto educacional coeso e permitir agir, não apenas apresentar o projeto.

SDD é usado como desenvolvimento guiado por especificações. Referência consultada: https://github.com/github/spec-kit/blob/main/spec-driven.md . Este projeto adota a disciplina especificar, planejar, decompor tarefas e validar; não afirma executar a CLI Spec Kit.

## Públicos e jornadas

- Professor que chega pela primeira vez: entender a proposta, explorar uma etapa e iniciar um planejamento.
- Professor que já conhece o método: encontrar, filtrar e abrir um prompt, módulo ou modelo.
- Colaborador: compreender o estado do projeto e escolher um canal de contribuição.

## Requisitos e critérios de aceite

| ID | Necessidade | Critério de aceite |
|---|---|---|
| UX01 | Hero premium e informativo | Nome e benefício claros, CTA principal visível, demonstração identificada como tal e sem estatísticas fictícias |
| UX02 | Leitura confortável | Corpo de 18 px no desktop e ao menos 17 px no mobile; textos auxiliares essenciais de pelo menos 14 px |
| UX03 | Método explorável | As cinco etapas podem ser escolhidas por mouse e teclado e alteram explicação, saída e recurso |
| UX04 | Biblioteca útil | Busca sem sensibilidade a acentos, filtros combináveis e estado vazio com opção de limpar |
| UX05 | Planejador guiado | Três passos com validação, retorno sem perda dos campos e revisão antes de gerar |
| UX06 | Resultado utilizável | Gerar comando contextualizado, copiar com fallback, baixar TXT e abrir NotebookLM por link válido |
| UX07 | Navegação acessível | Menu mobile abre e fecha, Escape o fecha, foco visível e link para pular ao conteúdo |
| UX08 | Movimento controlado | Interações respeitam prefers-reduced-motion; nenhuma animação transmite sozinha informação essencial |
| UX09 | Material confiável | Biblioteca aponta para arquivos existentes, créditos e MIT acessíveis, autoria exata e limites preservados |
| UX10 | Favoritos opcionais | Visitante pode favoritar e desfavoritar recursos; preferências ficam apenas no navegador e falhas de armazenamento não impedem uso |
| UX11 | Funcionamento responsivo | Sem rolagem horizontal nas larguras de referência 390 px, 768 px e desktop; campos e CTAs utilizáveis |
| UX12 | Publicação verificável | Workflow termina com sucesso e endereço público exibe a versão 0.4.0 |

## Fora do escopo

Backend, login, matrícula, envio para Classroom, conexão automática com conta NotebookLM, geração acadêmica por IA dentro do site e alegações de eficácia pedagógica ainda não demonstradas.

## Conteúdo e linguagem

Português do Brasil. Usar hífen no lugar de travessão. Autor: Alexsand Farias, professor universitário, desenvolvedor e pesquisador. Não adicionar depoimentos, taxas de sucesso ou instituições parceiras não confirmadas.
