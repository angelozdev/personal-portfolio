import { colors } from "styles/theme";

interface IProject {
  color: string;
  title: string;
  description: string;
  cover?: string;
  size: number;
  urls: {
    official?: string;
    repository: string;
  };
}

export const projects: IProject[] = [
  {
    color: colors.cyan[900],
    title: "Muvick - A Streaming Platform",
    description:
      "Muvick is an on demand streaming platform where each user can watch their favorite movies and series and can get recommendations depending on their movies or series watched.",
    cover: "projects/muvick.jpg",
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
    cover: "projects/voting-app.jpg",
    size: 1,
    urls: {
      official: "https://voting-app-angelozdev.vercel.app/",
      repository: "https://github.com/angelozdev/voting-app-frontend",
    },
  },
];

export default projects;
