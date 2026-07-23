import { describe, expect, it } from "vitest";
import getAboutData from "../src/components/sections/about/get-about-data";

describe("getAboutData", () => {
	it("returns five paragraphs", () => {
		const data = getAboutData("en");

		expect(data.paragraphs).toHaveLength(5);
		for (const paragraph of data.paragraphs) {
			expect(paragraph).not.toBe("");
		}
	});

	it("returns three stats, all with a value", () => {
		const data = getAboutData("en");

		expect(data.stats).toHaveLength(3);
		for (const stat of data.stats) {
			expect(stat.value).not.toBe("");
			expect(stat.label).not.toBe("");
		}
	});

	it("keeps availability neutral, with no job-seeking signal", () => {
		for (const lang of ["en", "es"]) {
			const label = getAboutData(lang).availability.label;

			expect(label).not.toContain("Open to");
			expect(label).not.toContain("Abierto");
			expect(label).not.toContain("projects");
			expect(label).not.toContain("proyectos");
		}
	});

	it("claims a model layer, not an agent layer", () => {
		expect(getAboutData("en").paragraphs[4]).not.toContain("agent layer");
		expect(getAboutData("es").paragraphs[4]).not.toContain("capa de agentes");
	});
});
