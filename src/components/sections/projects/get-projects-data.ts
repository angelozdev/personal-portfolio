import { Sections } from "../../../constants/sections";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export interface ProjectsData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	projects: Project[];
	openSource: {
		dividerLabel: string;
		projects: OSSProject[];
	};
}

export interface Project {
	name: string;
	badge?: string;
	description: string;
	techStack: string[];
	image: {
		src: string;
		alt: string;
	};
	links: ProjectLink[];
	featured: boolean;
}

export interface OSSProject {
	name: string;
	description: string;
	codeSnippet?: string;
	techStack: string[];
	links: ProjectLink[];
	featured: boolean;
}

export interface ProjectLink {
	label: string;
	url: string;
	external: boolean;
}

export default function getProjectsData(lang: string): ProjectsData {
	const t = getTranslations(lang);

	// Helper to parse comma-separated tech stack string to array
	const parseTechStack = (key: TranslationKey): string[] => {
		const stackString = t(key);
		return stackString.split(",").map((tech) => tech.trim());
	};

	// Helper to build links array from translation keys
	const buildLinks = (prefix: string): ProjectLink[] => {
		const links: ProjectLink[] = [];
		let index = 0;

		while (true) {
			const labelKey = `${prefix}.links.${index}.label` as TranslationKey;
			const urlKey = `${prefix}.links.${index}.url` as TranslationKey;

			try {
				const label = t(labelKey);
				const url = t(urlKey);

				if (!label || !url) break;

				links.push({
					label,
					url,
					external: true,
				});

				index++;
			} catch {
				break;
			}
		}

		return links;
	};

	// Build projects array
	const projects: Project[] = [
		{
			name: t("projects.featured.ubidots.name"),
			badge: t("projects.featured.ubidots.badge"),
			description: t("projects.featured.ubidots.description"),
			techStack: parseTechStack("projects.featured.ubidots.techStack"),
			image: {
				src: "/images/projects/ubidots-mobile.webp",
				alt: t("projects.featured.ubidots.imageAlt"),
			},
			links: buildLinks("projects.featured.ubidots"),
			featured: true,
		},
		{
			name: t("projects.regular.project1.name"),
			description: t("projects.regular.project1.description"),
			techStack: parseTechStack("projects.regular.project1.techStack"),
			image: {
				src: "/images/projects/project1.webp",
				alt: t("projects.regular.project1.imageAlt"),
			},
			links: buildLinks("projects.regular.project1"),
			featured: false,
		},
		{
			name: t("projects.regular.project2.name"),
			description: t("projects.regular.project2.description"),
			techStack: parseTechStack("projects.regular.project2.techStack"),
			image: {
				src: "/images/projects/project2.webp",
				alt: t("projects.regular.project2.imageAlt"),
			},
			links: buildLinks("projects.regular.project2"),
			featured: false,
		},
	];

	// Build OSS projects array
	const ossProjects: OSSProject[] = [
		{
			name: t("projects.oss.rustifyTs.name"),
			description: t("projects.oss.rustifyTs.description"),
			techStack: parseTechStack("projects.oss.rustifyTs.techStack"),
			codeSnippet: t("projects.oss.rustifyTs.codeSnippet"),
			links: buildLinks("projects.oss.rustifyTs"),
			featured: false,
		},
		{
			name: t("projects.oss.chronoConvert.name"),
			description: t("projects.oss.chronoConvert.description"),
			techStack: parseTechStack("projects.oss.chronoConvert.techStack"),
			codeSnippet: t("projects.oss.chronoConvert.codeSnippet"),
			links: buildLinks("projects.oss.chronoConvert"),
			featured: false,
		},
	];

	return {
		sectionId: Sections.PROJECTS,
		commentLabel: t("projects.comment"),
		headline: t("projects.headline"),
		projects,
		openSource: {
			dividerLabel: t("projects.openSource.divider"),
			projects: ossProjects,
		},
	};
}
