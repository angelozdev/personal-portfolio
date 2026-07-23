import { setDesign } from "../../../scripts/design";

const clickHandlers = new WeakMap<Element, () => void>();

function updateActiveState(): void {
	const current = document.documentElement.getAttribute("data-design");
	const buttons = document.querySelectorAll<HTMLElement>(
		".design-switcher__option",
	);

	for (const button of buttons) {
		const isActive = button.dataset.designId === current;
		button.setAttribute("aria-pressed", String(isActive));
	}
}

function switchDesign(designId: string): void {
	const apply = () => {
		setDesign(designId);
		updateActiveState();
	};

	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	if (prefersReducedMotion || !document.startViewTransition) {
		apply();
		return;
	}

	document.startViewTransition(apply);
}

function cleanup(): void {
	for (const button of document.querySelectorAll(".design-switcher__option")) {
		const handler = clickHandlers.get(button);
		if (handler) {
			button.removeEventListener("click", handler);
			clickHandlers.delete(button);
		}
	}
}

function init(): void {
	cleanup();
	updateActiveState();

	for (const button of document.querySelectorAll<HTMLElement>(
		".design-switcher__option",
	)) {
		const handler = () => {
			const designId = button.dataset.designId;
			if (designId) {
				switchDesign(designId);
			}
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}
}

export default function initDesignSwitcher(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
