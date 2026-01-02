import { getItem, setItem } from "../libs/storage";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme-preference";
const THEME_ATTRIBUTE = "data-theme";

/**
 * Get the system's color scheme preference
 */
export function getSystemPreference(): ResolvedTheme {
	if (typeof window === "undefined") return "light";

	const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return isDark ? "dark" : "light";
}

/**
 * Get the stored theme preference from localStorage
 */
export function getStoredTheme(): Theme | null {
	const stored = getItem<Theme>(STORAGE_KEY);
	if (stored === "light" || stored === "dark" || stored === "system") {
		return stored;
	}
	return null;
}

/**
 * Get the resolved theme (actual theme to apply, never "system")
 */
export function getResolvedTheme(): ResolvedTheme {
	const stored = getStoredTheme();

	if (stored === "light" || stored === "dark") {
		return stored;
	}

	// If stored is "system" or null, use system preference
	return getSystemPreference();
}

/**
 * Apply theme to the document
 */
export function applyTheme(theme: ResolvedTheme): void {
	if (typeof window === "undefined") return;

	document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);

	// Update meta theme-color for mobile browsers
	const metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor) {
		const backgroundColor = theme === "dark" ? "#171717" : "#ffffff";
		metaThemeColor.setAttribute("content", backgroundColor);
	}
}

/**
 * Initialize theme on page load
 */
export function initTheme(): void {
	const theme = getResolvedTheme();
	applyTheme(theme);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
	if (typeof window === "undefined") return;

	const currentThemeAttr =
		document.documentElement.getAttribute(THEME_ATTRIBUTE);
	// Validate the attribute value, default to "light" if invalid
	const currentTheme: ResolvedTheme =
		currentThemeAttr === "dark" || currentThemeAttr === "light"
			? currentThemeAttr
			: "light";
	const newTheme: ResolvedTheme = currentTheme === "dark" ? "light" : "dark";

	setItem(STORAGE_KEY, newTheme);
	applyTheme(newTheme);
}

/**
 * Watch for system preference changes
 * Returns a cleanup function to remove the listener
 */
export function watchSystemPreference(): () => void {
	if (typeof window === "undefined") return () => {};

	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

	const handleChange = (event: MediaQueryListEvent) => {
		const stored = getStoredTheme();

		// Only auto-update if user hasn't explicitly set a preference
		if (stored === null || stored === "system") {
			const newTheme = event.matches ? "dark" : "light";
			applyTheme(newTheme);
		}
	};

	mediaQuery.addEventListener("change", handleChange);
	return () => mediaQuery.removeEventListener("change", handleChange);
}
