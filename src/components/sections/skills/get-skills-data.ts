import { Sections } from "../../../constants/sections";
import { skillGroups } from "../../../data/skills";
import { getTranslations, type TranslationKey } from "../../../i18n/utils";

export interface SkillGroup {
	id: string;
	title: string;
	items: string[];
}

export interface SkillsData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	groups: SkillGroup[];
}

export default function getSkillsData(lang: string): SkillsData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.SKILLS,
		commentLabel: t("skills.comment"),
		headline: t("skills.headline"),
		groups: skillGroups.map((group) => ({
			id: group.id,
			title: t(`skills.group.${group.id}` as TranslationKey),
			items: group.items,
		})),
	};
}
