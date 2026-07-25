import Lenis from "lenis";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let lenis: Lenis | null = null;
let frame: number | null = null;

function focusTarget(hash: string): void {
	const target = document.querySelector<HTMLElement>(hash);
	if (!target) return;

	if (!target.hasAttribute("tabindex")) {
		target.setAttribute("tabindex", "-1");
	}

	target.focus({ preventScroll: true });
}

function handleAnchorClick(event: MouseEvent): void {
	if (!lenis) return;
	if (event.defaultPrevented || event.button !== 0) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

	const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
		'a[href^="#"]',
	);
	const hash = anchor?.getAttribute("href");
	if (!anchor || !hash || hash === "#") return;
	if (!document.querySelector(hash)) return;

	event.preventDefault();

	lenis.scrollTo(hash, {
		onComplete: () => focusTarget(hash),
	});

	if (window.location.hash !== hash) {
		window.history.pushState(null, "", hash);
	}
}

function start(): void {
	if (lenis) return;

	lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
		smoothWheel: true,
	});

	const raf = (time: number) => {
		lenis?.raf(time);
		frame = requestAnimationFrame(raf);
	};

	frame = requestAnimationFrame(raf);
	document.addEventListener("click", handleAnchorClick);
}

function stop(): void {
	document.removeEventListener("click", handleAnchorClick);

	if (frame !== null) {
		cancelAnimationFrame(frame);
		frame = null;
	}

	lenis?.destroy();
	lenis = null;
}

export default function initSmoothScroll(): () => void {
	const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

	const sync = () => {
		if (mediaQuery.matches) {
			stop();
		} else {
			start();
		}
	};

	sync();
	mediaQuery.addEventListener("change", sync);

	return () => {
		mediaQuery.removeEventListener("change", sync);
		stop();
	};
}
