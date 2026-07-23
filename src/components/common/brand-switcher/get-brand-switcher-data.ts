import { brands } from "../../../data/brands";
import { getTranslations } from "../../../i18n/utils";

export interface BrandSwitcherData {
	label: string;
	brands: { id: string; label: string }[];
}

export default function getBrandSwitcherData(lang: string): BrandSwitcherData {
	const t = getTranslations(lang);

	return {
		label: t("brand.switcherLabel"),
		brands,
	};
}
