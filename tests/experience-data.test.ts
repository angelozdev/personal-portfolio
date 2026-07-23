import { describe, expect, it } from "vitest";
import getExperienceData from "../src/components/sections/experience/get-experience-data";

describe("getExperienceData", () => {
	it("lists the three roles, most recent first", () => {
		const data = getExperienceData("en");

		expect(data.entries.map((entry) => entry.id)).toEqual([
			"ubidots",
			"keystone",
			"gradiweb",
		]);
	});

	it("labels the keystone role as a contract", () => {
		const keystone = getExperienceData("en").entries.find(
			(entry) => entry.id === "keystone",
		);

		expect(keystone?.badge).toBe("CONTRACT");
	});

	it("never claims a mobile team lead title", () => {
		for (const lang of ["en", "es"]) {
			for (const entry of getExperienceData(lang).entries) {
				expect(entry.role).not.toContain("Team Lead");
			}
		}
	});

	it("gives every entry highlights", () => {
		for (const entry of getExperienceData("en").entries) {
			expect(entry.highlights.length).toBeGreaterThan(0);
			for (const highlight of entry.highlights) {
				expect(highlight).not.toBe("");
			}
		}
	});
});
