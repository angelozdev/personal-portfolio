export default {
	"seo.title": "Angelo Zambrano | Software Engineer — Frontend, Mobile & AI",
	"seo.description":
		"Software engineer with 5+ years building products used by tens of thousands of people. Design systems, React Native at scale, and AI-native tooling. Remote from Medellín, Colombia.",
	"seo.keywords":
		"Angelo Zambrano, Software Engineer, Frontend Engineer, AI Engineer, React, TypeScript, React Native, Design Systems, MCP, Python, Medellín, Colombia, LATAM, remote",

	"nav.about": "About",
	"nav.projects": "Projects",
	"nav.skills": "Skills",
	"nav.experience": "Experience",
	"nav.contact": "Contact",
	"nav.menu": "Menu",

	"hero.title": "Software Engineer · Frontend, Mobile & AI",
	"hero.cta.projects": "View projects",
	"hero.cta.contact": "Contact",

	"metrics.whiteLabel": "1 codebase → 10 white-label apps in production",
	"metrics.users": "50K+ users across iOS and Android",
	"metrics.designSystem": "Design system powering an entire IoT platform",
	"metrics.ai": "AI-native workflow: MCP server, tool calling, LLM tooling",
	"metrics.timezone": "Based in Colombia — full overlap with US time zones",

	// Theme
	"theme.toggle": "Toggle theme",
	"theme.light": "Light mode",
	"theme.dark": "Dark mode",

	// About
	"about.comment": "// 04 · about",
	"about.headline": "A bit about me",
	"about.paragraph1": "I'm a software engineer based in Medellín, Colombia.",
	"about.paragraph2":
		"I started out building e-commerce for agency clients. Then I led mobile development for an IoT platform, where I designed a white-label architecture that turns a single React Native codebase into ten independently branded apps — now used by more than 50,000 people to monitor their devices in real time. Along the way I built the design system that the entire platform runs on today.",
	"about.paragraph3":
		"These days I work across the stack: React and Django at Ubidots, and React, Next.js, Node and FastAPI on internal products for a US strategy consultancy.",
	"about.paragraph4":
		"What I enjoy most is understanding the why behind technical decisions. I'm not satisfied with something just working; I want to know why it works, and make sure whoever comes next can understand it without struggling.",
	"about.paragraph5":
		"Lately my work has gone AI-native — the team restructured around it, and I've been building with LLMs myself: an MCP server and a provider-agnostic model layer.",
	"about.stats.years.value": "5+",
	"about.stats.years.label": "years of experience",
	"about.stats.users.value": "50K+",
	"about.stats.users.label": "users in production",
	"about.stats.apps.value": "10",
	"about.stats.apps.label": "apps in production",
	"about.availability": "Remote · Medellín, Colombia (UTC−5)",

	// Projects
	"projects.comment": "// projects",
	"projects.headline": "Some things I've built",
	"projects.openSource.divider": "Open Source",

	// Featured Project: Ubidots Mobile
	"projects.featured.ubidots.name": "Ubidots Mobile",
	"projects.featured.ubidots.badge": "PRODUCT",
	"projects.featured.ubidots.description": "IoT monitoring app with 50K+ users",
	"projects.featured.ubidots.techStack": "React Native, TypeScript, Firebase",
	"projects.featured.ubidots.imageAlt": "Ubidots Mobile app screenshot",
	"projects.featured.ubidots.links.0.label": "App Store",
	"projects.featured.ubidots.links.0.url":
		"https://apps.apple.com/app/ubidots/id1190666194",
	"projects.featured.ubidots.links.1.label": "Play Store",
	"projects.featured.ubidots.links.1.url":
		"https://play.google.com/store/apps/details?id=com.ubidots.ubidots",

	// Regular Projects
	"projects.regular.project1.name": "E-commerce Platform",
	"projects.regular.project1.description":
		"Custom headless e-commerce solution with Shopify integration",
	"projects.regular.project1.techStack": "Next.js, TypeScript, Shopify API",
	"projects.regular.project1.imageAlt": "E-commerce platform screenshot",
	"projects.regular.project1.links.0.label": "Demo",
	"projects.regular.project1.links.0.url": "https://example.com",
	"projects.regular.project1.links.1.label": "GitHub",
	"projects.regular.project1.links.1.url": "https://github.com",

	"projects.regular.project2.name": "Analytics Dashboard",
	"projects.regular.project2.description":
		"Real-time analytics dashboard for IoT devices",
	"projects.regular.project2.techStack": "React, TypeScript, D3.js",
	"projects.regular.project2.imageAlt": "Analytics dashboard screenshot",
	"projects.regular.project2.links.0.label": "Demo",
	"projects.regular.project2.links.0.url": "https://example.com",
	"projects.regular.project2.links.1.label": "GitHub",
	"projects.regular.project2.links.1.url": "https://github.com",

	// Open Source Projects
	"projects.oss.rustifyTs.name": "rustify-ts",
	"projects.oss.rustifyTs.description":
		"Rust-inspired Result and Option types for TypeScript",
	"projects.oss.rustifyTs.techStack": "TypeScript",
	"projects.oss.rustifyTs.codeSnippet":
		"const result = Ok(42);\nif (result.isOk()) {\n  console.log(result.unwrap());\n}",
	"projects.oss.rustifyTs.links.0.label": "GitHub",
	"projects.oss.rustifyTs.links.0.url": "https://github.com",
	"projects.oss.rustifyTs.links.1.label": "npm",
	"projects.oss.rustifyTs.links.1.url": "https://npmjs.com",

	"projects.oss.chronoConvert.name": "chrono-convert",
	"projects.oss.chronoConvert.description":
		"Type-safe time unit conversions inspired by Rust's chrono",
	"projects.oss.chronoConvert.techStack": "TypeScript",
	"projects.oss.chronoConvert.codeSnippet":
		"chrono(2).hours().toMinutes() // 120",
	"projects.oss.chronoConvert.links.0.label": "GitHub",
	"projects.oss.chronoConvert.links.0.url": "https://github.com",
	"projects.oss.chronoConvert.links.1.label": "npm",
	"projects.oss.chronoConvert.links.1.url": "https://npmjs.com",
} as const;
