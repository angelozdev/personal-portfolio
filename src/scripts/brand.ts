import { brands, defaultBrand } from "../data/brands";
import { getItem, setItem } from "../libs/storage";

const STORAGE_KEY = "brand-preference";
const BRAND_ATTRIBUTE = "data-brand";

export function getStoredBrand(): string | null {
	const stored = getItem<string>(STORAGE_KEY);
	if (stored && brands.some((brand) => brand.id === stored)) {
		return stored;
	}
	return null;
}

export function getResolvedBrand(): string {
	return getStoredBrand() ?? defaultBrand;
}

export function applyBrand(brandId: string): void {
	if (typeof window === "undefined") return;
	document.documentElement.setAttribute(BRAND_ATTRIBUTE, brandId);
}

export function setBrand(brandId: string): void {
	if (typeof window === "undefined") return;
	setItem(STORAGE_KEY, brandId);
	applyBrand(brandId);
}

export function initBrand(): void {
	applyBrand(getResolvedBrand());
}
