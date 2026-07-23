import designs from "../../../designs";
import { getTranslations } from "../../../i18n/utils";

export interface DesignSwitcherData {
	label: string;
	designs: { id: string; label: string }[];
}

export default function getDesignSwitcherData(
	lang: string,
): DesignSwitcherData {
	const t = getTranslations(lang);

	return {
		label: t("design.switcherLabel"),
		designs: designs.map(({ id, label }) => ({ id, label })),
	};
}
