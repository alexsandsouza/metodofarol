(() => {
  'use strict';
  let timer;
  const status=document.querySelector('#copy-status');
  function announce(text){status.textContent=text;status.hidden=false;clearTimeout(timer);timer=setTimeout(()=>{status.hidden=true;},5000);}
  document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
    const source=document.getElementById(button.dataset.copy);
    try{if(!navigator.clipboard)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(source.value);announce('Comando copiado. Preencha o contexto e forneça as fontes antes de executar.');}
    catch{source.focus();source.select();announce('Comando selecionado. Use Ctrl+C, Command+C ou a opção Copiar.');}
  }));
  if('IntersectionObserver' in window){
    const links=[...document.querySelectorAll('aside nav a')];
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}),{rootMargin:'-10% 0px -65% 0px'});
    document.querySelectorAll('.chapter').forEach(section=>observer.observe(section));
  }
})();
