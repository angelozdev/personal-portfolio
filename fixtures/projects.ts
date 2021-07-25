import { colors } from "styles/theme";

interface IProject {
  color: string;
  title: string;
  description: string;
  cover?: string;
  size: number;
  urls: {
    official?: string;
    repository?: string;
  };
}

export const projects: IProject[] = [
  {
    color: colors.cyan[900],
    title: "Muvick - A Streaming Platform",
    description:
      "Muvick is an on demand streaming platform where each user can watch their favorite movies and series and can get recommendations depending on their movies or series watched.",
    cover: "/projects/muvick.webp",
    size: 2,
    urls: {
      official: "https://muvick.com/",
      repository: "https://github.com/muvick-platzimaster/frontend",
    },
  },
  {
    color: colors.red[900],
    title: "Voting App",
    description: "With Voting-App you can vote for the candidate you prefer.",
    cover: "/projects/voting-app.webp",
    size: 1,
    urls: {
      official: "https://voting-app-angelozdev.vercel.app/",
      repository: "https://github.com/angelozdev/voting-app-frontend",
    },
  },
  {
    color: colors.gray[900],
    title: "Marvel Neumorphism",
    description:
      "Search your favorite marvel superheroes with a neumorphism design and dark mode integration.",
    cover: "/projects/marvel-neumorphism.webp",
    size: 1,
    urls: {
      official: "http://marvel-react-hooks-angelozdev.vercel.app/",
      repository: "https://github.com/angelozdev/marvel-react-hooks",
    },
  },
  {
    color: colors.amber[900],
    title: "My Unsplash",
    description:
      'My Unsplash is a challenge on the devchallenges.io page where each user can upload their images, see their own images and those of their friends. He has the option to "like" them and do a search for the label.',
    cover: "/projects/my-unsplash.webp",
    size: 2,
    urls: {
      official: "https://my-unsplash-one.vercel.app/login",
      repository: "https://github.com/CuttingEdgeCoders/my-unsplash-frontend",
    },
  },
  {
    color: colors.blue[900],
    title: "GitHub Search",
    description:
      "GitHub Search is an application where you can search Github's profiles and see their general information like repositories, starts, followers, and follows. Besides, it has performed dark mode.",
    cover: "/projects/github-search.webp",
    size: 1,
    urls: {
      official: "https://github-search-1355b.web.app/",
      repository: "https://github.com/angelozdev/github-search",
    },
  },
  {
    color: colors.tailwind,
    title: "SpaceX Launches",
    description:
      "See upcoming SpaceX launches and save your favorite launches. You can also see a countdown to the next launch.",
    cover: "/projects/space-x.webp",
    size: 1,
    urls: {
      official: "https://spacex-launches-red.vercel.app/",
    },
  },
  {
    color: colors.cyan[900],
    title: "CRM - Nextjs Application",
    description:
      "See upcoming SpaceX launches and save your favorite launches. You can also see a countdown to the next launch.",
    cover: "/projects/crm.webp",
    size: 2,
    urls: {
      official: "http://crm-nextjs-front-git-main.angelozdev.vercel.app/",
      repository: "https://github.com/angelozdev/crm-nextjs-front",
    },
  },
];

export default projects;
