import { describe, expect, it } from "vitest";
import getProjectsData from "../src/components/sections/projects/get-projects-data";

describe("getProjectsData", () => {
	it("returns a flat list of projects", () => {
		const data = getProjectsData("en");

		expect(Array.isArray(data.projects)).toBe(true);
		expect(data).not.toHaveProperty("openSource");
	});

	it("gives every project a media of a known type", () => {
		const data = getProjectsData("en");

		for (const project of data.projects) {
			if (!project.media) continue;
			expect(["image", "code"]).toContain(project.media.type);
		}
	});

	it("resolves image media to a bundled asset", () => {
		const data = getProjectsData("en");
		const quaestor = data.projects.find((project) => project.id === "quaestor");

		expect(quaestor?.media?.type).toBe("image");
		if (quaestor?.media?.type !== "image") return;
		expect(quaestor.media.src.src).toBeTruthy();
		expect(quaestor.media.src.width).toBeGreaterThan(0);
	});

	it("parses tech stack into an array", () => {
		const data = getProjectsData("en");

		for (const project of data.projects) {
			expect(project.techStack.length).toBeGreaterThan(0);
			for (const tech of project.techStack) {
				expect(tech).toBe(tech.trim());
			}
		}
	});

	it("ships the five approved projects in order", () => {
		const data = getProjectsData("en");

		expect(data.projects.map((project) => project.id)).toEqual([
			"quaestor",
			"ubidotsMobile",
			"designSystem",
			"keystoneFlags",
			"ossLibraries",
		]);
	});

	it("has no placeholder links", () => {
		const placeholders = [
			"example.com",
			"https://github.com",
			"https://npmjs.com",
		];

		for (const lang of ["en", "es"]) {
			for (const project of getProjectsData(lang).projects) {
				for (const link of project.links) {
					expect(placeholders).not.toContain(link.url);
					expect(link.url.startsWith("https://")).toBe(true);
				}
			}
		}
	});
});
