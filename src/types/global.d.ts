interface DesignThemeColor {
	light: string;
	dark: string;
}

declare global {
	interface Window {
		__designThemeColors?: Record<string, DesignThemeColor>;
	}
}

export {};
