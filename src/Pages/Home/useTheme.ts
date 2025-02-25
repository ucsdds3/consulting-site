import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
