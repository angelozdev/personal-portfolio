import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import designs, { defaultDesignId } from "../src/designs";
import contractTokens from "../src/designs/contract";

const skinDesigns = designs.filter((design) => design.id !== defaultDesignId);

describe("design token contract", () => {
	it("covers at least one skin design", () => {
		expect(skinDesigns.length).toBeGreaterThanOrEqual(1);
	});

	for (const design of skinDesigns) {
		const cssUrl = new URL(
			`../src/designs/${design.id}/tokens.css`,
			import.meta.url,
		);
		const css = readFileSync(fileURLToPath(cssUrl), "utf-8");

		it(`${design.id} defines every contract token`, () => {
			for (const token of contractTokens) {
				expect(css, `missing ${token}`).toContain(`${token}:`);
			}
		});

		it(`${design.id} defines a dark variant`, () => {
			expect(css).toContain(`[data-theme="dark"][data-design="${design.id}"]`);
		});
	}
});
