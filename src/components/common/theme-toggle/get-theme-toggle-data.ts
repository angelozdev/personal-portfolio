import { getTranslations } from "../../../i18n/utils";

export interface ThemeToggleData {
	ariaLabel: string;
}

export default function getThemeToggleData(lang: string): ThemeToggleData {
	const t = getTranslations(lang);

	return {
		ariaLabel: t("theme.toggle"),
	};
}
