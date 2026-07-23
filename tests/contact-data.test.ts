import { describe, expect, it } from "vitest";
import getContactData from "../src/components/sections/contact/get-contact-data";

describe("getContactData", () => {
	it("never exposes a full email address in the markup data", () => {
		const data = getContactData("en");

		expect(data.email.user).not.toContain("@");
		expect(data.email.domain).not.toContain("@");
		expect(JSON.stringify(data)).not.toContain("angelozam17@gmail.com");
	});

	it("points to the downloadable CV", () => {
		expect(getContactData("en").cv.href).toBe("/cv.pdf");
	});

	it("links to LinkedIn and GitHub only", () => {
		const data = getContactData("en");

		expect(data.links.map((link) => link.label)).toEqual([
			"LinkedIn",
			"GitHub",
		]);
	});
});
