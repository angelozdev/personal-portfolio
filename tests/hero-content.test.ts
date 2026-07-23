import { describe, expect, it } from "vitest";
import en from "../src/i18n/translations/en";
import es from "../src/i18n/translations/es";

describe("hero content", () => {
	it("does not claim a job title that does not exist on paper", () => {
		expect(en["hero.title"]).not.toContain("Team Lead");
		expect(es["hero.title"]).not.toContain("Team Lead");
	});

	it("exposes the five approved metrics", () => {
		const keys = [
			"metrics.whiteLabel",
			"metrics.users",
			"metrics.designSystem",
			"metrics.ai",
			"metrics.timezone",
		] as const;

		for (const key of keys) {
			expect(en[key]).toBeTruthy();
			expect(es[key]).toBeTruthy();
		}
	});

	it("drops the unsourced metrics", () => {
		const keys = Object.keys(en);

		expect(keys).not.toContain("metrics.cicd");
		expect(keys).not.toContain("metrics.testing");
		expect(keys).not.toContain("metrics.consulting");
	});

	it("claims one MCP server and no agents", () => {
		expect(en["metrics.ai"]).not.toContain("servers");
		expect(en["metrics.ai"]).not.toContain("agents");
		expect(es["metrics.ai"]).not.toContain("servidores");
		expect(es["metrics.ai"]).not.toContain("agentes");
	});
});
