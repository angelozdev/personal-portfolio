import { Gmail, Twitter, GitHub, LinkedIn } from "components/Icons";
import { colors } from "styles/theme";
import { SVGProps } from "types";

type SocialNetwork = {
  title: string;
  Icon: (props: SVGProps) => JSX.Element;
  color: string;
  href: string;
};

export const socialNetworks: SocialNetwork[] = [
  {
    title: "GitHub",
    Icon: GitHub,
    color: colors.github,
    href: "https://www.github.com/angelozdev",
  },
  {
    title: "LinkedIn",
    Icon: LinkedIn,
    color: colors.linkedin,
    href: "https://www.linkedin.com/in/angelozdev",
  },
  {
    title: "Gmail",
    Icon: Gmail,
    color: colors.gmail,
    href: "mailto:angelozam17@gmail.com",
  },
  {
    title: "Twitter",
    Icon: Twitter,
    color: colors.twitter,
    href: "https://www.twitter.com/angelozdev",
  },
];

export default socialNetworks;
