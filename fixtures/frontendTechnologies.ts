/* Components */
import { React, TypeScript } from "components/Icons";

/* Theme */
import { colors } from "styles/theme";

/* Types */
import { SVGProps } from "types";

type Technology = {
  title: string;
  Icon: (props: SVGProps) => JSX.Element;
  description: string;
  color: string;
  href: string;
};

export const frontendTechnologies: Technology[] = [
  {
    title: "React.js",
    Icon: React,
    description: "",
    color: colors.react,
    href: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    Icon: TypeScript,
    description: "",
    color: colors.typescript,
    href: "https://www.typescriptlang.org/",
  },
];

export default frontendTechnologies;
