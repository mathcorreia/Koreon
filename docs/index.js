// helpers
const $ = s => document.querySelector(s);
document.getElementById('y').textContent = new Date().getFullYear();

// menu mobile
const burger = $('#burger'), menu = $('#menu');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

// ícones (SVG inline)
function Icon(name){
  const base = 'currentColor';
  switch(name){
    case 'code':   return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><path d="M9.4 16.6 3.8 12l5.6-4.6L8 6 1 12l7 6 1.4-1.4zm5.2 0L23 12l-8.4-6L16 6l7 6-7 6-1.4-1.4z"/></svg>`;
    case 'cloud':  return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><path d="M6 19h11a5 5 0 0 0 .6-9.98A7 7 0 0 0 5.1 9.9 4.5 4.5 0 0 0 6 19z"/></svg>`;
    case 'ai':     return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><path d="M12 2a3 3 0 0 1 3 3v1h1a3 3 0 1 1 0 6h-1v1h1a3 3 0 1 1 0 6h-1v1a3 3 0 1 1-6 0v-1H8a3 3 0 1 1 0-6h1v-1H8a3 3 0 1 1 0-6h1V5a3 3 0 0 1 3-3z"/></svg>`;
    case 'shield': return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><path d="M12 2 19 6v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z"/></svg>`;
    case 'gear':   return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><path d="M19.4 13a7.7 7.7 0 0 0 0-2l2-1.5-2-3.5-2.4.6a7.7 7.7 0 0 0-1.7-1L15 2h-6l-.3 2.6a7.7 7.7 0 0 0-1.7 1L4.6 6l-2 3.5L4.6 11a7.7 7.7 0 0 0 0 2l-2 1.5 2 3.5 2.4-.6a7.7 7.7 0 0 0 1.7 1L9 22h6l.3-2.6a7.7 7.7 0 0 0 1.7-1l2.4.6 2-3.5L19.4 13zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
    case 'tools':  return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><path d="M21 3 14 10l-1-1-2 2 6 6 2-2-1-1 7-7-4-4zM3 14l5-5 2 2-5 5H3v-2z"/></svg>`;
    default: return `<svg class="icon" viewBox="0 0 24 24" fill="${base}"><circle cx="12" cy="12" r="8"/></svg>`;
  }
}

// componentes
function CardSrv(title, desc, iconSvg, items=[]){
  return `
  <article class="card srv reveal">
    ${iconSvg}
    <div>
      <h3>${title}</h3>
      <p>${desc}</p>
      ${items.length?`<ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul>`:''}
    </div>
  </article>`;
}
function Case(title, tag, text){
  return `
  <article class="card case reveal">
    <div class="thumb">Prévia do projeto</div>
    <div>
      <h3>${title}</h3>
      <p class="subtitle">${tag}</p>
      <p>${text}</p>
    </div>
  </article>`;
}

// páginas (templates)
const Pages = {
  home: () => `
    <section class="hero">
      <div class="pulse" aria-hidden="true"></div>
      <div class="wrap reveal">
        <h1 class="hero-title">Koreon — Tecnologia que impulsiona o seu negócio</h1>
        <p class="subtitle">Soluções completas em Software, Nuvem, IA, Automação, Segurança e Suporte Técnico.</p>
        <div class="bigcta">
          <a class="btn btn--primary" href="#/contato">Fale com a gente</a>
          <a class="btn" href="#/servicos">Ver serviços</a>
        </div>
        <div class="badges" aria-label="competências">
          <span class="badge">${Icon('code')} <span>Apps & APIs</span></span>
          <span class="badge">${Icon('cloud')} <span>Cloud & DevOps</span></span>
          <span class="badge">${Icon('ai')} <span>IA & Automação</span></span>
          <span class="badge">${Icon('shield')} <span>Segurança</span></span>
          <span class="badge">${Icon('shield')} <span>Controle de acesso</span></span>
          <span class="badge">${Icon('tools')} <span>Suporte técnico</span></span>
        </div>
      </div>
    </section>
    <section class="wrap">
      <div class="grid cols-3">
        ${CardSrv('Desenvolvimento de Software','Web, mobile e integrações com foco em performance e UX.', Icon('code'),
          ['SaaS, e‑commerce, portais','APIs REST/GraphQL','Design system & acessibilidade'])}
        ${CardSrv('Soluções em Nuvem','Arquitetura escalável em AWS, Azure ou GCP.', Icon('cloud'),
          ['Kubernetes & Docker','CI/CD & IaC (Terraform)','Observabilidade & FinOps'])}
        ${CardSrv('Inteligência Artificial','Modelos e automações aplicadas ao negócio, Machine Learning.', Icon('ai'),
          ['Assistentes & chatbots','Classificação e previsão','RPA com IA'])}
        ${CardSrv('Controle de Acesso','Sistemas para empresas e condomínios, com instalação e manutenção.',Icon('shield'),
          ['Reconhecimento facial e biométrico', 'Cartões de proximidade e tags', 'Portões eletrônicos e catracas'])}
      </div>
    </section>
  `,
  sobre: () => `
    <section class="wrap grid cols-2">
      <div class="card reveal">
        <h2>Sobre a Koreon Tech</h2>
        <p class="subtitle">Inovação com credibilidade e foco em resultado.</p>
        <p>Fundada para ser o <b>núcleo</b> que conecta tecnologia, pessoas e futuro, a Koreon entrega soluções completas — do diagnóstico à operação.</p>
        <h3 style="margin-top:12px">Missão</h3>
        <p>Transformar ideias em produtos e processos digitais seguros e escaláveis.</p>
        <h3>Visão</h3>
        <p>Ser referência em inovação prática, onde tecnologia gera impacto real nos negócios.</p>
        <h3>Valores</h3>
        <p>Transparência, confiabilidade, melhoria contínua e foco no cliente.</p>
      </div>
      <aside class="card reveal">
        <h2>Nosso histórico</h2>
        <p>Projetos em varejo, saúde, educação e indústria: implantação de <b>cloud</b>, construção de <b>APIs</b>, <b>aplicativos</b>, <b>automação</b> e programas de <b>segurança</b>.</p>
        <p>Atendimento 100% online, com rituais ágeis, SLAs e indicadores claros.</p>
      </aside>
    </section>
  `,
  servicos: () => `
    <section class="wrap">
      <h2>Serviços</h2>
      <p class="subtitle" style="margin-bottom:14px">Soluções organizadas por frentes, com ícones ilustrativos.</p>
      <div class="grid cols-3">
        ${CardSrv('Desenvolvimento de Software','Do MVP ao enterprise.', Icon('code'),
          ['Web, Mobile, Microserviços','Integrações (pagamentos, ERPs)','Qualidade: testes, SAST/DAST'])}
        ${CardSrv('Soluções em Nuvem','Infra segura e escalável.', Icon('cloud'),
          ['Arquitetura AWS/Azure/GCP','Kubernetes, CI/CD, IaC','Observabilidade (SLIs/SLOs)'])}
        ${CardSrv('Inteligência Artificial','IA aplicada ao negócio.', Icon('ai'),
          ['Chatbots e copilots','Análise preditiva','Detecção de anomalias'])}
        ${CardSrv('Automação de Processos','Ganhe eficiência.', Icon('gear'),
          ['RPA & integrações','ETL/ELT e orquestração','Workflows low-code'])}
        ${CardSrv('Segurança da Informação','Ofensiva & defensiva.', Icon('shield'),
          ['Pentest Web/Mobile/API','Hardening e IAM/SSO','SIEM, resposta a incidentes'])}
        ${CardSrv('Conserto & Suporte','Helpdesk e manutenção.', Icon('tools'),
          ['Formatação e upgrades','Limpeza e troca de peças','Suporte remoto e presencial'])}
        ${CardSrv('Controle de Acesso','Sistemas para empresas e condomínios, com instalação e manutenção.',Icon('shield'),
          ['Reconhecimento facial e biométrico', 'Cartões de proximidade e tags', 'Portões eletrônicos e catracas', 'Integração com sistemas de segurança'])}
      </div>
    </section>
  `,
  portfolio: () => `
    <section class="wrap">
      <h2>Portfólio & Cases</h2>
      <p class="subtitle" style="margin-bottom:14px">Exemplos de projetos e resultados.</p>
      <div class="grid cols-3">
        ${Case('Plataforma SaaS B2B','Dev • Cloud • Segurança','Arquitetura em Kubernetes, CI/CD GitHub Actions e login com SSO. Redução de 40% no tempo de deploy.')}
        ${Case('Chatbot de Suporte com IA','IA • Automação','Assistente treinado nos documentos da empresa, integrando CRM. Acurácia de 85% nas respostas.')}
        ${Case('Pentest para e‑commerce','Segurança','Relatório com priorização CVSS, correções guiadas e reteste, elevando nota OWASP.')}
      </div>
    </section>
  `,
  contato: () => `
    <section class="wrap grid cols-2">
      <div class="card reveal">
        <h2>Contato</h2>
        <p class="subtitle">Preencha o formulário e retornamos em breve.</p>
        <form id="f" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
          <input name="nome" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <input name="telefone" placeholder="Telefone (opcional)" />
          <textarea name="mensagem" placeholder="Conte-nos sobre o projeto ou problema" required></textarea>
          <button class="btn btn--primary" type="submit">Enviar mensagem</button>
          <span id="fs" class="hint" role="status"></span>
        </form>
        <div style="margin-top:16px">
          <p><b>Telefone:</b> (19) 98171‑5233</p>
          <p><b>E-mail:</b> koreonteches@gmail.com</p>
        </div>
      </div>
      <aside class="card reveal" aria-label="Mapa e endereço">
        <h2>Atendimento online global</h2>
        <p class="subtitle">Disponíveis para projetos em qualquer lugar do mundo.</p>
        <div class="map-container">
          <img src="./assets/globo.png" alt="Globo representando atendimento mundial" class="world-map">
        </div>
      </aside>
    </section>
  `,
  privacidade: () => `
    <section class="wrap">
      <h2>Política de Privacidade</h2>
      <p class="subtitle">Respeitamos sua privacidade e tratamos dados conforme a LGPD.</p>
    </section>
  `
};

// roteador por hash (SPA)
function render(){
  const route = (location.hash.replace('#/','') || 'home').split('?')[0];
  const view = Pages[route] ? Pages[route]() : Pages.home();
  $('#app').innerHTML = view;
  // reveal on scroll
  const io = new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  // form handler
  const form = document.getElementById('f');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const status = document.getElementById('fs');
      status.textContent = 'Enviando...';
      try{
        const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers:{ 'Accept':'application/json' }});
        if(res.ok){ status.innerHTML = '<span class="ok">Mensagem enviada com sucesso!</span>'; form.reset(); }
        else{ status.innerHTML = '<span class="err">Não foi possível enviar. Tente novamente.</span>'; }
      }catch(err){ status.innerHTML = '<span class="err">Falha de rede. Verifique sua conexão.</span>'; }
    });
  }
  // acessibilidade: foco inicial
  $('#app').setAttribute('tabindex','-1'); $('#app').focus({preventScroll:true});
  window.scrollTo({top:0, behavior:'smooth'});
}
window.addEventListener('hashchange', render);
window.addEventListener('load', ()=>{ if(!location.hash) location.hash = '#/home'; render(); });