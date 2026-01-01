import en from "./translations/en";
import es from "./translations/es";

const translations = { es, en } as const;

/**
 * Available locale codes.
 * @example
 * const lang: Locale = "es"; // Spanish
 * const lang: Locale = "en"; // English
 */
export type Locale = keyof typeof translations;

/**
 * Valid translation keys from the Spanish dictionary.
 * @example
 * const key: TranslationKey = "nav.about";
 * const key: TranslationKey = "hero.cta.projects";
 */
export type TranslationKey = keyof typeof es;

/** Default locale used when no locale is detected. */
export const defaultLocale: Locale = "en";

/** Array of all available locales. */
export const locales = Object.keys(translations) as Locale[];

/**
 * Extracts the locale from a URL pathname.
 * Returns the default locale if no valid locale is found.
 *
 * @param url - The URL object to extract the locale from.
 * @returns The detected locale or the default locale.
 *
 * @example
 * // In an Astro component:
 * const lang = getLangFromUrl(Astro.url);
 * // URL: /es/about -> returns "es"
 * // URL: /about -> returns "en" (default)
 */
export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang in translations) return lang as Locale;
	return defaultLocale;
}

/**
 * Returns a translation function for the specified locale.
 * Falls back to the default locale if the lang is invalid or a key is missing.
 *
 * @param lang - The locale to use (accepts Astro.currentLocale directly).
 * @returns A function that takes a translation key and returns the translated string.
 *
 * @example
 * // In an Astro component (no prop drilling needed):
 * const t = useTranslations(Astro.currentLocale);
 * t("nav.about"); // Returns "About" or "Acerca" based on current locale
 */
export function useTranslations(lang?: string) {
	const locale: Locale =
		lang && lang in translations ? (lang as Locale) : defaultLocale;
	return function t(key: TranslationKey): string {
		return translations[locale][key] || translations[defaultLocale][key];
	};
}

/**
 * Generates a localized path for the given locale.
 * The default locale paths remain unprefixed.
 *
 * @param path - The base path (e.g., "/", "/about").
 * @param lang - The target locale.
 * @returns The localized path.
 *
 * @example
 * getLocalizedPath("/", "en"); // Returns "/"
 * getLocalizedPath("/", "es"); // Returns "/es/"
 * getLocalizedPath("/about", "es"); // Returns "/es/about"
 */
export function getLocalizedPath(path: string, lang: Locale): string {
	if (lang === defaultLocale) return path;
	return `/${lang}${path}`;
}
