// ═══════════════════════════════════════════════
// AETHER CONSULTING — Main JS
// ═══════════════════════════════════════════════

/* ── i18n Translations ─────────────────────────── */
const i18n = {
  es: {
    // Nav
    'nav.about':    'Nosotros',
    'nav.services': 'Servicios',
    'nav.sectors':  'Sectores',
    'nav.process':  'Proceso',
    'nav.contact':  'Contacto',
    'nav.cta':      'Hablemos',

    // Hero
    'hero.eyebrow':  'Intermediación Comercial · España',
    'hero.h1a':      'Conectamos',
    'hero.h1b':      'oportunidades.',
    'hero.h1c':      'Creamos valor.',
    'hero.sub':      'Asesoría especializada en intermediación comercial con perfil dual técnico y económico. Actuamos como puente entre compradores y vendedores.',
    'hero.cta1':     'Ver servicios',
    'hero.cta2':     'Contactar',
    'hero.stat1v':   '87k€',
    'hero.stat1l':   'Facturado en arranque',
    'hero.stat2v':   '200k€',
    'hero.stat2l':   'Objetivo 2025',
    'hero.stat3v':   '8–15%',
    'hero.stat3l':   'Comisión s/ operación',
    'hero.scroll':   'Scroll',

    // About
    'about.eyebrow': 'Quiénes somos',
    'about.h2':      'Perfil dual. Resultados reales.',
    'about.p':       'Aether Consulting nace de la combinación de formación en Economía e Ingeniería, aportando una visión única que pocos consultores pueden ofrecer.',
    'about.badge':   'Inicio Febrero 2025',
    'about.card.h3': 'Tracción real desde el día uno',
    'about.card.p':  '87.000€ facturados en las primeras semanas de actividad, con operaciones activas y nuevos contratos en negociación.',
    'about.f1.h':    'Perfil técnico-económico',
    'about.f1.p':    'Formación dual que permite analizar oportunidades tanto desde la viabilidad técnica como económica.',
    'about.f2.h':    'Independencia total',
    'about.f2.p':    'Sin intereses propietarios en las operaciones. Nuestros honorarios dependen del éxito del cliente.',
    'about.f3.h':    'Agilidad y cercanía',
    'about.f3.p':    'Estructura ágil sin burocracia, con atención directa del fundador en cada proyecto.',

    // Services
    'svc.eyebrow':   'Lo que hacemos',
    'svc.h2':        'Nuestros Servicios',
    'svc.p':         'Tres líneas de actividad complementarias para acompañarte en todas las fases de tu operación comercial.',
    'svc1.tag':      'Actividad principal',
    'svc1.h3':       'Intermediación Comercial',
    'svc1.p':        'Identificamos y cerramos operaciones comerciales actuando como representante activo de nuestros clientes en el mercado.',
    'svc1.plabel':   'Honorarios',
    'svc1.pval':     '8% – 15%',
    'svc1.psub':     'sobre valor de la operación',
    'svc1.l1':       'Prospección y cualificación de oportunidades',
    'svc1.l2':       'Representación y negociación comercial',
    'svc1.l3':       'Gestión de relaciones a largo plazo',
    'svc1.l4':       'Seguimiento hasta el cierre',
    'svc2.tag':      'Actividad secundaria',
    'svc2.h3':       'Ingeniería Técnica',
    'svc2.p':        'Informes técnicos, due diligence y supervisión de proyectos con criterio de ingeniero.',
    'svc2.plabel':   'Tarifa',
    'svc2.pval':     '200–400€/h',
    'svc2.psub':     'según complejidad del proyecto',
    'svc2.l1':       'Informes técnicos y due diligence',
    'svc2.l2':       'Especificaciones y compra de activos',
    'svc2.l3':       'Supervisión técnica de proyectos',
    'svc3.tag':      'Actividad secundaria',
    'svc3.h3':       'Consultoría Estratégica',
    'svc3.p':        'Planes de negocio, análisis de mercado y estrategias de crecimiento e internacionalización.',
    'svc3.plabel':   'Retainer / Proyecto',
    'svc3.pval':     '2.000–6.000€',
    'svc3.psub':     'al mes o por proyecto',
    'svc3.l1':       'Análisis de mercado y competencia',
    'svc3.l2':       'Estrategias de crecimiento e internacionalización',
    'svc3.l3':       'Planes de negocio e informes de viabilidad',

    // Process
    'proc.eyebrow':  'Metodología',
    'proc.h2':       'Cómo Trabajamos',
    'proc.p':        'Un proceso claro, transparente y orientado al resultado.',
    'proc1.h':       'Análisis inicial',
    'proc1.p':       'Estudiamos en detalle el encargo, el mercado y las oportunidades disponibles.',
    'proc2.h':       'Identificación',
    'proc2.p':       'Buscamos y cualificamos a las contrapartes más adecuadas para la operación.',
    'proc3.h':       'Negociación',
    'proc3.p':       'Actuamos como representante activo para conseguir las mejores condiciones.',
    'proc4.h':       'Cierre y seguimiento',
    'proc4.p':       'Acompañamos hasta la formalización del acuerdo y más allá.',

    // Sectors
    'sec.eyebrow':   'Mercados objetivo',
    'sec.h2':        'Sectores de Actuación',
    'sec.p':         'Experiencia y red de contactos en los sectores con mayor dinamismo comercial.',
    'sec1.h':        'Industria & Manufactura',
    'sec1.p':        'Maquinaria, componentes, materiales industriales y equipos de producción.',
    'sec2.h':        'Energía & Renovables',
    'sec2.p':        'Proyectos solares, eólicos, almacenamiento y eficiencia energética.',
    'sec3.h':        'Tecnología B2B',
    'sec3.p':        'Software empresarial, hardware especializado y servicios tecnológicos.',
    'sec4.h':        'PYMEs en Crecimiento',
    'sec4.p':        'Empresas que buscan expandir su cartera de clientes o acceder a nuevos mercados.',

    // Why
    'why.eyebrow':   'Por qué elegirnos',
    'why.h2':        'La diferencia Aether',
    'why.p':         'No somos un broker más. Somos un socio estratégico con piel en el juego.',
    'why1.h':        'Sin conflictos de interés',
    'why1.p':        'Trabajamos exclusivamente para el cliente. Sin participaciones en las empresas que intermediamos.',
    'why2.h':        'Criterio técnico + económico',
    'why2.p':        'La combinación de Ingeniería y Economía nos permite evaluar el negocio en toda su dimensión.',
    'why3.h':        'Honorarios alineados al éxito',
    'why3.p':        'Cobramos cuando el cliente obtiene resultados. Nuestro éxito depende del suyo.',
    'why4.h':        'Atención directa y personalizada',
    'why4.p':        'Acceso directo al fundador, sin intermediarios internos ni cuentas gestionadas por juniors.',
    'why.s1v':       '87k€',
    'why.s1l':       'facturados en el primer mes de operación',
    'why.s2v':       '200k€',
    'why.s2l':       'objetivo para 2025, proyección 410k€ en 2027',
    'why.s3v':       '100%',
    'why.s3l':       'independencia. Sin intereses en operaciones',

    // Contact
    'cont.eyebrow':  'Contacto',
    'cont.h2':       'Hablemos de tu proyecto',
    'cont.p':        'Cuéntanos en qué fase estás y estudiamos juntos cómo podemos ayudarte.',
    'cont.i1.h':     'Email',
    'cont.i2.h':     'Web',
    'cont.i3.h':     'Ubicación',
    'cont.i3.p':     'España (operaciones nacionales e internacionales)',
    'form.name':     'Nombre completo',
    'form.email':    'Email profesional',
    'form.company':  'Empresa',
    'form.service':  'Servicio de interés',
    'form.svc0':     'Selecciona un servicio',
    'form.svc1':     'Intermediación Comercial',
    'form.svc2':     'Ingeniería Técnica',
    'form.svc3':     'Consultoría Estratégica',
    'form.msg':      'Cuéntanos tu proyecto',
    'form.submit':   'Enviar mensaje',
    'form.success':  '¡Mensaje enviado! Te contactaremos en menos de 24 horas.',
    'form.legal':    'Al enviar este formulario aceptas nuestra política de privacidad.',

    // Footer
    'foot.desc':     'Intermediación comercial con perfil técnico y económico. Conectamos oportunidades, creamos valor.',
    'foot.nav':      'Navegación',
    'foot.services': 'Servicios',
    'foot.legal':    'Legal',
    'foot.privacy':  'Política de Privacidad',
    'foot.cookies':  'Política de Cookies',
    'foot.legal2':   'Aviso Legal',
    'foot.copy':     '© 2025 Aether Consulting. Todos los derechos reservados.',
    'cookie.text':   'Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas su uso.',
    'cookie.accept': 'Aceptar',
    'cookie.more':   'Más información',
  },
  en: {
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.sectors':  'Sectors',
    'nav.process':  'Process',
    'nav.contact':  'Contact',
    'nav.cta':      "Let's Talk",
    'hero.eyebrow':  'Commercial Intermediation · Spain',
    'hero.h1a':      'We connect',
    'hero.h1b':      'opportunities.',
    'hero.h1c':      'We create value.',
    'hero.sub':      'Specialized advisory in commercial intermediation with dual technical and economic expertise. We act as a bridge between buyers and sellers.',
    'hero.cta1':     'View services',
    'hero.cta2':     'Contact us',
    'hero.stat1v':   '€87k',
    'hero.stat1l':   'Billed at launch',
    'hero.stat2v':   '€200k',
    'hero.stat2l':   '2025 target',
    'hero.stat3v':   '8–15%',
    'hero.stat3l':   'Commission per deal',
    'hero.scroll':   'Scroll',
    'about.eyebrow': 'About us',
    'about.h2':      'Dual profile. Real results.',
    'about.p':       'Aether Consulting was born from the combination of Economics and Engineering training, providing a unique perspective that few consultants can offer.',
    'about.badge':   'Active since February 2025',
    'about.card.h3': 'Real traction from day one',
    'about.card.p':  '€87,000 billed in the first weeks of activity, with active operations and new contracts under negotiation.',
    'about.f1.h':    'Technical-economic profile',
    'about.f1.p':    'Dual training that allows us to analyse opportunities from both technical feasibility and economic viability.',
    'about.f2.h':    'Full independence',
    'about.f2.p':    'No ownership interests in the operations we intermediate. Our fees depend on the client\'s success.',
    'about.f3.h':    'Agility and closeness',
    'about.f3.p':    'Agile structure without bureaucracy, with direct attention from the founder on every project.',
    'svc.eyebrow':   'What we do',
    'svc.h2':        'Our Services',
    'svc.p':         'Three complementary lines of activity to support you at every stage of your commercial operation.',
    'svc1.tag':      'Core activity',
    'svc1.h3':       'Commercial Intermediation',
    'svc1.p':        'We identify and close commercial deals acting as an active representative of our clients in the market.',
    'svc1.plabel':   'Fee',
    'svc1.pval':     '8% – 15%',
    'svc1.psub':     'of deal value',
    'svc1.l1':       'Prospecting and qualifying opportunities',
    'svc1.l2':       'Commercial representation and negotiation',
    'svc1.l3':       'Long-term relationship management',
    'svc1.l4':       'End-to-end deal closing',
    'svc2.tag':      'Secondary activity',
    'svc2.h3':       'Technical Engineering',
    'svc2.p':        'Technical reports, due diligence and project supervision with an engineering mindset.',
    'svc2.plabel':   'Rate',
    'svc2.pval':     '€200–400/h',
    'svc2.psub':     'depending on project complexity',
    'svc2.l1':       'Technical reports and due diligence',
    'svc2.l2':       'Asset specifications and procurement',
    'svc2.l3':       'Technical project supervision',
    'svc3.tag':      'Secondary activity',
    'svc3.h3':       'Strategic Consulting',
    'svc3.p':        'Business plans, market analysis and growth and internationalisation strategies.',
    'svc3.plabel':   'Retainer / Project',
    'svc3.pval':     '€2,000–6,000',
    'svc3.psub':     'per month or per project',
    'svc3.l1':       'Market and competitive analysis',
    'svc3.l2':       'Growth and internationalisation strategies',
    'svc3.l3':       'Business plans and feasibility reports',
    'proc.eyebrow':  'Methodology',
    'proc.h2':       'How We Work',
    'proc.p':        'A clear, transparent, results-oriented process.',
    'proc1.h':       'Initial analysis',
    'proc1.p':       'We study in detail the assignment, the market and the available opportunities.',
    'proc2.h':       'Identification',
    'proc2.p':       'We search and qualify the most suitable counterparts for the operation.',
    'proc3.h':       'Negotiation',
    'proc3.p':       'We act as active representative to secure the best possible terms.',
    'proc4.h':       'Closing & follow-up',
    'proc4.p':       'We accompany you through the formalisation of the agreement and beyond.',
    'sec.eyebrow':   'Target markets',
    'sec.h2':        'Sectors We Serve',
    'sec.p':         'Experience and contact network in the most commercially dynamic sectors.',
    'sec1.h':        'Industry & Manufacturing',
    'sec1.p':        'Machinery, components, industrial materials and production equipment.',
    'sec2.h':        'Energy & Renewables',
    'sec2.p':        'Solar, wind, storage projects and energy efficiency solutions.',
    'sec3.h':        'B2B Technology',
    'sec3.p':        'Enterprise software, specialised hardware and technology services.',
    'sec4.h':        'Growing SMEs',
    'sec4.p':        'Companies looking to expand their client portfolio or access new markets.',
    'why.eyebrow':   'Why choose us',
    'why.h2':        'The Aether Difference',
    'why.p':         'We are not just another broker. We are a strategic partner with skin in the game.',
    'why1.h':        'No conflicts of interest',
    'why1.p':        'We work exclusively for the client. No ownership in the companies we intermediate.',
    'why2.h':        'Technical + economic expertise',
    'why2.p':        'The combination of Engineering and Economics allows us to evaluate the business in its full dimension.',
    'why3.h':        'Success-aligned fees',
    'why3.p':        'We charge when the client gets results. Our success depends on yours.',
    'why4.h':        'Direct, personalised attention',
    'why4.p':        'Direct access to the founder, without internal intermediaries or junior-managed accounts.',
    'why.s1v':       '€87k',
    'why.s1l':       'billed in the first month of operation',
    'why.s2v':       '€200k',
    'why.s2l':       '2025 target, projected €410k by 2027',
    'why.s3v':       '100%',
    'why.s3l':       'independence. No interests in operations',
    'cont.eyebrow':  'Contact',
    'cont.h2':       "Let's Talk About Your Project",
    'cont.p':        'Tell us where you are and we will study together how we can help.',
    'cont.i1.h':     'Email',
    'cont.i2.h':     'Website',
    'cont.i3.h':     'Location',
    'cont.i3.p':     'Spain (domestic and international operations)',
    'form.name':     'Full name',
    'form.email':    'Professional email',
    'form.company':  'Company',
    'form.service':  'Service of interest',
    'form.svc0':     'Select a service',
    'form.svc1':     'Commercial Intermediation',
    'form.svc2':     'Technical Engineering',
    'form.svc3':     'Strategic Consulting',
    'form.msg':      'Tell us about your project',
    'form.submit':   'Send message',
    'form.success':  'Message sent! We will contact you within 24 hours.',
    'form.legal':    'By submitting this form you accept our privacy policy.',
    'foot.desc':     'Commercial intermediation with technical and economic expertise. We connect opportunities, we create value.',
    'foot.nav':      'Navigation',
    'foot.services': 'Services',
    'foot.legal':    'Legal',
    'foot.privacy':  'Privacy Policy',
    'foot.cookies':  'Cookie Policy',
    'foot.legal2':   'Legal Notice',
    'foot.copy':     '© 2025 Aether Consulting. All rights reserved.',
    'cookie.text':   'We use cookies to improve your experience. By continuing to browse you accept their use.',
    'cookie.accept': 'Accept',
    'cookie.more':   'Learn more',
  }
};

