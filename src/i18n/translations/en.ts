export default {
	// SEO
	"seo.title": "Angelo Zambrano | Senior Software Engineer & Mobile Team Lead",
	"seo.description":
		"Mobile-focused Software Engineer with 5+ years of experience. Built a React Native app from 0 to 50K+ users. Specialized in TypeScript, React Native, React, and Node.js.",
	"seo.keywords":
		"Angelo Zambrano, Software Engineer, Mobile Developer, React Native, TypeScript, React, Node.js, Medellín, Colombia",

	// Nav
	"nav.about": "About",
	"nav.projects": "Projects",
	"nav.skills": "Skills",
	"nav.experience": "Experience",
	"nav.contact": "Contact",
	"nav.menu": "Menu",

	// Hero
	"hero.title": "Senior Software Engineer & Mobile Team Lead",
	"hero.cta.projects": "View projects",
	"hero.cta.contact": "Contact",

	// Metrics
	"metrics.years": "5+ years building digital products",
	"metrics.app": "React Native app from 0 → 50K+ users at Ubidots",
	"metrics.cicd": "CI/CD pipelines: -40% deployment time",
	"metrics.testing":
		"Testing culture: significant reduction in production bugs",
	"metrics.consulting": "Frontend consulting for US-based clients",

	// Theme
	"theme.toggle": "Toggle theme",
	"theme.light": "Light mode",
	"theme.dark": "Dark mode",

	// About
	"about.comment": "// about",
	"about.headline": "A bit about me",
	"about.paragraph1": "I'm a software engineer based in Medellín, Colombia.",
	"about.paragraph2":
		"I started building e-commerce for clients in the US and Europe. Then I moved on to lead mobile development for an IoT platform—an app now used by over 50 thousand people to monitor their devices in real time. I've also worked on frontend architecture for US-based startups.",
	"about.paragraph3":
		"What I enjoy most is understanding the why behind technical decisions. I'm not satisfied with something just working; I want to know why it works, and make sure whoever comes next can understand it without struggling.",
	"about.paragraph4":
		"Lately I've been exploring machine learning. I like the idea that code can learn from data, not just process it.",
	"about.stats.years.value": "5+",
	"about.stats.years.label": "years of experience",
	"about.stats.users.value": "50K+",
	"about.stats.users.label": "users in production",
	"about.stats.clients.value": "",
	"about.stats.clients.label": "Clients in US, EU, LATAM",
	"about.availability": "Available for remote projects",

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
