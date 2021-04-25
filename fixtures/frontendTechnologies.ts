/* Components */
import {
  Apollo,
  Babel,
  Bootstrap,
  Css,
  Emotion,
  Html,
  JavaScript,
  Jest,
  Next,
  React,
  ReactRouterDom,
  Redux,
  Sass,
  Shopify,
  StyledComponents,
  Stylus,
  Tailwindcss,
  TypeScript,
  Webpack,
} from "components/Icons";

/* Theme */
import { colors } from "styles/theme";

/* Types */
import { Technology } from "types";

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
    title: "Apollo Client",
    Icon: Apollo,
    description: "",
    color: colors.apollo,
    href: "https://www.apollographql.com/docs/react/",
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
    title: "Babel",
    Icon: Babel,
    description: "",
    color: colors.babel,
    href: "https://babeljs.io/",
  },
  {
    title: "Jest",
    Icon: Jest,
    description: "",
    color: colors.jest,
    href: "https://jestjs.io/",
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
