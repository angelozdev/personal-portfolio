import { describe, expect, it } from "vitest";
import designs, { defaultDesignId } from "../src/designs";

describe("designs registry", () => {
	it("ships the default design first", () => {
		expect(designs.length).toBeGreaterThanOrEqual(2);
		expect(designs[0].id).toBe(defaultDesignId);
	});

	it("uses unique lowercase ids", () => {
		const ids = designs.map((design) => design.id);

		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) {
			expect(id).toMatch(/^[a-z]+$/);
		}
	});

	it("labels every design", () => {
		for (const design of designs) {
			expect(design.label.length).toBeGreaterThan(0);
		}
	});
});
