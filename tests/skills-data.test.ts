import { describe, expect, it } from "vitest";
import getSkillsData from "../src/components/sections/skills/get-skills-data";

describe("getSkillsData", () => {
	it("returns the seven groups in strength order", () => {
		const data = getSkillsData("en");

		expect(data.groups.map((group) => group.id)).toEqual([
			"frontend",
			"mobile",
			"backend",
			"ai",
			"data",
			"testing",
			"devops",
		]);
	});

	it("gives every group a translated title and at least one item", () => {
		const data = getSkillsData("en");

		for (const group of data.groups) {
			expect(group.title).not.toBe("");
			expect(group.title).not.toContain("skills.");
			expect(group.items.length).toBeGreaterThan(0);
		}
	});

	it("leaves out technologies that cannot be defended in an interview", () => {
		const allItems = getSkillsData("en").groups.flatMap((group) => group.items);

		expect(allItems).not.toContain("Rust");
		expect(allItems).not.toContain("Swift");
	});
});
