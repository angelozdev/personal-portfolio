export default {
	"seo.title": "Angelo Zambrano | Software Engineer — Frontend, Mobile & AI",
	"seo.description":
		"Ingeniero de software con +5 años construyendo productos que usan decenas de miles de personas. Design systems, React Native a escala y tooling AI-native. Remoto desde Medellín, Colombia.",
	"seo.keywords":
		"Angelo Zambrano, Software Engineer, Frontend Engineer, AI Engineer, React, TypeScript, React Native, Design Systems, MCP, Python, Medellín, Colombia, LATAM, remoto",

	"nav.about": "Acerca",
	"nav.projects": "Proyectos",
	"nav.skills": "Habilidades",
	"nav.experience": "Experiencia",
	"nav.contact": "Contacto",
	"nav.menu": "Menú",

	"hero.title": "Software Engineer · Frontend, Mobile & AI",
	"hero.cta.projects": "Ver proyectos",
	"hero.cta.contact": "Contactar",

	"metrics.whiteLabel": "1 base de código → 10 apps white-label en producción",
	"metrics.users": "50K+ usuarios en iOS y Android",
	"metrics.designSystem": "Design system que sostiene toda una plataforma IoT",
	"metrics.ai": "Flujo AI-native: servidor MCP, tool calling, tooling de LLMs",
	"metrics.timezone":
		"Desde Colombia — solapamiento total con husos horarios de USA",

	// Theme
	"theme.toggle": "Cambiar tema",
	"theme.light": "Modo claro",
	"theme.dark": "Modo oscuro",

	// About
	"about.comment": "// 04 · about",
	"about.headline": "Un poco sobre mí",
	"about.paragraph1": "Soy ingeniero de software en Medellín, Colombia.",
	"about.paragraph2":
		"Empecé construyendo e-commerce para clientes de una agencia. Después lideré el desarrollo móvil de una plataforma IoT, donde diseñé una arquitectura white-label que convierte una sola base de código React Native en diez apps con marca independiente — hoy las usan más de 50 mil personas para monitorear sus dispositivos en tiempo real. En el camino construí el design system sobre el que funciona toda la plataforma.",
	"about.paragraph3":
		"Hoy trabajo en todo el stack: React y Django en Ubidots, y React, Next.js, Node y FastAPI en productos internos para una consultora de estrategia en Estados Unidos.",
	"about.paragraph4":
		"Lo que más disfruto es entender el porqué detrás de las decisiones técnicas. No me conformo con que algo funcione; quiero saber por qué funciona, y asegurarme de que quien venga después pueda entenderlo sin sufrir.",
	"about.paragraph5":
		"Últimamente mi trabajo se volvió AI-native — el equipo se reorganizó alrededor de eso, y yo mismo he estado construyendo con LLMs: un servidor MCP y una capa de modelos agnóstica de proveedor.",
	"about.stats.years.value": "5+",
	"about.stats.years.label": "años de experiencia",
	"about.stats.users.value": "50K+",
	"about.stats.users.label": "usuarios en producción",
	"about.stats.apps.value": "10",
	"about.stats.apps.label": "apps en producción",
	"about.availability": "Remoto · Medellín, Colombia (UTC−5)",

	// Projects
	"projects.comment": "// 01 · proyectos",
	"projects.headline": "Algunas cosas que he construido",

	"projects.quaestor.name": "Quaestor",
	"projects.quaestor.badge": "PERSONAL",
	"projects.quaestor.description":
		"Backend de finanzas personales local-first con una capa MCP agent-native. Un chat que responde sobre tus propios datos llamando a tus propias tools, con una capa de LLM agnóstica de proveedor. Construido con asistencia de IA en ~3 semanas; en uso diario.",
	"projects.quaestor.techStack":
		"Python, FastAPI, MCP, LiteLLM, Next.js, Docker",
	"projects.quaestor.imageAlt":
		"Chat de Quaestor respondiendo una pregunta sobre datos financieros de ejemplo",
	"projects.quaestor.links.0.label": "GitHub",
	"projects.quaestor.links.0.url": "https://github.com/angelozdev/quaestor",

	"projects.ubidotsMobile.name": "Ubidots Mobile",
	"projects.ubidotsMobile.badge": "PRODUCTO",
	"projects.ubidotsMobile.description":
		"Una sola base de código React Native, diez apps con marca y despliegue independientes en ambas tiendas. 50K+ usuarios monitoreando dispositivos IoT en tiempo real.",
	"projects.ubidotsMobile.techStack": "React Native, TypeScript, Firebase",
	"projects.ubidotsMobile.imageAlt":
		"App Ubidots Mobile corriendo en iOS y Android",
	"projects.ubidotsMobile.links.0.label": "App Store",
	"projects.ubidotsMobile.links.0.url":
		"https://apps.apple.com/app/ubidots/id1190666194",
	"projects.ubidotsMobile.links.1.label": "Play Store",
	"projects.ubidotsMobile.links.1.url":
		"https://play.google.com/store/apps/details?id=com.ubidots.ubidots",

	"projects.designSystem.name": "Design System de Ubidots",
	"projects.designSystem.description":
		"El design system sobre el que funciona toda la plataforma de Ubidots — ~25 componentes sobre primitivas de Radix, tokens en variables CSS y una especificación de 3 capas por componente. Construido en solitario; todo lo nuevo sale con él.",
	"projects.designSystem.techStack":
		"TypeScript, React, Radix, Storybook, a11y",
	"projects.designSystem.codeSnippet":
		"export default function DatePicker(props: DatePickerProps) {\n  const state = useDatePickerLogic(props);\n\n  return <DatePickerView {...state} />;\n}",

	"projects.keystoneFlags.name": "Sistema de roles y feature flags",
	"projects.keystoneFlags.badge": "KEYSTONE",
	"projects.keystoneFlags.description":
		"Capa de autorización propia, transversal a tres aplicaciones internas: ~10 roles, ~30 flags y UI de administración propia. Construida en una semana tras evaluar alternativas de mercado.",
	"projects.keystoneFlags.techStack": "React, Next.js, Node.js, FastAPI",
	"projects.keystoneFlags.codeSnippet":
		'const { can } = useFlags();\n\nif (!can("billing.invoice.approve")) {\n  return <Forbidden />;\n}',

	"projects.ossLibraries.name": "rustify-ts · chrono-convert",
	"projects.ossLibraries.badge": "CÓDIGO ABIERTO",
	"projects.ossLibraries.description":
		"Los tipos Result y Option de Rust llevados a TypeScript, y una librería de conversión de tiempo encadenable que corre en producción en una app con 50K+ usuarios.",
	"projects.ossLibraries.techStack": "TypeScript",
	"projects.ossLibraries.codeSnippet":
		"const user = await findUser(id);\nif (user.isOk()) render(user.unwrap());\n\nconst timeoutInMinutes = chrono(2).hours().toMinutes();",
	"projects.ossLibraries.links.0.label": "rustify-ts",
	"projects.ossLibraries.links.0.url":
		"https://www.npmjs.com/package/rustify-ts",
	"projects.ossLibraries.links.1.label": "chrono-convert",
	"projects.ossLibraries.links.1.url":
		"https://www.npmjs.com/package/chrono-convert",
} as const;
