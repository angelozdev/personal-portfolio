/* Components */
import {
  Apollo,
  Express,
  Graphql,
  MongoDB,
  Node,
  Passport,
  TypeScript,
} from "components/Icons";

/* Theme */
import { colors } from "styles/theme";

/* Types */
import { Technology } from "types";

export const frontendTechnologies: Technology[] = [
  {
    title: "Node.js",
    Icon: Node,
    description: "",
    color: colors.node,
    href: "https://nodejs.org/en/",
  },
  {
    title: "Graphql",
    Icon: Graphql,
    description: "",
    color: colors.graphql,
    href: "https://graphql.org/",
  },
  {
    title: "Apollo Server",
    Icon: Apollo,
    description: "",
    color: colors.apollo,
    href: "https://www.apollographql.com/docs/apollo-server/",
  },
  {
    title: "MongoDB",
    Icon: MongoDB,
    description: "",
    color: colors.mongodb,
    href: "https://www.mongodb.com/",
  },
  {
    title: "Express",
    Icon: Express,
    description: "",
    color: colors.next,
    href: "https://expressjs.com/",
  },
  {
    title: "TypeScript",
    Icon: TypeScript,
    description: "",
    color: colors.typescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Passport.js",
    Icon: Passport,
    description: "",
    color: colors.next,
    href: "http://www.passportjs.org/",
  },
];

export default frontendTechnologies;
