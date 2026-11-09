(function (root) {
  'use strict';
  const outputLabels = Object.freeze({roteiro:'roteiro de aula',slides:'storyboard de slides',atividade:'atividade de aprendizagem',avaliacao:'avaliação e rubrica',texto:'texto de estudo'});
  function clean(value, max) { return String(value || '').trim().slice(0, max); }
  function normalizeBrief(input) {
    return {discipline:clean(input.discipline,120),course:clean(input.course,150),duration:Number(input.duration),area:clean(input.area,100),topic:clean(input.topic,200),objective:clean(input.objective,500),sources:clean(input.sources,700),outputs:[...new Set(Array.isArray(input.outputs)?input.outputs:[])].filter(key=>Object.hasOwn(outputLabels,key))};
  }
  function validateBrief(input, step=3) {
    const b=normalizeBrief(input);const errors=[];
    if(!b.discipline)errors.push({field:'discipline',message:'Informe a disciplina para continuar.'});
    if(!b.course)errors.push({field:'course',message:'Informe o curso e o período da turma.'});
    if(!Number.isInteger(b.duration)||b.duration<15||b.duration>600)errors.push({field:'duration',message:'Informe uma duração inteira entre 15 e 600 minutos.'});
    if(step>=2){if(!b.topic)errors.push({field:'topic',message:'Defina o tema ou recorte da aula.'});if(!b.outputs.length)errors.push({field:'outputs',message:'Selecione pelo menos um material para preparar.'});}
    return errors;
  }
  function buildPrompt(input) {
    const b=normalizeBrief(input);const errors=validateBrief(b);
    if(errors.length)throw new Error(errors[0].message);
    const requested=b.outputs.map(k=>outputLabels[k]).join(', ');
    return `Use o Método FAROL para planejar uma aula no Ensino Superior.\n\nCONTEXTO\nDisciplina: ${b.discipline}.\nCurso e período: ${b.course}.\nDuração: ${b.duration} minutos.\nÁrea: ${b.area||'a especificar com o professor'}.\nTema delimitado: ${b.topic}.\nObjetivo informado: ${b.objective||'Ainda não definido. Proponha objetivos observáveis como rascunho para revisão docente.'}\nMateriais desejados: ${requested}.\nFontes que pretendo adicionar: ${b.sources||'Plano de ensino e bibliografia autorizada, a selecionar e fornecer.'}\n\nPRIMEIRO CICLO\n1. Siga o briefing, o perfil disciplinar e as REGRAS_CENTRAIS FAROL que eu fornecer. Diferencie orientações pedagógicas de fontes acadêmicas.\n2. Comece por F - Fundamentar: liste somente as fontes reconhecidas, relacione os conceitos aos trechos que os sustentam e registre lacunas e divergências. Não presuma que as fontes citadas no contexto já foram carregadas.\n3. Em A - Alinhar, proponha objetivos observáveis e uma matriz que relacione conteúdo, atividade, evidência, critério e tempo. Caso o plano não esteja disponível, marque o planejamento como provisório.\n4. Apresente o diagnóstico e a matriz para revisão docente antes de produzir os materiais completos.\n\nAPÓS A REVISÃO\nR - Roteirizar: organize abertura, explicação, exemplos, prática, perguntas e síntese em ${b.duration} minutos.\nO - Operacionalizar: prepare ${requested}, preservando acessibilidade e separando versões do aluno e do professor quando pertinente. Distinga storyboard de slides de arquivo finalizado.\nL - Ler evidências e lapidar: proponha uma forma de reunir produções anonimizadas e planejar melhorias. Não invente resultados de aprendizagem.\n\nCRITÉRIOS DE QUALIDADE\nAdapte linguagem, métodos, evidências e critérios à área e à turma. Não invente referências, páginas, dados ou competências institucionais. Identifique exemplos fictícios, interpretações e limites das analogias. A aprovação final dos materiais cabe ao professor.`;
  }
  const api=Object.freeze({normalizeBrief,validateBrief,buildPrompt,outputLabels});
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.FarolPlanner=api;
})(typeof window!=='undefined'?window:globalThis);
