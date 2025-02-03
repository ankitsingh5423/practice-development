import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  LightTheme: () => {},
});

export const Themeprovider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
