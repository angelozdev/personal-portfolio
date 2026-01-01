import { Sections } from "../../../constants/sections";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export interface AboutData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	paragraphs: string[];
	stats: Stat[];
	availability: {
		isAvailable: boolean;
		label: string;
	};
}

export interface Stat {
	value: string;
	label: string;
}

interface StatDefinition {
	valueKey: TranslationKey;
	labelKey: TranslationKey;
}

const statDefinitions: StatDefinition[] = [
	{ valueKey: "about.stats.years.value", labelKey: "about.stats.years.label" },
	{ valueKey: "about.stats.users.value", labelKey: "about.stats.users.label" },
	{
		valueKey: "about.stats.clients.value",
		labelKey: "about.stats.clients.label",
	},
];

export default function getAboutData(lang: string): AboutData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.ABOUT,
		commentLabel: t("about.comment"),
		headline: t("about.headline"),
		paragraphs: [
			t("about.paragraph1"),
			t("about.paragraph2"),
			t("about.paragraph3"),
			t("about.paragraph4"),
		],
		stats: statDefinitions.map((stat) => ({
			value: t(stat.valueKey),
			label: t(stat.labelKey),
		})),
		availability: {
			isAvailable: true,
			label: t("about.availability"),
		},
	};
}
