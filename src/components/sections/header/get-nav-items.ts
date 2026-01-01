import { Sections } from "../../../constants/sections";
import { getTranslations } from "../../../i18n/utils";

export interface NavItem {
	href: string;
	label: string;
}

export default function getNavItems(lang: string): NavItem[] {
	const t = getTranslations(lang);
	return [
		{ href: `#${Sections.ABOUT}`, label: t("nav.about") },
		{ href: `#${Sections.PROJECTS}`, label: t("nav.projects") },
		{ href: `#${Sections.SKILLS}`, label: t("nav.skills") },
		{ href: `#${Sections.EXPERIENCE}`, label: t("nav.experience") },
		{ href: `#${Sections.CONTACT}`, label: t("nav.contact") },
	];
}
