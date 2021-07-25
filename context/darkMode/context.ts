import { createContext, Dispatch, SetStateAction } from "react";

interface Context {
  theme: "light" | "dark";
  setTheme?: Dispatch<SetStateAction<"light" | "dark">>;
}

export const DarkModeContext = createContext<Context>({ theme: "light" });

export default DarkModeContext;
