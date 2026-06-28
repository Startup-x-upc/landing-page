// ============================================
// INTERNACIONALIZACIÓN - ChapaTuRuta Landing
// ============================================

const translations = {
  es: {
    // Header
    nav_how: "¿Cómo funciona?",
    nav_pricing: "Tarifas",
    nav_testimonials: "Testimonios",
    nav_team: "Equipo",
    nav_want_ride: "🛺 Quiero viajar",
    nav_want_drive: "🚗 Quiero manejar",
    nav_register: "Registrarse",
    menu_open: "Abrir menú",
    menu_close: "Cerrar menú",

    // Hero
    hero_badge: "Ciudades intermedias del Perú",
    hero_title: "Tu mototaxi, cuando lo necesitas",
    hero_desc: "Conectamos pasajeros con motaxistas verificados en tu ciudad. Precio justo, conductor seguro, disponible ahora.",
    hero_btn_ride: "Quiero viajar",
    hero_btn_drive: "Quiero manejar",
    hero_login: "¿Ya tienes cuenta?",
    hero_login_link: "Inicia sesión",

    // Stats
    stats_drivers: "Conductores",
    stats_cities: "Ciudades",
    stats_satisfaction: "Satisfacción",

    // How it works
    how_badge: "Así de simple",
    how_title: "¿Cómo funciona?",
    how_subtitle: "En menos de 2 minutos estás en tu destino",
    how_tab_passenger: "Como pasajero",
    how_tab_driver: "Como conductor",
    how_step1_title: "Solicita tu viaje",
    how_step1_text: "Indica origen y destino. El precio se calcula automáticamente.",
    how_step2_title: "Tu conductor acepta",
    how_step2_text: "Un conductor verificado recibe tu solicitud y confirma el viaje.",
    how_step3_title: "Viaja seguro",
    how_step3_text: "Llega a tu destino con precio fijo. Califica tu experiencia.",
    how_driver_subtitle: "Flujo del conductor",
    how_driver1_title: "Regístrate",
    how_driver1_text: "Crea tu cuenta y sube tus documentos.",
    how_driver2_title: "Actívate",
    how_driver2_text: "Enciende tu disponibilidad y apareces en el mapa.",
    how_driver3_title: "Recibe carreras",
    how_driver3_text: "Acepta solicitudes cercanas y gana por cada viaje.",

    // Benefits
    benefits_badge: "Para todos",
    benefits_title: "Beneficios por perfil",
    benefit_passenger_title: "Para pasajeros",
    benefit_passenger_1: "Conductores verificados con brevete y SOAT",
    benefit_passenger_2: "Precio estimado antes de viajar",
    benefit_passenger_3: "Calificaciones y reseñas reales",
    benefit_passenger_4: "Disponibilidad constante 24/7",
    benefit_passenger_btn: "Quiero viajar",
    benefit_driver_title: "Para conductores",
    benefit_driver_1: "Conductores verificados con brevete y SOAT",
    benefit_driver_2: "Precio estimado antes de viajar",
    benefit_driver_3: "Calificaciones y reseñas reales",
    benefit_driver_4: "Disponibilidad constante 24/7",
    benefit_driver_btn: "Quiero manejar",

    // Testimonials
    test_badge: "Comunidad real",
    test_title: "Lo que dicen nuestros usuarios",
    test1_text: "\"Antes perdía 20 min esperando en la calle. Ahora en 2 minutos tengo mi moto. ¡Impresionante!\"",
    test1_name: "Martín G.",
    test1_location: "Talara, Piura",
    test1_role: "Pasajero",
    test2_text: "\"Mis ganancias subieron 30%. Sé dónde hay demanda y no pierdo tiempo dando vueltas en vacío.\"",
    test2_name: "Carlos R.",
    test2_location: "Huarmey, Ancash",
    test2_role: "Conductor",
    test3_text: "\"Me da mucha seguridad saber el nombre y calificación del conductor antes de subir.\"",
    test3_name: "Raúl M.",
    test3_location: "Casma, Ancash",
    test3_role: "Pasajero",

    // Team
    team_badge: "El equipo",
    team_title: "Conoce a CTR Technologies",
    team_subtitle: "El equipo detrás de ChapaTuRuta",
    team_role: "Estudiante de ingeniería de software",
    team_andy_bio: "Soy estudiante de la carrera de Ingeniería de Software, con gran interés en el desarrollo de soluciones tecnológicas innovadoras que contribuyan a resolver problemas reales. Me encuentro en constante proceso de aprendizaje y fortalecimiento de mis conocimientos en el área de programación y desarrollo de software. Poseo sólidos conocimientos en lenguajes de programación como C++ y Python, además de experiencia en el manejo de SQL, Excel, Power BI y mecanografía. Me interesa especialmente seguir ampliando mis habilidades en el desarrollo de software, bases de datos y análisis de información. Considero importante la creación de soluciones funcionales que aporten valor y mejoren la experiencia de los usuarios.",
    team_dalila_bio: "Soy estudiante de Ingeniería de Software, he programado en C#, C++, PHP, Java y Python, además manejo de bases de datos relacionales. También he trabajado con Git y metodologías ágiles como Scrum, lo cual me ha ayudado a organizarme mejor y a trabajar en equipo con más fluidez. Me interesa mucho el desarrollo backend, porque me gusta entender la lógica detrás de las cosas, cómo se procesan los datos y cómo se asegura que todo funcione correctamente. También me gusta colaborar en el frontend, porque entiendo que un buen producto requiere que ambas partes trabajen en armonía.",
    team_jesus_bio: "Soy estudiante de Ingeniería de Software y desarrollador full-stack orientado al emprendimiento. Tengo experiencia práctica liderando la creación de plataformas SaaS y sistemas de gestión enfocados en la transformación digital de negocios locales. Me especializo en llevar proyectos desde la arquitectura y el prototipado hasta el lanzamiento, utilizando tecnologías como Next.js, FastAPI y Tailwind CSS, etc. Siempre buscando crear soluciones tecnológicas escalables y centradas en el usuario.",
    team_eduardo_bio: "Soy estudiante de la carrera de ingeniería de software de 5to ciclo en la Universidad Peruana de Ciencias Aplicadas, tengo conocimientos en como C++, Python, CSS, JavaScript. Manejo he implemento directamente con Git y utilizo metodologías Ágiles como Scrum. En si me interesa mucho trabajar en equipo en diferentes proyectos debido a las diferentes experiencias que trae ello tanto así como el resolver problemas conjuntos y diseñar soluciones innovadoras.",
    team_sebastian_bio: "Soy estudiante de Ingeniería de Software y desarrollador full-stack. Tengo experiencia construyendo plataformas web completas — desde la arquitectura hasta el despliegue — utilizando tecnologías como React, Node.js, Express y PostgreSQL. Me apasiona entender el código en profundidad, no solo hacerlo funcionar, y busco siempre crear soluciones escalables que resuelvan problemas reales de negocio. He programado en C#, C++, PHP, Java y Python, además manejo de bases de datos relacionales.",

    // About the Team
    about_team_badge: "Sobre el equipo",
    about_team_title: "Las personas detrás de ChapaTuRuta",
    about_team_subtitle: "Somos 5 estudiantes de Ingeniería de Software de la UPC comprometidos con transformar la movilidad urbana.",
    about_team_role: "Ing. de Software",
    about_team_video_label: "Conoce al equipo · 6:25 min",

    // Pricing
    pricing_badge: "Precios claros",
    pricing_title: "¿Cuánto cuesta el viaje?",
    pricing_subtitle: "El precio se calcula automáticamente según la distancia.<br>Sin sorpresas.",
    pricing_formula_label: "Fórmula de cálculo",
    pricing_formula_base_desc: "Tarifa base",
    pricing_formula_km_desc: "Precio por km",
    pricing_formula_min_desc: "Mínimo",
    pricing_route1_name: "Jr. Castilla → Mercado",
    pricing_route2_name: "Terminal → Plaza de Armas",
    pricing_route3_name: "Colegio → Hospital",
    pricing_route4_name: "Av. Grau → Jr. Unión",
    pricing_tag_min: "Precio mínimo aplicado",
    pricing_tag_calc: "Precio calculado",
    pricing_cta: "Empieza ahora, es gratis",

    // Footer
    footer_terms: "Términos",
    footer_privacy: "Privacidad",
    footer_contact: "Contacto",

    // Video del producto
    video_badge: "Sobre el producto",
    video_title: "Conoce ChapaTuRuta",
    video_subtitle: "Ve cómo conectamos pasajeros y conductores en tu ciudad",
    video_duration: "Reproducir video · 2:17 min",

    // CTA
    cta_title: "¿Listo para empezar?",
    cta_text: "Únete a los pasajeros y conductores que ya están usando ChapaTuRuta en su ciudad. Registro gratuito, sin compromisos.",
    cta_btn_ride: "🛺 Quiero viajar",
    cta_btn_drive: "🚗 Quiero manejar",
    cta_login: "¿Ya tienes cuenta?",
    cta_login_link: "Inicia sesión",
  },

  en: {
    // Header
    nav_how: "How it works?",
    nav_pricing: "Pricing",
    nav_testimonials: "Testimonials",
    nav_team: "Team",
    nav_want_ride: "🛺 I want to ride",
    nav_want_drive: "🚗 I want to drive",
    nav_register: "Sign up",
    menu_open: "Open menu",
    menu_close: "Close menu",

    // Hero
    hero_badge: "Mid-size cities in Peru",
    hero_title: "Your mototaxi, when you need it",
    hero_desc: "We connect passengers with verified mototaxi drivers in your city. Fair price, safe driver, available now.",
    hero_btn_ride: "I want to ride",
    hero_btn_drive: "I want to drive",
    hero_login: "Already have an account?",
    hero_login_link: "Sign in",

    // Stats
    stats_drivers: "Drivers",
    stats_cities: "Cities",
    stats_satisfaction: "Satisfaction",

    // How it works
    how_badge: "That simple",
    how_title: "How does it work?",
    how_subtitle: "In less than 2 minutes you're at your destination",
    how_tab_passenger: "As a passenger",
    how_tab_driver: "As a driver",
    how_step1_title: "Request your ride",
    how_step1_text: "Enter origin and destination. The price is calculated automatically.",
    how_step2_title: "Your driver accepts",
    how_step2_text: "A verified driver receives your request and confirms the trip.",
    how_step3_title: "Ride safely",
    how_step3_text: "Arrive at your destination with a fixed price. Rate your experience.",
    how_driver_subtitle: "Driver flow",
    how_driver1_title: "Sign up",
    how_driver1_text: "Create your account and upload your documents.",
    how_driver2_title: "Go online",
    how_driver2_text: "Turn on your availability and appear on the map.",
    how_driver3_title: "Get rides",
    how_driver3_text: "Accept nearby requests and earn for every trip.",

    // Benefits
    benefits_badge: "For everyone",
    benefits_title: "Benefits by profile",
    benefit_passenger_title: "For passengers",
    benefit_passenger_1: "Verified drivers with license and insurance",
    benefit_passenger_2: "Estimated price before riding",
    benefit_passenger_3: "Real ratings and reviews",
    benefit_passenger_4: "Constant availability 24/7",
    benefit_passenger_btn: "I want to ride",
    benefit_driver_title: "For drivers",
    benefit_driver_1: "Verified drivers with license and insurance",
    benefit_driver_2: "Estimated price before the trip",
    benefit_driver_3: "Real ratings and reviews",
    benefit_driver_4: "Constant availability 24/7",
    benefit_driver_btn: "I want to drive",

    // Testimonials
    test_badge: "Real community",
    test_title: "What our users say",
    test1_text: "\"I used to wait 20 min on the street. Now in 2 minutes I have my moto. Incredible!\"",
    test1_name: "Martín G.",
    test1_location: "Talara, Piura",
    test1_role: "Passenger",
    test2_text: "\"My earnings went up 30%. I know where demand is and I don't waste time driving around empty.\"",
    test2_name: "Carlos R.",
    test2_location: "Huarmey, Ancash",
    test2_role: "Driver",
    test3_text: "\"It gives me great peace of mind to know the driver's name and rating before getting in.\"",
    test3_name: "Raúl M.",
    test3_location: "Casma, Ancash",
    test3_role: "Passenger",

    // Team
    team_badge: "The team",
    team_title: "Meet CTR Technologies",
    team_subtitle: "The team behind ChapaTuRuta",
    team_role: "Software engineering student",
    team_andy_bio: "I am a Software Engineering student with a strong interest in developing innovative technological solutions that help solve real problems. I am constantly learning and strengthening my knowledge in programming and software development. I have solid skills in languages such as C++ and Python, as well as experience with SQL, Excel, Power BI and touch typing. I am especially interested in expanding my abilities in software development, databases and data analysis. I believe in creating functional solutions that add value and improve the user experience.",
    team_dalila_bio: "I am a Software Engineering student. I have programmed in C#, C++, PHP, Java and Python, and I manage relational databases. I have also worked with Git and agile methodologies like Scrum, which has helped me stay organized and work more fluidly in teams. I am very interested in backend development because I enjoy understanding the logic behind things — how data is processed and how everything is kept working correctly. I also enjoy collaborating on the frontend, as I understand that a good product requires both sides working in harmony.",
    team_jesus_bio: "I am a Software Engineering student and entrepreneurship-driven full-stack developer. I have hands-on experience leading the creation of SaaS platforms and management systems focused on the digital transformation of local businesses. I specialize in taking projects from architecture and prototyping all the way to launch, using technologies like Next.js, FastAPI and Tailwind CSS. Always looking to build scalable, user-centered technological solutions.",
    team_eduardo_bio: "I am a 5th-cycle Software Engineering student at Universidad Peruana de Ciencias Aplicadas. I have knowledge in C++, Python, CSS and JavaScript. I work directly with Git and use agile methodologies like Scrum. I am very interested in teamwork on different projects because of the diverse experiences it brings, as well as solving problems together and designing innovative solutions.",
    team_sebastian_bio: "I am a Software Engineering student and full-stack developer. I have experience building complete web platforms — from architecture to deployment — using technologies such as React, Node.js, Express and PostgreSQL. I am passionate about understanding code in depth, not just making it work, and I always seek to create scalable solutions that solve real business problems. I have programmed in C#, C++, PHP, Java and Python, and I manage relational databases.",

    // About the Team
    about_team_badge: "About the Team",
    about_team_title: "The people behind ChapaTuRuta",
    about_team_subtitle: "We are 5 Software Engineering students from UPC committed to transforming urban mobility.",
    about_team_role: "Software Eng. Student",
    about_team_video_label: "Meet the team · 6:25 min",

    // Pricing
    pricing_badge: "Clear pricing",
    pricing_title: "How much does the ride cost?",
    pricing_subtitle: "The price is calculated automatically based on distance.<br>No surprises.",
    pricing_formula_label: "Calculation formula",
    pricing_formula_base_desc: "Base fare",
    pricing_formula_km_desc: "Price per km",
    pricing_formula_min_desc: "Minimum",
    pricing_route1_name: "Jr. Castilla → Market",
    pricing_route2_name: "Terminal → Main Square",
    pricing_route3_name: "School → Hospital",
    pricing_route4_name: "Av. Grau → Jr. Unión",
    pricing_tag_min: "Minimum price applied",
    pricing_tag_calc: "Calculated price",
    pricing_cta: "Get started, it's free",

    // Footer
    footer_terms: "Terms",
    footer_privacy: "Privacy",
    footer_contact: "Contact",

    // Video product
    video_badge: "About the Product",
    video_title: "Meet ChapaTuRuta",
    video_subtitle: "See how we connect passengers and drivers in your city",
    video_duration: "Play video · 2:17 min",

    // CTA
    cta_title: "Ready to get started?",
    cta_text: "Join the passengers and drivers already using ChapaTuRuta in their city. Free registration, no commitments.",
    cta_btn_ride: "🛺 I want to ride",
    cta_btn_drive: "🚗 I want to drive",
    cta_login: "Already have an account?",
    cta_login_link: "Sign in",
  }
};

