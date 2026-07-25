import "@fontsource/archivo-black/latin-400.css";
import "@fontsource/archivo/latin-400.css";
import "@fontsource/archivo/latin-500.css";
import "@fontsource/archivo/latin-700.css";
import "@fontsource/space-mono/latin-400.css";
import "@fontsource/space-mono/latin-700.css";
import "./tokens.css";
import "./elements.css";
import archivo400 from "@fontsource/archivo/files/archivo-latin-400-normal.woff2?url";
import archivoBlack400 from "@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2?url";
import spaceMono400 from "@fontsource/space-mono/files/space-mono-latin-400-normal.woff2?url";
import type DesignManifest from "../types";

const raw: DesignManifest = {
	id: "raw",
	label: "Raw",
	preloadFonts: [archivoBlack400, archivo400, spaceMono400],
	themeColor: {
		light: "#fffef2",
		dark: "#0a0a0a",
	},
};

export default raw;
