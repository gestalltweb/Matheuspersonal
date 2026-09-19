const root = document.documentElement;
const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

root.classList.add('motion-ready');

menu?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open') ?? false;
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.principle, .step, .article-card').forEach((item, index) => {
  item.style.setProperty('--delay', `${Math.min(index % 4, 3) * 70}ms`);
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const parallaxImages = [...document.querySelectorAll('[data-parallax]')];
let parallaxFrame;

function updateParallax() {
  parallaxFrame = undefined;
  if (reducedMotion.matches || window.innerWidth <= 760) {
    parallaxImages.forEach((image) => image.style.removeProperty('--parallax-y'));
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  parallaxImages.forEach((image) => {
    const rect = image.parentElement.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const imageCenter = rect.top + rect.height / 2;
    const offset = Math.max(-10, Math.min(10, (viewportCenter - imageCenter) * 0.025));
    image.style.setProperty('--parallax-y', `${offset}px`);
  });
}

function requestParallax() {
  if (parallaxFrame) return;
  parallaxFrame = requestAnimationFrame(updateParallax);
}

window.addEventListener('scroll', requestParallax, { passive: true });
window.addEventListener('resize', requestParallax, { passive: true });
reducedMotion.addEventListener?.('change', requestParallax);
requestParallax();

