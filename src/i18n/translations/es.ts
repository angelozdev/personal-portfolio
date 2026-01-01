export default {
	// SEO
	"seo.title": "Angelo Zambrano | Senior Software Engineer & Mobile Team Lead",
	"seo.description":
		"Mobile-focused Software Engineer con +5 años de experiencia. Construí una app React Native de 0 a 50K+ usuarios. Especializado en TypeScript, React Native, React y Node.js.",
	"seo.keywords":
		"Angelo Zambrano, Software Engineer, Mobile Developer, React Native, TypeScript, React, Node.js, Medellín, Colombia",

	// Nav
	"nav.about": "Acerca",
	"nav.projects": "Proyectos",
	"nav.skills": "Habilidades",
	"nav.experience": "Experiencia",
	"nav.contact": "Contacto",
	"nav.menu": "Menú",

	// Hero
	"hero.title": "Senior Software Engineer & Mobile Team Lead",
	"hero.cta.projects": "Ver proyectos",
	"hero.cta.contact": "Contactar",

	// Metrics
	"metrics.years": "+5 años construyendo productos digitales",
	"metrics.app": "App React Native de 0 → 50K+ usuarios en Ubidots",
	"metrics.cicd": "CI/CD pipelines: -40% tiempo de deploy",
	"metrics.testing":
		"Testing culture: reducción significativa de bugs en producción",
	"metrics.consulting": "Consultoría frontend para clientes en USA",

	// Theme
	"theme.toggle": "Cambiar tema",
	"theme.light": "Modo claro",
	"theme.dark": "Modo oscuro",

	// About
	"about.comment": "// about",
	"about.headline": "Un poco sobre mí",
	"about.paragraph1": "Soy ingeniero de software en Medellín, Colombia.",
	"about.paragraph2":
		"Empecé construyendo e-commerce para clientes en Estados Unidos y Europa. Después pasé a liderar el desarrollo móvil de una plataforma IoT—una app que hoy usan más de 50 mil personas para monitorear sus dispositivos en tiempo real. También he trabajado en arquitectura frontend para startups estadounidenses.",
	"about.paragraph3":
		"Lo que más disfruto es entender el porqué detrás de las decisiones técnicas. No me conformo con que algo funcione; quiero saber por qué funciona, y asegurarme de que quien venga después pueda entenderlo sin sufrir.",
	"about.paragraph4":
		"Últimamente ando explorando machine learning. Me gusta la idea de que el código pueda aprender de los datos, no solo procesarlos.",
	"about.stats.years.value": "5+",
	"about.stats.years.label": "años de experiencia",
	"about.stats.users.value": "50K+",
	"about.stats.users.label": "usuarios en producción",
	"about.stats.clients.value": "",
	"about.stats.clients.label": "Clientes en US, EU, LATAM",
	"about.availability": "Disponible para proyectos remotos",

	// Projects
	"projects.comment": "// proyectos",
	"projects.headline": "Algunas cosas que he construido",
	"projects.openSource.divider": "Código Abierto",

	// Featured Project: Ubidots Mobile
	"projects.featured.ubidots.name": "Ubidots Mobile",
	"projects.featured.ubidots.badge": "PRODUCTO",
	"projects.featured.ubidots.description":
		"App de monitoreo IoT con 50K+ usuarios",
	"projects.featured.ubidots.techStack": "React Native, TypeScript, Firebase",
	"projects.featured.ubidots.imageAlt":
		"Captura de pantalla de la app Ubidots Mobile",
	"projects.featured.ubidots.links.0.label": "App Store",
	"projects.featured.ubidots.links.0.url":
		"https://apps.apple.com/app/ubidots/id1190666194",
	"projects.featured.ubidots.links.1.label": "Play Store",
	"projects.featured.ubidots.links.1.url":
		"https://play.google.com/store/apps/details?id=com.ubidots.ubidots",

	// Regular Projects
	"projects.regular.project1.name": "Plataforma E-commerce",
	"projects.regular.project1.description":
		"Solución e-commerce headless personalizada con integración Shopify",
	"projects.regular.project1.techStack": "Next.js, TypeScript, Shopify API",
	"projects.regular.project1.imageAlt":
		"Captura de pantalla de plataforma e-commerce",
	"projects.regular.project1.links.0.label": "Demo",
	"projects.regular.project1.links.0.url": "https://example.com",
	"projects.regular.project1.links.1.label": "GitHub",
	"projects.regular.project1.links.1.url": "https://github.com",

	"projects.regular.project2.name": "Dashboard de Análisis",
	"projects.regular.project2.description":
		"Dashboard de análisis en tiempo real para dispositivos IoT",
	"projects.regular.project2.techStack": "React, TypeScript, D3.js",
	"projects.regular.project2.imageAlt":
		"Captura de pantalla del dashboard de análisis",
	"projects.regular.project2.links.0.label": "Demo",
	"projects.regular.project2.links.0.url": "https://example.com",
	"projects.regular.project2.links.1.label": "GitHub",
	"projects.regular.project2.links.1.url": "https://github.com",

	// Open Source Projects
	"projects.oss.rustifyTs.name": "rustify-ts",
	"projects.oss.rustifyTs.description":
		"Tipos Result y Option inspirados en Rust para TypeScript",
	"projects.oss.rustifyTs.techStack": "TypeScript",
	"projects.oss.rustifyTs.codeSnippet":
		"const result = Ok(42);\nif (result.isOk()) {\n  console.log(result.unwrap());\n}",
	"projects.oss.rustifyTs.links.0.label": "GitHub",
	"projects.oss.rustifyTs.links.0.url": "https://github.com",
	"projects.oss.rustifyTs.links.1.label": "npm",
	"projects.oss.rustifyTs.links.1.url": "https://npmjs.com",

	"projects.oss.chronoConvert.name": "chrono-convert",
	"projects.oss.chronoConvert.description":
		"Conversiones de unidades de tiempo type-safe inspiradas en chrono de Rust",
	"projects.oss.chronoConvert.techStack": "TypeScript",
	"projects.oss.chronoConvert.codeSnippet":
		"chrono(2).hours().toMinutes() // 120",
	"projects.oss.chronoConvert.links.0.label": "GitHub",
	"projects.oss.chronoConvert.links.0.url": "https://github.com",
	"projects.oss.chronoConvert.links.1.label": "npm",
	"projects.oss.chronoConvert.links.1.url": "https://npmjs.com",
} as const;
