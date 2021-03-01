import * as React from "react";

interface Context {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = React.createContext<Context>(null);

export default DarkModeContext;
