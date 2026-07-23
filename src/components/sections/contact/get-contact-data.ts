import { Sections } from "../../../constants/sections";
import { getTranslations } from "../../../i18n/utils";

export interface ContactLink {
	label: string;
	url: string;
}

export interface ContactData {
	sectionId: string;
	commentLabel: string;
	headline: string;
	intro: string;
	email: {
		user: string;
		domain: string;
		copyLabel: string;
		copiedLabel: string;
	};
	cv: {
		href: string;
		label: string;
	};
	links: ContactLink[];
}

export default function getContactData(lang: string): ContactData {
	const t = getTranslations(lang);

	return {
		sectionId: Sections.CONTACT,
		commentLabel: t("contact.comment"),
		headline: t("contact.headline"),
		intro: t("contact.intro"),
		email: {
			user: "angelozam17",
			domain: "gmail.com",
			copyLabel: t("contact.email.copy"),
			copiedLabel: t("contact.email.copied"),
		},
		cv: {
			href: "/cv.pdf",
			label: t("contact.cv"),
		},
		links: [
			{
				label: t("contact.links.linkedin"),
				url: "https://www.linkedin.com/in/angelozdev/",
			},
			{
				label: t("contact.links.github"),
				url: "https://github.com/angelozdev",
			},
		],
	};
}
