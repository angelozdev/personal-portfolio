import { Sections } from "../../../constants/sections";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export interface ExperienceEntry {
	id: string;
	role: string;
	company: string;
	location: string;
	period: string;
	badge?: string;
	highlights: string[];
}

export interface ExperienceData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	entries: ExperienceEntry[];
}

interface EntryDefinition {
	id: string;
	hasBadge: boolean;
	highlightCount: number;
}

const entryDefinitions: EntryDefinition[] = [
	{ id: "ubidots", hasBadge: false, highlightCount: 5 },
	{ id: "keystone", hasBadge: true, highlightCount: 4 },
	{ id: "gradiweb", hasBadge: false, highlightCount: 1 },
];

export default function getExperienceData(lang: string): ExperienceData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.EXPERIENCE,
		commentLabel: t("experience.comment"),
		headline: t("experience.headline"),
		entries: entryDefinitions.map((definition) => ({
			id: definition.id,
			role: t(`experience.${definition.id}.role` as TranslationKey),
			company: t(`experience.${definition.id}.company` as TranslationKey),
			location: t(`experience.${definition.id}.location` as TranslationKey),
			period: t(`experience.${definition.id}.period` as TranslationKey),
			badge: definition.hasBadge
				? t(`experience.${definition.id}.badge` as TranslationKey)
				: undefined,
			highlights: Array.from(
				{ length: definition.highlightCount },
				(_, index) =>
					t(
						`experience.${definition.id}.highlight${index + 1}` as TranslationKey,
					),
			),
		})),
	};
}
