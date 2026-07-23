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
			expect(["image", "code"]).toContain(project.media.type);
		}
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
});
