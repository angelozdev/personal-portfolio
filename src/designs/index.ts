import base from "./base/manifest";
import raw from "./raw/manifest";
import type DesignManifest from "./types";

const designs: DesignManifest[] = [base, raw];

export const defaultDesignId = base.id;
export default designs;
