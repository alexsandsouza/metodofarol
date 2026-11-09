'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const planner=require('../docs/site/planner.js');
const valid={discipline:'História da Arte',course:'Artes Visuais, 2º período',duration:100,area:'Artes e Linguagens',topic:'Leitura de uma obra',outputs:['roteiro','atividade']};
test('contexto incompleto bloqueia o avanço sem exigir campos de etapas futuras',()=>{
 assert.deepEqual(planner.validateBrief(valid,1),[]);
 assert.equal(planner.validateBrief({...valid,discipline:'  '},1)[0].field,'discipline');
 assert.equal(planner.validateBrief({...valid,topic:''},1).length,0);
 assert.equal(planner.validateBrief({...valid,topic:''},2)[0].field,'topic');
});
test('duração inteira deve ficar entre 15 e 600 minutos',()=>{
 for(const duration of [0,-1,14,601,30.5,'abc',Infinity])assert.ok(planner.validateBrief({...valid,duration},1).some(e=>e.field==='duration'));
 for(const duration of [15,100,600])assert.equal(planner.validateBrief({...valid,duration},1).length,0);
});
test('não gerar sem tema ou com materiais não reconhecidos',()=>{
 assert.throws(()=>planner.buildPrompt({...valid,topic:''}));
 assert.throws(()=>planner.buildPrompt({...valid,outputs:[]}));
 assert.throws(()=>planner.buildPrompt({...valid,outputs:['desconhecido']}));
});
test('comando usa contexto, preserva incerteza sobre fontes e exige revisão',()=>{
 const text=planner.buildPrompt({...valid,sources:'Dois artigos a selecionar.'});
 assert.ok(text.includes(valid.discipline));assert.ok(text.includes(valid.course));assert.ok(text.includes('100 minutos'));
 assert.ok(text.includes('atividade de aprendizagem'));
 assert.ok(text.includes('Não presuma que as fontes citadas no contexto já foram carregadas.'));
 assert.ok(text.includes('antes de produzir os materiais completos'));
 assert.ok(text.includes('Não invente resultados de aprendizagem.'));
 assert.ok(!/[\u2013\u2014]/u.test(text));
});
test('normalização limita campos e evita materiais duplicados',()=>{
 const normalized=planner.normalizeBrief({...valid,discipline:'x'.repeat(300),outputs:['slides','slides','__proto__']});
 assert.equal(normalized.discipline.length,120);assert.deepEqual(normalized.outputs,['slides']);
});
test('todos os recursos da biblioteca têm ID único e caminho real dentro do repositório',()=>{
 const resources=JSON.parse(fs.readFileSync(path.join(__dirname,'../docs/site/resources.json'),'utf8'));
 assert.equal(resources.length,38);assert.equal(new Set(resources.map(r=>r.id)).size,resources.length);
 assert.equal(resources.filter(r=>r.category==='prompts').length,17);
 assert.equal(resources.filter(r=>r.category==='modulos').length,8);
 for(const resource of resources){assert.ok(!resource.path.includes('..'));assert.ok(fs.existsSync(path.resolve(__dirname,'..',resource.path)),resource.path);assert.ok(resource.title&&resource.description&&resource.stage);}
});
test('a interface e os dados respeitam a escolha de hífen e o endereço atual',()=>{
 for(const file of ['index.html','styles.css','app.js','planner.js','resources.json']){
 const text=fs.readFileSync(path.join(__dirname,'../docs/site',file),'utf8');assert.ok(!/[\u2013\u2014]/u.test(text),file);assert.ok(!text.includes('/Metodo_Farol/'),file);
 }
});

test('área não informada não é inferida pelo gerador',()=>{
 const text=planner.buildPrompt({...valid,area:''});assert.ok(text.includes('Área: a especificar com o professor.'));
});

