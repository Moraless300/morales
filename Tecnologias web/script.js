
document.addEventListener('DOMContentLoaded', () => {

  
  const hhh = document.getElementById('hhh');
  const menu = document.getElementById('menu');
  hhh.addEventListener('click', () => {
    menu.classList.toggle('show');
    hhh.classList.toggle('open');
  });

  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
  
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section');

  function onScrollActive() {
    const scrollPos = window.scrollY + 140; 
    let current = null;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }
  window.addEventListener('scroll', onScrollActive);
  onScrollActive();

  
  const form = document.getElementById('formContacto');
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const nombre = form.nombre.value.trim();
    const email  = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    if (!nombre || !email || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }
    alert('✅ Gracias por tu mensaje. Te contactaremos pronto.');
    form.reset();
  });

  
  const footerBtn = document.getElementById('footerBtn');
  const footerInfo = document.getElementById('footerInfo');
  let footerOpen = false;

  function openFooter(){
    footerInfo.hidden = false;
    footerBtn.classList.remove('flat');
    footerBtn.setAttribute('aria-expanded','true');
    footerOpen = true;
  }
  function closeFooter(){
    footerInfo.hidden = true;
    
    footerBtn.classList.add('flat');
    footerBtn.setAttribute('aria-expanded','false');
    footerOpen = false;
  }

  
  closeFooter();

  footerBtn.addEventListener('click', () => {
    if (footerOpen) closeFooter();
    else openFooter();
  });

  
  document.addEventListener('click', (e) => {
    const panel = document.querySelector('.floating-panel');
    if (!panel.contains(e.target) && footerOpen) {
      closeFooter();
    }
  });

  footerInfo.addEventListener('click', (e) => e.stopPropagation());

});
