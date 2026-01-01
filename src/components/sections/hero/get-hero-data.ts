import { Sections } from "../../../constants/sections";
import { stack } from "../../../data/stack";
import {
	getTranslations,
	type TranslationKey,
} from "../../../i18n/utils";

export interface HeroData {
	name: string;
	photoUrl: string;
	photoAlt: string;
	title: string;
	metrics: string[];
	stack: string[];
	ctaProjects: {
		href: string;
		label: string;
	};
	ctaContact: {
		href: string;
		label: string;
	};
	sectionId: string;
}

const metricsKeys: TranslationKey[] = [
	"metrics.years",
	"metrics.app",
	"metrics.cicd",
	"metrics.testing",
	"metrics.consulting",
];

export default function getHeroData(lang: string): HeroData {
	const t = getTranslations(lang);

	return {
		name: "Angelo Zambrano",
		photoUrl: "/angelozam.jpeg",
		photoAlt: "Angelo Zambrano",
		title: t("hero.title"),
		metrics: metricsKeys.map((key) => t(key)),
		stack,
		ctaProjects: {
			href: `#${Sections.PROJECTS}`,
			label: t("hero.cta.projects"),
		},
		ctaContact: {
			href: `#${Sections.CONTACT}`,
			label: t("hero.cta.contact"),
		},
		sectionId: Sections.HERO,
	};
}