// ============================================
// MOTOR DE TRADUCCIÓN
// ============================================

let currentLang = 'es';

function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;

  // Helper
  const set = (sel, key, attr = 'textContent') => {
    const el = document.querySelector(sel);
    if (el && t[key] !== undefined) {
      if (attr === 'textContent') el.textContent = t[key];
      else if (attr === 'innerHTML') el.innerHTML = t[key];
      else el.setAttribute(attr, t[key]);
    }
  };
  const setAll = (sel, key, attr = 'textContent') => {
    document.querySelectorAll(sel).forEach(el => {
      if (t[key] !== undefined) {
        if (attr === 'textContent') el.textContent = t[key];
        else el.setAttribute(attr, t[key]);
      }
    });
  };

  // ---------- HEADER ----------
  set('[data-i18n="nav_how"]', 'nav_how');
  set('[data-i18n="nav_pricing"]', 'nav_pricing');
  set('[data-i18n="nav_testimonials"]', 'nav_testimonials');
  set('[data-i18n="nav_team"]', 'nav_team');
  set('[data-i18n="nav_want_ride"]', 'nav_want_ride');
  set('[data-i18n="nav_want_drive"]', 'nav_want_drive');
  set('[data-i18n="nav_register"]', 'nav_register');
  document.querySelectorAll('[data-i18n-aria="menu_open"]').forEach(el => el.setAttribute('aria-label', t['menu_open']));
  document.querySelectorAll('[data-i18n-aria="menu_close"]').forEach(el => el.setAttribute('aria-label', t['menu_close']));

  // ---------- HERO ----------
  set('[data-i18n="hero_badge"]', 'hero_badge');
  set('[data-i18n="hero_title"]', 'hero_title');
  set('[data-i18n="hero_desc"]', 'hero_desc');
  set('[data-i18n="hero_btn_ride"]', 'hero_btn_ride', 'innerHTML');
  set('[data-i18n="hero_btn_drive"]', 'hero_btn_drive', 'innerHTML');
  set('[data-i18n="hero_login"]', 'hero_login');
  set('[data-i18n="hero_login_link"]', 'hero_login_link');

  // ---------- STATS ----------
  set('[data-i18n="stats_drivers"]', 'stats_drivers');
  set('[data-i18n="stats_cities"]', 'stats_cities');
  set('[data-i18n="stats_satisfaction"]', 'stats_satisfaction');

  // ---------- HOW IT WORKS ----------
  set('[data-i18n="how_badge"]', 'how_badge');
  set('[data-i18n="how_title"]', 'how_title');
  set('[data-i18n="how_subtitle"]', 'how_subtitle');
  set('[data-i18n="how_tab_passenger"]', 'how_tab_passenger');
  set('[data-i18n="how_tab_driver"]', 'how_tab_driver');
  set('[data-i18n="how_step1_title"]', 'how_step1_title');
  set('[data-i18n="how_step1_text"]', 'how_step1_text');
  set('[data-i18n="how_step2_title"]', 'how_step2_title');
  set('[data-i18n="how_step2_text"]', 'how_step2_text');
  set('[data-i18n="how_step3_title"]', 'how_step3_title');
  set('[data-i18n="how_step3_text"]', 'how_step3_text');
  set('[data-i18n="how_driver_subtitle"]', 'how_driver_subtitle');
  document.querySelectorAll('[data-i18n="how_driver1_title"]').forEach(el => el.textContent = t['how_driver1_title']);
  document.querySelectorAll('[data-i18n="how_driver1_text"]').forEach(el => el.textContent = t['how_driver1_text']);
  document.querySelectorAll('[data-i18n="how_driver2_title"]').forEach(el => el.textContent = t['how_driver2_title']);
  document.querySelectorAll('[data-i18n="how_driver2_text"]').forEach(el => el.textContent = t['how_driver2_text']);
  document.querySelectorAll('[data-i18n="how_driver3_title"]').forEach(el => el.textContent = t['how_driver3_title']);
  document.querySelectorAll('[data-i18n="how_driver3_text"]').forEach(el => el.textContent = t['how_driver3_text']);

  // ---------- BENEFITS ----------
  set('[data-i18n="benefits_badge"]', 'benefits_badge');
  set('[data-i18n="benefits_title"]', 'benefits_title');
  set('[data-i18n="benefit_passenger_title"]', 'benefit_passenger_title');
  set('[data-i18n="benefit_passenger_1"]', 'benefit_passenger_1');
  set('[data-i18n="benefit_passenger_2"]', 'benefit_passenger_2');
  set('[data-i18n="benefit_passenger_3"]', 'benefit_passenger_3');
  set('[data-i18n="benefit_passenger_4"]', 'benefit_passenger_4');
  set('[data-i18n="benefit_passenger_btn"]', 'benefit_passenger_btn');
  set('[data-i18n="benefit_driver_title"]', 'benefit_driver_title');
  set('[data-i18n="benefit_driver_1"]', 'benefit_driver_1');
  set('[data-i18n="benefit_driver_2"]', 'benefit_driver_2');
  set('[data-i18n="benefit_driver_3"]', 'benefit_driver_3');
  set('[data-i18n="benefit_driver_4"]', 'benefit_driver_4');
  set('[data-i18n="benefit_driver_btn"]', 'benefit_driver_btn');

  // ---------- TESTIMONIALS ----------
  set('[data-i18n="test_badge"]', 'test_badge');
  set('[data-i18n="test_title"]', 'test_title');
  set('[data-i18n="test1_text"]', 'test1_text');
  set('[data-i18n="test1_name"]', 'test1_name');
  set('[data-i18n="test1_location"]', 'test1_location');
  set('[data-i18n="test1_role"]', 'test1_role');
  set('[data-i18n="test2_text"]', 'test2_text');
  set('[data-i18n="test2_name"]', 'test2_name');
  set('[data-i18n="test2_location"]', 'test2_location');
  set('[data-i18n="test2_role"]', 'test2_role');
  set('[data-i18n="test3_text"]', 'test3_text');
  set('[data-i18n="test3_name"]', 'test3_name');
  set('[data-i18n="test3_location"]', 'test3_location');
  set('[data-i18n="test3_role"]', 'test3_role');

  // ---------- TEAM ----------
  set('[data-i18n="team_badge"]', 'team_badge');
  set('[data-i18n="team_title"]', 'team_title');
  set('[data-i18n="team_subtitle"]', 'team_subtitle');
  document.querySelectorAll('[data-i18n="team_role"]').forEach(el => el.textContent = t['team_role']);
  set('[data-i18n="team_andy_bio"]', 'team_andy_bio');
  set('[data-i18n="team_dalila_bio"]', 'team_dalila_bio');
  set('[data-i18n="team_jesus_bio"]', 'team_jesus_bio');
  set('[data-i18n="team_eduardo_bio"]', 'team_eduardo_bio');
  set('[data-i18n="team_sebastian_bio"]', 'team_sebastian_bio');

  // ---------- ABOUT THE TEAM ----------
  set('[data-i18n="about_team_badge"]', 'about_team_badge');
  set('[data-i18n="about_team_title"]', 'about_team_title');
  set('[data-i18n="about_team_subtitle"]', 'about_team_subtitle');
  document.querySelectorAll('[data-i18n="about_team_role"]').forEach(el => { el.textContent = t['about_team_role']; });
  set('[data-i18n="about_team_video_label"]', 'about_team_video_label');


  // ---------- PRICING ----------
  set('[data-i18n="pricing_badge"]', 'pricing_badge');
  set('[data-i18n="pricing_title"]', 'pricing_title');
  set('[data-i18n="pricing_subtitle"]', 'pricing_subtitle', 'innerHTML');
  set('[data-i18n="pricing_formula_label"]', 'pricing_formula_label');
  set('[data-i18n="pricing_formula_base_desc"]', 'pricing_formula_base_desc');
  set('[data-i18n="pricing_formula_km_desc"]', 'pricing_formula_km_desc');
  set('[data-i18n="pricing_formula_min_desc"]', 'pricing_formula_min_desc');
  set('[data-i18n="pricing_route1_name"]', 'pricing_route1_name');
  set('[data-i18n="pricing_route2_name"]', 'pricing_route2_name');
  set('[data-i18n="pricing_route3_name"]', 'pricing_route3_name');
  set('[data-i18n="pricing_route4_name"]', 'pricing_route4_name');
  document.querySelectorAll('[data-i18n="pricing_tag_min"]').forEach(el => el.textContent = t['pricing_tag_min']);
  document.querySelectorAll('[data-i18n="pricing_tag_calc"]').forEach(el => el.textContent = t['pricing_tag_calc']);
  set('[data-i18n="pricing_cta"]', 'pricing_cta');

  // ---------- FOOTER ----------
  set('[data-i18n="footer_terms"]', 'footer_terms');
  set('[data-i18n="footer_privacy"]', 'footer_privacy');
  set('[data-i18n="footer_contact"]', 'footer_contact');

  // ---------- CTA ----------
  set('[data-i18n="cta_title"]', 'cta_title');
  set('[data-i18n="cta_text"]', 'cta_text');
  set('[data-i18n="cta_btn_ride"]', 'cta_btn_ride');
  set('[data-i18n="cta_btn_drive"]', 'cta_btn_drive');
  set('[data-i18n="cta_login"]', 'cta_login');
  set('[data-i18n="cta_login_link"]', 'cta_login_link');

  // ---------- VIDEO PRODUCTO ----------
  set('[data-i18n="video_badge"]', 'video_badge');
  set('[data-i18n="video_title"]', 'video_title');
  set('[data-i18n="video_subtitle"]', 'video_subtitle');
  set('[data-i18n="video_duration"]', 'video_duration');
}

function switchLang(lang) {
  currentLang = lang;
  applyTranslations(lang);

  // Actualizar estado visual del toggle
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('lang-toggle__btn--active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Vincular botones del toggle
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  // Aplicar idioma inicial (español)
  applyTranslations('es');
});
