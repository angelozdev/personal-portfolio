const SELECTOR = ".copy-email";
const RESET_DELAY_MS = 2000;

const clickHandlers = new WeakMap<Element, () => void>();

function buildEmail(button: HTMLElement): string {
	const user = button.dataset.emailUser ?? "";
	const domain = button.dataset.emailDomain ?? "";
	return `${user}@${domain}`;
}

function announce(button: HTMLElement, message: string): void {
	const status = button.parentElement?.querySelector(".copy-email__status");
	if (status) {
		status.textContent = message;
	}
}

async function copy(button: HTMLElement): Promise<void> {
	const label = button.querySelector(".copy-email__label");
	const copiedLabel = button.dataset.copiedLabel ?? "";
	const idleLabel = button.dataset.copyLabel ?? "";

	if (!label) return;

	try {
		await navigator.clipboard.writeText(buildEmail(button));
		label.textContent = copiedLabel;
		button.setAttribute("data-copied", "true");
		announce(button, copiedLabel);

		window.setTimeout(() => {
			label.textContent = idleLabel;
			button.removeAttribute("data-copied");
			announce(button, "");
		}, RESET_DELAY_MS);
	} catch {
		const address = buildEmail(button);
		label.textContent = address;
		announce(button, address);
	}
}

function cleanup(): void {
	for (const button of document.querySelectorAll(SELECTOR)) {
		const handler = clickHandlers.get(button);
		if (handler) {
			button.removeEventListener("click", handler);
			clickHandlers.delete(button);
		}
	}
}

function init(): void {
	cleanup();

	for (const button of document.querySelectorAll<HTMLElement>(SELECTOR)) {
		const handler = () => {
			void copy(button);
		};
		clickHandlers.set(button, handler);
		button.addEventListener("click", handler);
	}
}

export default function initCopyEmail(): void {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	document.addEventListener("astro:before-swap", cleanup);
}
