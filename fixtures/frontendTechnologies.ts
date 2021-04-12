/* Components */
import {
  Css,
  Html,
  JavaScript,
  Next,
  React,
  Redux,
  Sass,
  Shopify,
  StyledComponents,
  Stylus,
  Tailwindcss,
  TypeScript,
  Webpack,
  Emotion,
  Bootstrap,
  ReactRouterDom,
} from "components/Icons";
import { ImageProps } from "next/image";

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
  {
    title: "Next.js",
    Icon: Next,
    description: "",
    color: colors.next,
    href: "https://nextjs.org/",
  },
  {
    title: "JavaScript",
    Icon: JavaScript,
    description: "",
    color: colors.javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    title: "HTML",
    Icon: Html,
    description: "",
    color: colors.html,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS3",
    Icon: Css,
    description: "",
    color: colors.css,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Shopify",
    Icon: Shopify,
    description: "",
    color: colors.shopify,
    href: "https://www.shopify.com/",
  },
  {
    title: "Redux",
    Icon: Redux,
    description: "",
    color: colors.redux,
    href: "https://redux.js.org/",
  },
  {
    title: "Stylus",
    Icon: Stylus,
    description: "",
    color: colors.stylus,
    href: "https://stylus-lang.com/",
  },
  {
    title: "Sass",
    Icon: Sass,
    description: "",
    color: colors.sass,
    href: "https://sass-lang.com/",
  },
  {
    title: "Tailwindcss",
    Icon: Tailwindcss,
    description: "",
    color: colors.tailwind,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Webpack",
    Icon: Webpack,
    description: "",
    color: colors.webpack,
    href: "https://webpack.js.org/",
  },
  {
    title: "Styled Components",
    Icon: StyledComponents,
    description: "",
    color: colors["styled-components"],
    href: "https://styled-components.com/",
  },
  {
    title: "Emotion",
    Icon: Emotion,
    description: "",
    color: "",
    href: "https://emotion.sh/",
  },
  {
    title: "Bootstrap",
    Icon: Bootstrap,
    description: "",
    color: colors.bootstrap,
    href: "https://getbootstrap.com/",
  },
  {
    title: "React Router Dom",
    Icon: ReactRouterDom,
    description: "",
    color: colors["react-router-dom"],
    href: "https://github.com/ReactTraining/react-router",
  },
];

export default frontendTechnologies;
