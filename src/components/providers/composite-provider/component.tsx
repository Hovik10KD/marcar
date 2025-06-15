"use client";

import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { MantineProvider } from "@mantine/core";
import { ToggleThemeButton } from "@/components/atoms/toggle-theme-button";
import { useTheme } from "./hooks/use-theme";

export const CompositeProvider = ({ children }: PropsWithChildren) => {
  const { theme, themeConfigs, defaultTheme, toggleTheme } = useTheme();

  return (
    <MantineProvider theme={themeConfigs} defaultColorScheme={defaultTheme}>
      {children}

      <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </MantineProvider>
  );
};
