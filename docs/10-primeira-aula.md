# Quick start: sua primeira aula com FAROL

## Antes de começar
Escolha uma aula delimitada, tenha o plano de ensino quando disponível e selecione poucas fontes pertinentes que você possa utilizar. Você precisará de um editor de texto e, se quiser apoio de IA, de um assistente ou NotebookLM. Não é necessário programar. O tempo de preparação depende do acervo e dos produtos escolhidos.

O resultado mínimo é um briefing, uma matriz, um roteiro e uma atividade com critérios. Crie slides ou outros recursos quando ajudarem o objetivo.

## Passo 1 - Descreva a aula
Preencha o [briefing](../modelos/BRIEFING.txt). Registre curso, disciplina, período, tema, duração, repertório, recursos, barreiras e produto desejado. Se faltar plano de ensino, marque os objetivos como provisórios.

**Exemplo fictício:** aula interdisciplinar de 100 minutos para universitários iniciantes, sobre a distinção entre opinião, afirmação e evidência. Produto: parecer breve que julga a sustentação de uma conclusão. Recursos: dois textos autorizados, projetor opcional e ficha impressa.

## Passo 2 - Confira e registre as fontes
Selecione F01 e F02 reais para o assunto. Abra o original e registre autoria, data, endereço, localização e permissão no [registro de fontes](../modelos/REGISTRO_FONTES.csv). Neste exemplo, F01 e F02 são espaços de preenchimento, não referências existentes.

Se não houver suporte para o conteúdo central, resolva essa lacuna antes de redigir uma aula definitiva. O texto FAROL orienta o trabalho e não substitui a bibliografia da disciplina.

## Passo 3 - Prepare o espaço de trabalho
No NotebookLM, crie um caderno para a aula ou unidade; adicione somente documentos permitidos e confirme se foram processados. Adicione briefing, perfil e regras identificados como orientação. Não envie o ZIP; extraia os arquivos. Veja o [guia da ferramenta](02-usar-no-notebooklm.md).

Em outro assistente, forneça os mesmos documentos e explicite quais são orientações e quais são fontes disciplinares.

## Passo 4 - Execute F: diagnóstico
```text
Use meu briefing e as REGRAS_CENTRAIS FAROL.
Liste somente as fontes efetivamente disponíveis para esta aula.
Relacione cada conceito central a uma fonte e localização verificável.
Separe suporte direto, interpretação e lacuna. Não invente referências.
Se o acervo for insuficiente, indique o que falta antes de produzir a aula.
```
Abra as citações e confira o contexto. Salve o diagnóstico revisado.

## Passo 5 - Execute A: alinhamento
```text
Com base no diagnóstico revisado, proponha até três objetivos observáveis.
Construa uma matriz: objetivo | processo cognitivo e conhecimento |
atividade | evidência | critério | tempo.
Use Bloom revisada quando pertinente ao objetivo cognitivo.
Considere o repertório, a relevância e os apoios da turma.
Não invente competências institucionais. Apresente para revisão docente.
```
Confira se o objetivo pode ser demonstrado com a tarefa proposta. Revise a matriz antes de avançar.

## Passo 6 - Execute R: roteiro
Para o exemplo, uma distribuição possível é:

| Minutos | Ação | Evidência |
|---|---|---|
| 0-10 | Problema inicial e posição individual | Hipótese inicial |
| 10-25 | Explicação e exemplo de conferência de fonte | Respostas de checagem |
| 25-45 | Leitura e marcação em dupla | Quadro de afirmações e suporte |
| 45-60 | Diálogo socrático sobre um contraexemplo | Justificativa confrontada |
| 60-80 | Produção individual do parecer | Texto de 150 a 200 palavras |
| 80-95 | Feedback por critérios e revisão | Segunda versão |
| 95-100 | Síntese e dúvida final | Registro de fechamento |

Total: 100 minutos. Essa é uma proposta, não um tempo obrigatório. Ajuste ao contexto. Peça ao assistente as perguntas, os apoios e a síntese; confira conceitos e soma dos tempos.

## Passo 7 - Execute O: atividade e material
Prepare a ficha do aluno: contexto, textos selecionados, tarefa, etapas, tempo, extensão e critérios. Prepare separadamente a versão do professor com caminhos esperados e justificativas baseadas nas fontes. Use os [prompts de recursos](../prompts/README.md) e a [especificação PROMPTIA](16-promptia-no-farol.md).

**Critérios do exemplo:** conclusão explícita; evidência localizada e pertinente; reconhecimento de limite. Se houver nota, estabeleça pontuação e descritores conforme a disciplina e as regras institucionais.

## Passo 8 - Revise antes de disponibilizar
Execute P09 e P10. Confira fontes, clareza, tempo, acessibilidade, permissões e versões. Abra o arquivo final, teste links e verifique se o gabarito foi removido do material público. Uma sugestão visual ainda não é imagem incorporada.

## Passo 9 - Aplique e execute L
Reúna as versões anonimizadas dos pareceres e o fechamento. Compare com os critérios, devolva feedback e registre uma mudança para a próxima aula. Sem dados reais, registre apenas o plano de coleta.

## Se algo falhar
**A IA inventou fonte:** retire a afirmação, consulte o original e registre a lacuna.  
**A saída ficou genérica:** reduza o pedido a um produto, forneça o briefing e peça critérios explícitos.  
**A atividade ficou longa:** priorize o objetivo central e recalcule os tempos.  
**A turma ainda não tem repertório:** acrescente exemplo guiado e pratique antes da tarefa autônoma.  
**A fonte mudou:** confira a versão no caderno e revise os derivados já produzidos.

[Continuar pelos guias](README.md) · [Copiar prompts](../prompts/README.md)
