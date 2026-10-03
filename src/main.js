const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
const topbar = document.querySelector('.topbar');
const topbarDismiss = topbar?.querySelector('button');

topbarDismiss?.addEventListener('click', () => {
  topbar.remove();
});

function setMenuOpen(open) {
  nav?.classList.toggle('open', open);
  if (!menuButton) return;
  menuButton.textContent = open ? '×' : '☰';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuButton?.addEventListener('click', () => setMenuOpen(!nav?.classList.contains('open')));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    setMenuOpen(false);
    menuButton?.focus();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  });
});
