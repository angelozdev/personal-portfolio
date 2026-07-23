import { describe, expect, it } from "vitest";
import en from "../src/i18n/translations/en";
import es from "../src/i18n/translations/es";

describe("i18n translations", () => {
	it("has the same keys in both locales", () => {
		const enKeys = Object.keys(en).sort();
		const esKeys = Object.keys(es).sort();

		expect(enKeys).toEqual(esKeys);
	});

	it("has no empty values", () => {
		const emptyEn = Object.entries(en).filter(
			([, value]) => (value as string) === "",
		);
		const emptyEs = Object.entries(es).filter(
			([, value]) => (value as string) === "",
		);

		expect(emptyEn).toEqual([]);
		expect(emptyEs).toEqual([]);
	});
});
