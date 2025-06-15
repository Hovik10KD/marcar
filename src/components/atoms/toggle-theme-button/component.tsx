import { ActionIcon } from "@mantine/core";
import { ColorScheme } from "@/lib/types/theme";
import { IconMoon, IconSun } from "@tabler/icons-react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { ToggleThemeButtonProps } from "./types";

const ICONS = {
  [ColorScheme.DARK]: <IconMoon size={18} />,
  [ColorScheme.LIGHT]: <IconSun size={18} />,
};

const CLASS_NAMES = {
  [ColorScheme.DARK]: styles.dark,
  [ColorScheme.LIGHT]: styles.light,
};

export const ToggleThemeButton = ({
  toggleTheme,
  theme,
}: ToggleThemeButtonProps) => {
  return (
    <ActionIcon
      onClick={toggleTheme}
      size="xl"
      aria-label="Toggle theme"
      variant="outline"
      className={clsx(styles.button, CLASS_NAMES[theme])}
    >
      {ICONS[theme]}
    </ActionIcon>
  );
};
