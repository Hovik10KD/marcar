import { useLayoutEffect, useState } from "react";
import { createTheme } from "@mantine/core";
import { ColorScheme } from "@/lib/types/theme";

const THEMES = {
  [ColorScheme.LIGHT]: createTheme({
    colors: {
      dark: [
        "#ebedff",
        "#d1d6fa",
        "#9ea8f8",
        "#6a78f7",
        "#414ff6",
        "#2b36f6",
        "#212af8",
        "#181edd",
        "#101ac5",
        "#000e75",
      ],
    },
    primaryColor: "dark",
  }),
  [ColorScheme.DARK]: createTheme({
    colors: {
      dark: [
        "#dffbff",
        "#caf2ff",
        "#99e2ff",
        "#64d2ff",
        "#3cc4fe",
        "#23bcfe",
        "#00b5ff",
        "#00a1e4",
        "#008fcd",
        "#007cb6",
      ],
    },
    primaryColor: "dark",
  }),
};

export const useTheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    ColorScheme.LIGHT
  );

  const toggleTheme = () =>
    setColorScheme((prev) =>
      prev === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT
    );

  useLayoutEffect(() => {
    const saved = localStorage.getItem("color-scheme") as ColorScheme | null;
    if (saved) {
      setColorScheme(saved);
    }
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("color-scheme", colorScheme);

    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${colorScheme}`);
  }, [colorScheme]);

  return {
    toggleTheme,
    themeConfigs: THEMES[colorScheme],
    theme: colorScheme,
    defaultTheme: ColorScheme.LIGHT,
  };
};
