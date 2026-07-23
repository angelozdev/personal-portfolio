import designs, { defaultDesignId } from "../designs";
import { getItem, setItem } from "../libs/storage";

const STORAGE_KEY = "design-preference";
const DESIGN_ATTRIBUTE = "data-design";

export function getStoredDesign(): string | null {
	const stored = getItem<string>(STORAGE_KEY);
	if (stored && designs.some((design) => design.id === stored)) {
		return stored;
	}
	return null;
}

export function getResolvedDesign(): string {
	return getStoredDesign() ?? defaultDesignId;
}

export function applyDesign(designId: string): void {
	if (typeof window === "undefined") return;
	document.documentElement.setAttribute(DESIGN_ATTRIBUTE, designId);
}

export function setDesign(designId: string): void {
	if (typeof window === "undefined") return;
	setItem(STORAGE_KEY, designId);
	applyDesign(designId);
}
