import { toggleTheme, watchSystemPreference } from "../../../scripts/theme";

let observer: MutationObserver | null = null;
let cleanupSystemWatch: (() => void) | null = null;
const clickHandlers = new WeakMap<Element, () => void>();

function updateToggleIcons(): void {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const buttons = document.querySelectorAll(".theme-toggle");

	for (const button of buttons) {
		const sunIcon = button.querySelector(".theme-toggle__icon--sun");
		const moonIcon = button.querySelector(".theme-toggle__icon--moon");

		if (currentTheme === "dark") {
			sunIcon?.classList.add("theme-toggle__icon--active");
			moonIcon?.classList.remove("theme-toggle__icon--active");
		} else {
			moonIcon?.classList.add("theme-toggle__icon--active");
			sunIcon?.classList.remove("theme-toggle__icon--active");
		}
	}
}

function cleanup(): void {
	if (observer) {
		observer.disconnect();
		observer = null;
	}

	if (cleanupSystemWatch) {
		cleanupSystemWatch();
		cleanupSystemWatch = null;
	}

	const buttons = document.querySelectorAll(".theme-toggle");
	for (const button of buttons) {
		const handler = clickHandlers.get(button);
		if (handler) {
			button.removeEventListener("click", handler);
			clickHandlers.delete(button);
		}
	}
}

function init(): void {
	cleanup();
	updateToggleIcons();

	const buttons = document.querySelectorAll(".theme-toggle");
	for (const button of buttons) {
		const handler = () => {
			toggleTheme();
			updateToggleIcons();
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}

	cleanupSystemWatch = watchSystemPreference();

	observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === "data-theme"
			) {
				updateToggleIcons();
			}
		}
	});

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-theme"],
	});
}

export default function initThemeToggle(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
