export default interface DesignManifest {
	id: string;
	label: string;
	preloadFonts: string[];
	themeColor: {
		light: string;
		dark: string;
	};
}
