import * as React from "react";
import { DarkModeContext } from "./context";

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
