import * as React from "react";

interface Context {
  theme: "light" | "dark";
  setTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const DarkModeContext = React.createContext<Context>({ theme: "light" });

export default DarkModeContext;
