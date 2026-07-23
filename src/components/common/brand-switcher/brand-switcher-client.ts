import { setBrand } from "../../../scripts/brand";

const clickHandlers = new WeakMap<Element, () => void>();

function updateActiveState(): void {
	const current = document.documentElement.getAttribute("data-brand");
	const buttons = document.querySelectorAll<HTMLElement>(
		".brand-switcher__option",
	);

	for (const button of buttons) {
		const isActive = button.dataset.brandId === current;
		button.setAttribute("aria-pressed", String(isActive));
	}
}

function cleanup(): void {
	for (const button of document.querySelectorAll(".brand-switcher__option")) {
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
		".brand-switcher__option",
	)) {
		const handler = () => {
			const brandId = button.dataset.brandId;
			if (brandId) {
				setBrand(brandId);
				updateActiveState();
			}
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}
}

export default function initBrandSwitcher(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
