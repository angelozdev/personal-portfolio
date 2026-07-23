import { describe, expect, it } from "vitest";
import { brands, defaultBrand } from "../src/data/brands";

describe("brands", () => {
	it("ships four brands with the current one first", () => {
		expect(brands).toHaveLength(4);
		expect(brands[0].id).toBe(defaultBrand);
	});

	it("uses unique lowercase ids", () => {
		const ids = brands.map((brand) => brand.id);

		expect(new Set(ids).size).toBe(ids.length);
		for (const id of ids) {
			expect(id).toMatch(/^[a-z]+$/);
		}
	});
});
