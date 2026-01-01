import { Sections } from "../../../constants/sections";
import { useTranslations } from "../../../i18n/utils";

export interface NavItem {
	href: string;
	label: string;
}

export function useNavItems(lang: string): NavItem[] {
	const t = useTranslations(lang);
	return [
		{ href: `#${Sections.ABOUT}`, label: t("nav.about") },
		{ href: `#${Sections.PROJECTS}`, label: t("nav.projects") },
		{ href: `#${Sections.SKILLS}`, label: t("nav.skills") },
		{ href: `#${Sections.EXPERIENCE}`, label: t("nav.experience") },
		{ href: `#${Sections.CONTACT}`, label: t("nav.contact") },
	];
}