/* ── State ─────────────────────────────────────── */
let currentLang = localStorage.getItem('aether-lang') || 'es';

/* ── t() helper ────────────────────────────────── */
function t(key) { return i18n[currentLang][key] || i18n['es'][key] || key; }

/* ── Apply translations ─────────────────────────── */
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  // Update lang buttons
  document.querySelectorAll('.nav__lang button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang;
  localStorage.setItem('aether-lang', currentLang);
}

function setLang(lang) { currentLang = lang; applyLang(); }

/* ── Nav scroll effect ──────────────────────────── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile menu ────────────────────────────────── */
const hamburger = document.querySelector('.hamburger');
const navLinks   = document.querySelector('.nav__links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const open = navLinks.classList.contains('open');
  hamburger.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
  hamburger.querySelectorAll('span')[1].style.opacity  = open ? '0' : '';
  hamburger.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
// Close on link click
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}));

/* ── Scroll animations ──────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

/* ── Contact form ───────────────────────────────── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
    // Simulate async send
    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      document.getElementById('formSuccess').textContent = t('form.success');
    }, 1200);
  });
}

/* ── Cookie banner ──────────────────────────────── */
const cookie = document.getElementById('cookieBanner');
if (!localStorage.getItem('aether-cookies')) {
  setTimeout(() => cookie.classList.add('show'), 1500);
}
document.getElementById('cookieAccept')?.addEventListener('click', () => {
  cookie.classList.remove('show');
  localStorage.setItem('aether-cookies', '1');
});

/* ── Active nav link on scroll ───────────────────── */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav__links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});

/* ── Init ───────────────────────────────────────── */
applyLang();
