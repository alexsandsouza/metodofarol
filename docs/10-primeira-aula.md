# Sua primeira aula com o FAROL

[Índice dos guias](README.md) · [Visão geral](../README.md)

**Objetivo:** concluir um primeiro kit revisável para uma aula delimitada. Este percurso é uma orientação de trabalho, sem promessa de tempo fixo ou resultado de aprendizagem.

## 1. Escolha uma aula e um produto

Defina uma pergunta central, a turma e o tempo disponível. Comece com roteiro e atividade; acrescente slides ou avaliação quando necessários. Para visualizar o fluxo, consulte um [exemplo ilustrativo](../exemplos/README.md). Os exemplos não são relatos de resultados de turmas.

Preencha o [briefing](../modelos/BRIEFING.txt) e o [perfil disciplinar](../modelos/PERFIL_DISCIPLINAR.txt). Informe dados reais; marque o que ainda depende de confirmação.

**Para avançar:** tema delimitado, público, duração, objetivo provisório e recursos disponíveis estão explícitos.

## 2. Selecione e confira as fontes

Reúna o plano de ensino e o acervo pertinente. Registre os dados bibliográficos no [registro de fontes](../modelos/REGISTRO_FONTES.csv). Use o [controle de permissões](../modelos/CONTROLE_PERMISSOES.md) para verificar separadamente acesso, upload e publicação. Leia a [política de uso responsável](../USO_RESPONSAVEL.md).

**Para avançar:** procedência, versão e condições de uso foram verificadas; fontes com permissão pendente ficam fora do upload.

## 3. Prepare um caderno

Siga o [guia do NotebookLM](02-usar-no-notebooklm.md). Identifique plano de ensino, fontes acadêmicas e orientações FAROL como documentos com funções diferentes.

Adicione o briefing, o perfil e as [regras centrais](../notebooklm/REGRAS_CENTRAIS.txt). Use a [configuração de conversa](../notebooklm/CONFIGURACAO.txt) quando a interface permitir. Os arquivos orientam o assistente; não são programas executados pelo NotebookLM.

**Para avançar:** fontes foram processadas e você consegue localizar os trechos originais.

## 4. Percorra F, A e R

Abra e cole os prompts completos, um por vez:

| Etapa | Comando | Resultado a revisar |
|---|---|---|
| Fundamentar | [P01](../prompts/P01-diagnosticar-o-acervo.md) | Conceitos, evidências e lacunas |
| Alinhar | [P02](../prompts/P02-delimitar-a-aula.md) e [P03](../prompts/P03-construir-a-matriz.md) | Recorte da aula e matriz de objetivos, práticas e avaliação |
| Roteirizar | [P04](../prompts/P04-roteirizar-a-aula.md) | Sequência, mediação e tempos |

Salve as decisões aprovadas e forneça-as novamente se trocar de conversa. Não prossiga com lacunas que comprometam o objetivo.

**Para avançar:** o professor conferiu as afirmações centrais nas fontes e aprovou a matriz e o roteiro.

## 5. Operacionalize o kit

Escolha apenas os recursos necessários:

- [P05 - storyboard de slides](../prompts/P05-preparar-slides.md).
- [P06 - material de estudo](../prompts/P06-preparar-material-de-estudo.md).
- [P07 - atividade](../prompts/P07-criar-atividade.md).
- [P08 - avaliação e rubrica](../prompts/P08-avaliar-a-aprendizagem.md).

Aplique [P09 - acessibilidade](../prompts/P09-revisar-acessibilidade.md) e [P10 - auditoria](../prompts/P10-auditar-o-kit.md). Produza os formatos finais com as ferramentas disponíveis e abra os arquivos exportados para conferir. Um storyboard descreve slides; não equivale a um PPTX pronto.

**Para avançar:** instruções, produtos esperados, critérios, referências e recursos essenciais estão presentes e legíveis.

## 6. Publique e registre o que aconteceu

Preencha o [checklist docente](../modelos/CHECKLIST_PUBLICACAO.md). Use [P11](../prompts/P11-preparar-publicacao.md) para o texto da postagem e publique manualmente no ambiente escolhido. Separe versão do estudante e gabarito docente.

Depois da aula, registre observações e evidências anonimizadas. Use [P12](../prompts/P12-melhorar-apos-a-aula.md) e o [registro de melhorias](../modelos/REGISTRO_MELHORIAS.md). Consulte o [protocolo de piloto](06-validar-e-melhorar.md) antes de fazer alegações de eficácia.

## O que deve ficar salvo

| Artefato | Condição de conclusão |
|---|---|
| Briefing e perfil | Contexto real ou pendências identificadas |
| Fontes e permissões | Referências e usos verificados |
| Matriz e roteiro | Coerência entre objetivo, prática e evidência |
| Materiais do estudante | Arquivos abertos e revisados |
| Material docente | Respostas e critérios em acesso separado |
| Checklist | Liberação registrada pelo professor |
| Registro posterior | Observações, limites e próxima mudança |

Se algo falhar, consulte a [FAQ](11-perguntas-frequentes.md) e a seção de recuperação de falhas do [guia detalhado](02-usar-no-notebooklm.md).

**Próximo passo:** repita o ciclo com uma nova aula e compare o processo, sem tratar uma aplicação isolada como validação universal.
