import { Sections } from "../../../constants/sections";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export type ProjectMedia =
	| { type: "image"; src: ImageMetadata; alt: string }
	| { type: "code"; snippet: string; language: string };

export interface ProjectLink {
	label: string;
	url: string;
	external: boolean;
}

export interface Project {
	id: string;
	name: string;
	badge?: string;
	description: string;
	techStack: string[];
	media?: ProjectMedia;
	links: ProjectLink[];
	featured: boolean;
}

export interface ProjectsData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	projects: Project[];
}

interface ProjectDefinition {
	id: string;
	prefix: string;
	featured: boolean;
	hasBadge: boolean;
	media:
		| { kind: "image"; imageName: string }
		| { kind: "code"; language: string };
	linkCount: number;
}

const projectImages = import.meta.glob<ImageMetadata>(
	"../../../assets/projects/*.{png,jpg,jpeg,webp,avif,svg}",
	{ eager: true, import: "default" },
);

const imagesByName = new Map(
	Object.entries(projectImages).map(([path, image]) => [
		path
			.split("/")
			.pop()
			?.replace(/\.[^.]+$/, ""),
		image,
	]),
);

const projectDefinitions: ProjectDefinition[] = [
	{
		id: "quaestor",
		prefix: "projects.quaestor",
		featured: true,
		hasBadge: true,
		media: { kind: "image", imageName: "quaestor" },
		linkCount: 1,
	},
	{
		id: "ubidotsMobile",
		prefix: "projects.ubidotsMobile",
		featured: false,
		hasBadge: true,
		media: { kind: "image", imageName: "ubidots-mobile" },
		linkCount: 2,
	},
	{
		id: "designSystem",
		prefix: "projects.designSystem",
		featured: false,
		hasBadge: false,
		media: { kind: "code", language: "tsx" },
		linkCount: 0,
	},
	{
		id: "keystoneFlags",
		prefix: "projects.keystoneFlags",
		featured: false,
		hasBadge: true,
		media: { kind: "code", language: "tsx" },
		linkCount: 0,
	},
	{
		id: "ossLibraries",
		prefix: "projects.ossLibraries",
		featured: false,
		hasBadge: true,
		media: { kind: "code", language: "typescript" },
		linkCount: 2,
	},
];

export default function getProjectsData(lang: string): ProjectsData {
	const t = getTranslations(lang);

	const parseTechStack = (prefix: string): string[] =>
		t(`${prefix}.techStack` as TranslationKey)
			.split(",")
			.map((tech) => tech.trim())
			.filter(Boolean);

	const buildLinks = (prefix: string, count: number): ProjectLink[] =>
		Array.from({ length: count }, (_, index) => ({
			label: t(`${prefix}.links.${index}.label` as TranslationKey),
			url: t(`${prefix}.links.${index}.url` as TranslationKey),
			external: true,
		}));

	const buildMedia = (
		definition: ProjectDefinition,
	): ProjectMedia | undefined => {
		if (definition.media.kind === "code") {
			return {
				type: "code",
				snippet: t(`${definition.prefix}.codeSnippet` as TranslationKey),
				language: definition.media.language,
			};
		}

		const src = imagesByName.get(definition.media.imageName);

		return src
			? {
					type: "image",
					src,
					alt: t(`${definition.prefix}.imageAlt` as TranslationKey),
				}
			: undefined;
	};

	return {
		sectionId: Sections.PROJECTS,
		commentLabel: t("projects.comment"),
		headline: t("projects.headline"),
		projects: projectDefinitions.map((definition) => ({
			id: definition.id,
			name: t(`${definition.prefix}.name` as TranslationKey),
			badge: definition.hasBadge
				? t(`${definition.prefix}.badge` as TranslationKey)
				: undefined,
			description: t(`${definition.prefix}.description` as TranslationKey),
			techStack: parseTechStack(definition.prefix),
			media: buildMedia(definition),
			links: buildLinks(definition.prefix, definition.linkCount),
			featured: definition.featured,
		})),
	};
}
