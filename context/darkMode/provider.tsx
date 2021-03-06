import * as React from "react";
import { DarkModeContext } from "./context";

function DarkModeProvider({ children }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
