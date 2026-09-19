import Script from 'next/script';

const siteMarkup = String.raw`
<div class="site-grain" aria-hidden="true"></div>
<header class="header">
  <a class="brand" href="#inicio" aria-label="Matheus Martins, início">
    <span class="brand-mark">MM</span><span>MATHEUS<br />MARTINS</span>
  </a>
  <button class="menu-button" aria-expanded="false" aria-controls="nav">Menu <span></span></button>
  <nav id="nav" class="nav" aria-label="Navegação principal">
    <a href="#sobre">Sobre</a><a href="#metodo">Método</a><a href="#conteudos">Conteúdos</a>
    <a class="nav-cta" href="https://www.instagram.com/treinadormatheusmartins/" target="_blank" rel="noreferrer">Solicitar avaliação <i>↗</i></a>
  </nav>
</header>

<main>
  <section class="hero" id="inicio">
    <div class="hero-copy hero-intro">
      <p class="eyebrow"><span></span> Treinamento individual · CREF 211765-G/SP</p>
      <h1><span class="hero-line">PRECISÃO NO</span><span class="hero-line"><em>MOVIMENTO.</em></span></h1>
      <p class="hero-description">Avaliação criteriosa, estratégia individual e acompanhamento próximo para transformar treino em evolução consistente.</p>
      <a class="button button-primary" href="https://www.instagram.com/treinadormatheusmartins/" target="_blank" rel="noreferrer">Solicitar avaliação <b>→</b></a>
    </div>
    <div class="hero-image hero-photo">
      <img src="/assets/matheus-hero-clean-v2.jpg" alt="Matheus Martins de braços cruzados em uma academia" data-parallax />
      <div class="hero-image-shade"></div>
      <p class="vertical-copy">ATENDIMENTO INDIVIDUAL</p>
    </div>
    <div class="hero-meta hero-intro"><span>01 — 06</span><span>Role para descobrir</span><span class="scroll-line"></span></div>
  </section>

  <section class="intro section" id="sobre">
    <div class="section-label reveal"><span>01</span> A assinatura do trabalho</div>
    <div class="intro-grid">
      <h2 class="display reveal">EXCELÊNCIA É<br /><em>MÉTODO.</em><br />NÃO ACASO.</h2>
      <div class="intro-copy reveal">
        <p>Matheus Martins é profissional de Educação Física formado pela UNESP. Seu trabalho combina ciência aplicada, leitura individual do contexto e presença em cada etapa do processo.</p>
        <p>Cada planejamento nasce de uma avaliação real: objetivos, rotina, histórico e resposta ao treino. Sem fórmulas prontas — com decisões técnicas que fazem sentido para você.</p>
        <a class="text-link" href="https://www.instagram.com/treinadormatheusmartins/" target="_blank" rel="noreferrer">Conhecer a abordagem <span>↗</span></a>
      </div>
    </div>
    <div class="intro-image reveal image-reveal"><img src="/assets/matheus-pesquisa-2026.jpg" alt="Matheus Martins apresentando pesquisa acadêmica em atividade física e saúde" loading="lazy" data-parallax /><div class="image-caption">Formação, pesquisa e prática <span>2026</span></div></div>
  </section>

  <section class="principles section">
    <div class="principles-top reveal"><p class="eyebrow"><span></span> A entrega</p><p>Um serviço de alto padrão se reconhece nos detalhes: diagnóstico preciso, planejamento claro e acompanhamento que evolui com você.</p></div>
    <div class="principle-list">
      <article class="principle reveal"><span>01</span><h3>DIAGNÓSTICO<br /><em>ANTES DA PRESCRIÇÃO.</em></h3><p>Objetivos, rotina, histórico e momento atual considerados antes de definir qualquer estratégia.</p></article>
      <article class="principle reveal"><span>02</span><h3>ESTRATÉGIA<br /><em>EM CADA SESSÃO.</em></h3><p>Exercícios, volume e intensidade organizados com intenção, coerência e direção.</p></article>
      <article class="principle reveal"><span>03</span><h3>EVOLUÇÃO<br /><em>SOB ACOMPANHAMENTO.</em></h3><p>Leitura contínua da resposta ao treino para refinar o plano com precisão.</p></article>
    </div>
  </section>

  <section class="method section" id="metodo">
    <div class="method-image reveal image-reveal"><img src="/assets/matheus-treino-2026.jpg" alt="Matheus Martins concentrado durante uma sessão de treinamento" loading="lazy" data-parallax /></div>
    <div class="method-content">
      <div class="section-label reveal"><span>02</span> A experiência</div>
      <h2 class="display reveal">UM PROCESSO<br /><em>DESENHADO</em><br />PARA VOCÊ.</h2>
      <div class="steps">
        <article class="step reveal"><span>01</span><div><h3>Avaliação individual</h3><p>Objetivos, histórico, rotina e momento atual analisados com profundidade.</p></div></article>
        <article class="step reveal"><span>02</span><div><h3>Estratégia personalizada</h3><p>Treino estruturado com critérios claros de seleção, volume, intensidade e progressão.</p></div></article>
        <article class="step reveal"><span>03</span><div><h3>Acompanhamento próximo</h3><p>Leitura contínua da resposta ao treino e ajustes conduzidos com precisão.</p></div></article>
        <article class="step reveal"><span>04</span><div><h3>Evolução consistente</h3><p>Direção técnica para avançar com clareza, qualidade e continuidade.</p></div></article>
      </div>
    </div>
  </section>

  <section class="journal section" id="conteudos">
    <div class="journal-heading"><div class="section-label reveal"><span>03</span> Conhecimento</div><h2 class="display reveal">CRITÉRIO PARA<br /><em>TREINAR MELHOR.</em></h2><p class="reveal">Conteúdo técnico traduzido com clareza para quem deseja compreender o próprio processo e tomar decisões mais conscientes.</p></div>
    <div class="featured-article reveal">
      <div class="featured-copy"><p class="article-tag">TREINAMENTO · 6 MIN</p><h3>O VALOR DE UMA ORIENTAÇÃO REALMENTE INDIVIDUAL</h3><p>Orientação qualificada é muito mais do que receber uma ficha: é ter contexto, progressão e decisões ajustadas ao que o seu corpo e a sua rotina permitem.</p><a class="text-link" href="#contato">Ler conteúdo <span>→</span></a></div>
    </div>
    <div class="article-grid">
      <article class="article-card reveal"><span class="article-index">01</span><p class="article-tag">PERFORMANCE · EM BREVE</p><h3>CONSISTÊNCIA COM DIREÇÃO: O QUE SUSTENTA A EVOLUÇÃO</h3><a href="#contato" aria-label="Ver conteúdo sobre consistência com direção">→</a></article>
      <article class="article-card reveal"><span class="article-index">02</span><p class="article-tag">HIPERTROFIA · EM BREVE</p><h3>PROGRESSÃO DE CARGA: QUANDO AVANÇAR E O QUE OBSERVAR</h3><a href="#contato" aria-label="Ver conteúdo sobre progressão de carga">→</a></article>
      <article class="article-card reveal"><span class="article-index">03</span><p class="article-tag">CONDICIONAMENTO · EM BREVE</p><h3>COMO CONSTRUIR UM TREINO QUE RESPEITA SUA ROTINA</h3><a href="#contato" aria-label="Ver conteúdo sobre treinamento e rotina">→</a></article>
    </div>
  </section>

  <section class="closing" id="contato">
    <p class="eyebrow reveal"><span></span> Atendimento presencial e on-line</p>
    <h2 class="reveal">EXCELÊNCIA<br />COMEÇA NA<br /><em>AVALIAÇÃO.</em></h2>
    <a class="button button-light reveal" href="https://www.instagram.com/treinadormatheusmartins/" target="_blank" rel="noreferrer">Solicitar avaliação <b>↗</b></a>
  </section>
</main>

<footer class="footer"><a class="brand" href="#inicio"><span class="brand-mark">MM</span><span>MATHEUS<br />MARTINS</span></a><div><p>Treinamento individual</p><p>CREF 211765-G/SP</p></div><a href="https://www.instagram.com/treinadormatheusmartins/" target="_blank" rel="noreferrer">Instagram ↗</a><p>© 2026</p></footer>
`;

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
